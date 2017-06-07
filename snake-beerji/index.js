var game = {
	canvas: null,
	WIDTH: 800,
	HEIGHT: 600,
	SIZE: 10,
	init: function(){
		var elem = document.getElementById('canvas');
		elem.width = this.WIDTH+2;
		elem.height = this.HEIGHT+2;
		this.canvas = elem.getContext('2d');
		this.canvas.lineWidth = 1;
		this.canvas.strokeRect(0,0,this.WIDTH+2,this.HEIGHT+2);
		snack.init();
		snackHead.rander();
		snackHead.timer = setInterval(snackHead.autoMove.bind(snackHead),snackHead.SPEED);
		food.appear();
		document.body.onkeydown = function(e){
			switch (e.keyCode)
			{
				case 38:  //上
					snackHead.moveTop();
					break;
				case 40:  //下
					snackHead.moveBottom();
					break;
				case 37:  //左
					snackHead.moveLeft();
					break;
				case 39:   //右
					snackHead.moveRight();
					break;
			}
		};
	}
}
var snack = {
	fullBody:[],
	length: 0,
	init : function(){
		this.fullBody.push(snackHead)	
	},
	eat : function(){
		if(snackHead.x == food.x && snackHead.y == food.y){
			food.changePosition();
			this.length++;
			var body = new SnackBody(this.length);

			this.fullBody.push(body);
		}
	}
}
var snackHead = {
	SPEED: 200,
	SIZE: game.SIZE,
	x: 1,
	y: 1,
	prevx:0,
	prevy:0,
	xDirection: 1,
	yDirection: 1,
	direction: 1,
	timer: null,
	move: function(){
		game.canvas.clearRect(1,1,game.WIDTH,game.HEIGHT);
		game.canvas.fillStyle = "#000";
		for(var i=0;i<snack.fullBody.length;i++){
			snack.fullBody[i].rander();
		}		

		snack.eat();
		food.appear();
	},
	canMove : function(){
		if((this.x>=1 && this.x<=(game.WIDTH+1-this.SIZE)) && (this.y>=1 && this.y<= (game.HEIGHT+1-this.SIZE))){
			return true;
		}else{
			return false;
		}
	},
	moveRight: function(){
		this.savePrevPosition();
		this.x += this.SIZE;
		if(this.canMove()){
			this.xDirection = 1;
			this.direction = 1;
			this.move();
		}else{
			this.x -= this.SIZE;
		}
	},
	moveLeft: function(){
		this.savePrevPosition();
		this.x -= this.SIZE;
		if(this.canMove()){
			this.xDirection = -1;
			this.direction = 1;
			this.move();
		}else{
			this.x += this.SIZE;
		}
	},
	moveTop: function(){
		this.savePrevPosition();
		this.y -= this.SIZE;
		if(this.canMove()){
			this.yDirection = -1;
			this.direction = 0;
			this.move();
		}else{
			this.y += this.SIZE;
		}
	},
	moveBottom: function(){
		this.savePrevPosition();
		this.y += this.SIZE;
		if(this.canMove()){
			this.yDirection = 1;
			this.direction = 0;
			this.move();
		}else{
			this.y -= this.SIZE;
		}
	},
	autoMove: function(){
		this.savePrevPosition();
		if(this.direction ==1){
			this.x += this.xDirection*this.SIZE;
		}else{
			this.y += this.yDirection*this.SIZE;
		}
		this.move();
	},
	rander: function(){
		game.canvas.fillStyle = "green";
		game.canvas.fillRect(this.x-5,this.y-5,this.SIZE+10,this.SIZE+10);
	},
	savePrevPosition: function(){
		this.prevx = this.x;
		this.prevy = this.y;
	}
}
function SnackBody(id){
	this.prevBody = null;
	this.id = id;
	this.x = 0;
	this.y = 0;
	this.prevx = 0;
	this.prevy = 0;
	this.create = function(){
		this.prevBody = snack.fullBody[this.id-1];
		this.rander();
	}
	/**
	this.move = function(){
		if(snack.fullBody[this.id-1].direction == 1){
			this.direction == 1;
			if(snack.fullBody[this.id-1].xDirection == 1){
				this.xDirection == 1;
				this.x = snack.fullBody[this.id-1].x - game.SIZE;
			}else{
				this.xDirection == -1;
				this.x = snack.fullBody[this.id-1].x + game.SIZE;
			}
		}else{
			this.direction == 0;
			if(snack.fullBody[this.id-1].yDirection == 1){
				this.yDirection == 1;
				this.y = snack.fullBody[this.id-1].y - game.SIZE;
			}else{
				this.yDirection == -1;
				this.y = snack.fullBody[this.id-1].y - game.SIZE;
			}
		}
	}
	**/
	this.rander = function(){
		this.prevx = this.x;
		this.prevy = this.y;
		this.x = snack.fullBody[this.id-1].prevx;
		this.y = snack.fullBody[this.id-1].prevy;
		//console.log(snack.fullBody[this.id-1])
		//console.log(this.x,this.y,this.xDirection,this.yDirection,this.direction);
		game.canvas.fillStyle = "blue";
		game.canvas.fillRect(this.x,this.y,game.SIZE,game.SIZE);
	}
}
var food = {
	SIZE: game.SIZE,
	x: 251,
	y: 151,
	changePosition: function(){
		this.x = (Math.floor(Math.random()*(game.WIDTH/game.SIZE)))*this.SIZE+1;
		this.y = (Math.floor(Math.random()*(game.HEIGHT/game.SIZE)))*this.SIZE+1;
	},
	appear: function(){
		game.canvas.fillStyle = "#ff0033";
		game.canvas.fillRect(this.x,this.y,this.SIZE,this.SIZE);
	}
}
game.init();