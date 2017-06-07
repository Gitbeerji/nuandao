var data = [[    //   服务器中读取的轮播图数据
  {i:0,img:'images/slider/0-0.jpg'},
  {i:1,img:'images/slider/0-1.jpg'},
  {i:2,img:'images/slider/0-2.jpg'},
  {i:3,img:'images/slider/0-3.jpg'}],
  [
    {index:'images/slider/1-0.png'},
    {index:'images/slider/1-1.jpg'},
    {index:'images/slider/1-2.png'},
    {index:'images/slider/1-3.jpg'}
  ]
];



/**功能1： 轮播广告的实现  **/
var banner = {
	init: function(){
		var html = "";
		$.each(data[0],function(i,val){html += '<a href="#"><img src="'+val.img+'"></a>'});
		$('.banner').html(html);
	}
}
banner.init();
var count = data[0].length
$(".banner").css({width:1920*count}); 
var n=0; 
function runLeft(){
	if(n<count-1){
		n = n+1;
	}else{
		$(".banner").css({marginLeft:-960});
		n = 1;
	}
	$(".banner").stop().animate({marginLeft:(-960-1920*n)},1000);
	$(".banner_btn li").removeClass("currentLi");
	if(n == count-1){
		$(".banner_btn li").eq(0).addClass("currentLi");
	}else{
		$(".banner_btn li").eq(n).addClass("currentLi");	
	}
}
var timer=setInterval(runLeft,2000);
$(".banner_btn li").hover(function(){
	clearInterval(timer);
	n = $(".banner_btn li").index(this);
	$(".banner").stop().animate({marginLeft:(-960-1920*n)},1000);
	$(".banner_btn li").removeClass("currentLi");
	$(this).addClass("currentLi");
},function(){
	timer=setInterval(runLeft,2000);	
})


var imgs = data[0]   //轮播图片数据
var indexs = data[1]  //轮播图片下的index图片数据

//获得用户显示器的宽度，以获得的宽度来设置轮播图片容器的宽度(有bug)
var width = screen.width-17;
var height = Math.floor(width*525/1920);
$('#slider').css('width',width+'px');
$('#slider').css('height',height+'px'); // 高度根据得到的宽度计算获得
var slider = {
  LIWIDTH: 0,  // 保存每个里的宽度，就是容器的宽度
  DURATION: 300,  //动画的总时间
  WAIT: 3000,   //自动轮播之间的等待时间
  timer: null,  //保存一次性定时器序号
  canAuto: true, //保存是否可以自动轮播
  init: function(){
    this.LIWIDTH = width;
    this.updateView();  // 将数据加载到页面上去
    $('.slider-prev').click(function(e){
      e.preventDefault();
      this.move(-1)
    }.bind(this));
    $('.slider-next').click(function(e){
      e.preventDefault();
      this.move(1)
    }.bind(this));
    //为id为index下的div绑定鼠标进入事件，只有不是hover的div才能响应事件
    $('#index').on("mouseenter",'li>div:not(.hover)',function(e){
      //获取目标元素$target
      var $target = $(e.target);
      //调用move方法，传入要移动的个数
        //目标元素data-num值 - index下div.hover的data-num值；
      this.move($target.data('num')-$('#index>ul div.hover').data('num'));
    }.bind(this));

    $("#slider").hover(
      function(){
        this.canAuto=false;
        $('#index>ul').stop(true).animate({
          bottom: '20px'
        },500);
        $('a.slider-prev').stop(true).animate({left:'0px'},500)
        $('a.slider-next').stop(true).animate({right:'0px'},500)
      }.bind(this),
      function(){
        this.canAuto=true;
        $('#index>ul').stop(true).animate({bottom: '-80px'},500);
        $('a.slider-prev').stop(true).animate({left: '-38px'},500)
        $('a.slider-next').stop(true).animate({right: '-38px'},500)
      }.bind(this)
    )

    this.autoMove();
  },
  updateView: function(){  //
    for(var i=0,html='',idxs='';i<imgs.length;i++){
      html += "<li><a href='#' style='height:"+height+"px;width:"+this.LIWIDTH+"px;background-image:url("+imgs[i].img+")'></a></li>";
      idxs += "<li><img src='"+indexs[i].index+"'><div data-num='"+(i+1)+"'></div></li>";
    }
    $('#imgs').html(html).css('width',this.LIWIDTH*imgs.length);
    $('#index ul').html(idxs).css('width',(imgs.length*110+80)+"px").css('left',(width-imgs.length*110+80)/2+'px');
    $('#index>ul>li>div').removeClass('hover');
    $("#index>ul>li:eq("+imgs[0].i+")").children('div').addClass("hover");
  },
  autoMove: function(){
    this.timer = setTimeout(
      function(){
        if(this.canAuto){
          this.move(1);
        }else{
          this.autoMove();
        }
      }.bind(this),this.WAIT);
  },
  move: function(n){
    clearTimeout(this.timer);
    this.timer = null;
    $('#imgs').stop(true);
    if(n<0){
      n *= -1;
      imgs = imgs.splice(imgs.length-n,n).concat(imgs);
      this.updateView();
      var left = parseFloat($('#imgs').css('left'));
      $("#imgs").css("left",left-n*this.LIWIDTH);
      //启动动画，在DURATION时间内，left移动到0
      $("#imgs").animate(
        {left:"0"},
        this.DURATION,
        this.autoMove.bind(this)
      );
    }else{
      //让#imgs的ul再DURATION事件内，left变为-n*LIWIDTH
      $("#imgs").animate(
        {left:-n*this.LIWIDTH+"px"},
        this.DURATION,
        //在动画结束后调用endMove,替换this，传入参数n
        this.endMove.bind(this,n)
      );
    }
  },
  endMove: function(n){
    //删除imgs开头的n个元素,再拼到结尾
    imgs=imgs.concat(imgs.splice(0,n))
    this.updateView();//更新页面
    $("#imgs").css("left",0);//设置#imgs的left为0
    this.autoMove();//启动自动轮播
  }
}
slider.init();




/**功能2：商品图鼠标移入的下面的小标题出现**/
$('.sale-week,.sale-today').on('mouseenter','.sale-imga>img',function(e){
							$(e.target).next().stop(true).animate({bottom:'0px'},400)})
						.on('mouseleave','.sale-imga>img',function(e){
							$(e.target).next().stop(true).animate({bottom:'-40px'},400)});

/**功能3：当页面加载完成后，异步从数据库中取出商品信息加载到主页**/
$(function(){
	$.ajax({
		url: 'data/index_show.php',
		success: function(list){
			var html = "";
			for(var i=0;i<list.length;i++){
				html += '<div class="sale-leaf"><a href="detail.html?'+list[i].sno+
					'0" class="sale-imga" title="'+list[i].stitle+
					'"><img src="images/'+list[i].sno+
					'.jpg"/><div>'+list[i].stitle+
					'</div></a><div><a href="detail.html?'+list[i].sno+
					'0" title="'+list[i].sinfo+
					'">'+list[i].sinfo+'</a></div></div>';
			}
			$('.sale-today-current').html(html);
		}
	})
	//$('.sale-today-current')
});