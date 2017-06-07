/**创建一个名为snake的对象**/
var snake = {
	canvas: null,       //canvas画笔
	WALLWIDTH: 800,     //可活动宽度
	WALLHEIGHT: 600,    //可活动高度
	SIZE: 25,	        //蛇身体大小
	SPEED:1000,			//自动移动的速度
	body:[],			//保存蛇本体的数组，里面的元素也是数组，包含蛇身体部分的x，y坐标
	food:[],			//存储食物x,y坐标的数组
	head:[],			//存储蛇头x,y坐标的数组
	moveDirection: "",  //蛇头目前的移动方向，top/bottom/left/right
	timer: null,        //自动移动的定时器
	state: 0,			//游戏状态
	RUNNING: 1,			//游戏运行
	GAMEOVER: 0,		//游戏结束
	init: function(){   //初始化函数
		/*设置画布宽高、获得画笔*/
		canvas.width = this.WALLWIDTH+2;
		canvas.height = this.WALLHEIGHT+2;
		this.canvas = canvas.getContext('2d');
		this.canvas.lineWidth = 1;
		this.canvas.strokeRect(0,0,this.WALLWIDTH+2,this.WALLHEIGHT+2); //绘制表示游戏范围的边框
		
		/*初始化游戏状态*/
		this.state = this.RUNNING;   //游戏状态改为正在运行
		this.createSnake();          //随机位置生成蛇的头部
		this.createFood();			 //随机位置生成食物
		this.rander();               //在画面中渲染出蛇和食物

		/*按键事件*/
		document.body.onkeydown = function(e){    //为按键绑定事件
			if(this.state == this.RUNNING){
				switch(e.keyCode){
					case 38: //up
						if(this.moveDirection == "down" && this.body.length !=1){ return; }  //当蛇的身体长度大于1的时候，蛇不能掉头，这里做一个判定
						this.moveDirection = "up";   //按下上键后，蛇头的移动方向改为向上
						break;
					case 40: //down
						if(this.moveDirection == "up" && this.body.length !=1){ return; }
						this.moveDirection = "down";
						break;
					case 37: //left
						if(this.moveDirection == "right" && this.body.length !=1){ return; }
						this.moveDirection = "left";
						break;
					case 39: //right
						if(this.moveDirection == "left" && this.body.length !=1){ return; }
						this.moveDirection = "right";
						break;
				}
				if(!this.timer){ this.timer = setInterval(this.move.bind(this),this.SPEED);} //如果定时器里没值，说明游戏刚开始，启动定时器
				this.move();  //根据蛇头的方向作出移动
			}
		}.bind(this);	
	},
	createSnake: function(){   //随机生成蛇头位置
		this.body = [[]];
		this.body[0][0] = (Math.floor(Math.random()*(this.WALLWIDTH/this.SIZE)))*this.SIZE+1;
		this.body[0][1] = (Math.floor(Math.random()*(this.WALLHEIGHT/this.SIZE)))*this.SIZE+1;
	},
	createFood: function(){   //随机生成食物位置
		while(1){
			this.food[0] = (Math.floor(Math.random()*(this.WALLWIDTH/this.SIZE)))*this.SIZE+1;
			this.food[1] = (Math.floor(Math.random()*(this.WALLHEIGHT/this.SIZE)))*this.SIZE+1;
			if(this.judgeFoodPosition()){break;}    //循环直到食物的位置不与蛇身体部分重合才退出
			if(this.state == this.GAMEOVER){break;} //如果游戏已经结束了，也退出循环
		}
	},
	judgeFoodPosition: function(){    //判断食物的位置是否与蛇身体位置重合
		for(var i=0;i<this.body.length;i++){   //遍历代表蛇身体的数组
			if(this.food[0] == this.body[i][0] && this.food[1] == this.body[i][1]){
				return false;      //存在重合，返回false
			}
		}
		return true;    //不存在重合，返回true
	},
	rander: function(){  //渲染蛇身体以及食物
		this.canvas.clearRect(1,1,this.WALLWIDTH,this.WALLHEIGHT);
		for(var i=0;i<this.body.length;i++){
			this.canvas.fillStyle = "#009933";
			this.canvas.fillRect(this.body[i][0],this.body[i][1],this.SIZE,this.SIZE);
			if(i==0){
				this.canvas.fillStyle = "#fff";
				this.canvas.fillRect(this.body[i][0]+this.SIZE/4,this.body[i][1]+this.SIZE/4,this.SIZE/2,this.SIZE/2);
			}
		}
		this.canvas.fillStyle = "#ff0066";
		this.canvas.fillRect(this.food[0],this.food[1],this.SIZE,this.SIZE);
	},
	move: function(){
		switch (this.moveDirection){
			case "up":
				this.head[0] = this.body[0][0]
				this.head[1] = this.body[0][1] - this.SIZE;
				break;
			case "down":
				this.head[0] = this.body[0][0]
				this.head[1] = this.body[0][1] + this.SIZE;
				break;
			case "right":
				this.head[0] = this.body[0][0] +this.SIZE;
				this.head[1] = this.body[0][1]
				break;
			case "left":
				this.head[0] = this.body[0][0] - this.SIZE;
				this.head[1] = this.body[0][1];
				break;
		}
		if(!this.eatFood()){
			this.body.unshift([this.head[0],this.head[1]]);
			this.body.pop(this.body[this.body.length-1]);
		}
		this.rander();
		if(this.isGameOver()){this.gameOver()}
	},
	eatFood: function(){
		if(this.head[0] == this.food[0] && this.head[1] == this.food[1]){
			this.head[0] = this.food[0];
			this.head[1] = this.food[1];
			this.body.unshift([this.head[0],this.head[1]]);
			this.createFood();
			return true;
		}else{
			return false;
		}
	},
	isGameOver: function(){
		if(this.body.length == (this.WALLWIDTH/this.SIZE)*(this.WALLHEIGHT/this.SIZE)-1){return true;}
		for(var i=1;i<this.body.length;i++){
			if(this.body[0][0] == this.body[i][0] && this.body[0][1] == this.body[i][1]){return true;}
		}
		if(this.body[0][0] < 0 || this.body[0][0] >= this.WALLWIDTH){return true}
		if(this.body[0][1] < 0 || this.body[0][1] >= this.WALLHEIGHT){return true}

		return false;
	},
	gameOver: function(){
		this.state = this.GAMEOVER;
		clearInterval(this.timer);
		this.timer = null;
		this.canvas.clearRect(1,1,this.WALLWIDTH,this.WALLHEIGHT);
		this.canvas.textBaseline = 'bottom';
		this.canvas.font = "160px SimHei";
		this.canvas.fillStyle = "#000";
		this.canvas.fillText('Game Over',40,300);
		this.canvas.font = "60px SimHei";
		this.canvas.fillText('您的得分是：'+(this.body.length-1)+'分',160,400);
	}
}
snake.init();