/**DOM加载完成后异步请求商品数据**/
var pno = location.search.replace('?','');
$(function(){
	$.ajax({
		type: 'GET',
		url: 'data/detail.php',
		data: 'pno='+pno,
		success: function(arr){
			if(arr.msg == 'succ'){
				randerNowProduct(arr.nowproduct);
				randerSeriesProduct(arr.seriesproduct);
				randerSide(arr.seriesproduct);
				$('.brand>a').html(arr.series.sname);
			}else{
			}
		}
	})
})

//加载目前商品信息
function randerNowProduct(obj){
	//加载商品信息
	$('head>title').html(obj.pname);
	$('.crumbs>a').html(obj.pname);
	$('.product-detail>dt').html(obj.pname);
	$('.product-price').html('￥'+parseInt(obj.price));
	$('.simple-story').html(obj.pinfo);
	$('.p-text').html(obj.pinfo);
	$('#product-count').html(obj.pcount);

	//加载商品的图片
	var html = "";
	for(var i=0;i<obj.picCount;i++){
		html += '<li><img '+((i==0)?'class="selected"':'')+' data-img="'+obj.pno+'-'+i+'"src="images/product/'+obj.pno+'-'+i+'-100.jpg" /></li>'
	}
	$('.img-list').html(html);
	$('.img-show').data('img',obj.pno+'-0').css('background-image','url(images/product/'+obj.pno+'-0-450.jpg)');
	$('.show-large').css('background-image','url(images/product/'+obj.pno+'-0-1200.jpg)')
	html = '';
	//加载商品的详细介绍
	for(var i=0;i<obj.picDetailCount;i++){
		html += '<div><img src="images/product/'+(pno+i)+'.jpg"></div>'
	}
	$('.p-img>div').html(html);
}
//加载系列商品信息
function randerSeriesProduct(arr){
	var html = '';
	for(var i=0;i<arr.length;i++){
		html += '<a data-pno="'+arr[i].pno+'" href="detail.html?'+arr[i].pno+'"><img src="images/product/'+arr[i].pno+'-0-100.jpg"></a>';
	}
	$('.series-product').html(html);
	$('.series-product>a[data-pno='+pno+']').addClass('selected');
}

//加载侧边商品信息
function randerSide(arr){
	var html = '';
	for(var i=0;i<arr.length;i++){
		html += '<li class="ald-item"><div class="ald-img"><a href="detail.html?'+arr[i].pno+'"><img src="images/product/'+arr[i].pno+'-0-300.jpg" title=""/></a><p>￥'+parseInt(arr[i].price)+'</p></div></li>';
	}
	$('.ald-slider-container').html(html);
}


/**左侧小图，切换中图**/
$('.img-list').on('click','li>img',function(e){
	$('.img-list>li>img').removeClass('selected');
	$(e.target).addClass('selected');
	$('.img-show').css('background-image','url(images/product/'+$(e.target).data('img')+'-450.jpg)').data('img',$(e.target).data('img'));
	$('.show-large').css('background-image','url(images/product/'+$(e.target).data('img')+'-1200.jpg)')
})

/**鼠标移入中图，放大镜效果**/
$('.img-show').mousemove(function(e){
	var size = 465*465/1200;
	var range = 285;
	var x=e.offsetX;//获得鼠标相对于父元素的x
    var y=e.offsetY;//获得鼠标相对于父元素的y
    //计算mask的left: x-MSIZE/2
    var left=x-size/2;
    //计算mask的top: y-MSIZE/2
    var top=y-size/2;
    //如果left越界，要改回边界值
    left=left<0?0:
         left>range?range:
         left;
    //如果top越界，要改回边界值
    top=top<0?0:
        top>range?range:
        top;
    //设置clas为show-large的背景图片位置:
    $(".show-large").css(
		{
			'display':'block',
			'backgroundPosition':(-left*1200/465)+"px "+(-top*1200/465)+"px"});
})
$('.img-show').mouseleave(function(){
	$('.show-large').css('display','none');
})

/**右侧<看了又看> 上下翻页效果**/
$('.ald-prev-btn').click(function(){
	var top = parseInt($('.ald-slider-container').css('top'));
	if(top == 0){
		$('.ald-slider-container').animate({top:'-426px'},400);
	}
	if(top == -426){
		$('.ald-item:lt(3)').css('top','852px');
		$('.ald-slider-container').animate({top:'-852px'},400,function(){
			$('.ald-slider-container').css('top','0px')
			$('.ald-item:lt(3)').css('top','0px');
		});
	}
})
$('.ald-next-btn').click(function(){
	var top = parseInt($('.ald-slider-container').css('top'));
	if(top == 0){
		$('.ald-item:gt(2)').css('top','-852px');
		$('.ald-slider-container').animate({top:'426px'},400,function(){
			$('.ald-item:gt(2)').css('top','0px');
			$('.ald-slider-container').css('top','-426px');
		})
	}
	if(top == -426){
		$('.ald-slider-container').animate({top:'0px'},400)
	}
})

/**购买数量的加减**/
$('.buy-num>a').click(function(e){
	e.preventDefault();
	var num = parseInt($('#buy-count').val());
	if($(this).html()=='+'){
		$('#buy-count').val(++num);
	}else{
		$('#buy-count').val(--num);
	}
	judgeBuyCount();
})
/**购买数量输入框失去焦点后数据合法性处理**/
$('#buy-count').blur(function(){
	judgeBuyCount();
})
/**判断购买数量输入框中数据合法性**/
function judgeBuyCount(){
	var num = parseInt($('#buy-count').val());
	var max = parseInt($('#product-count').html());
	if(isNaN(num) || num<1){
		parseInt($('#buy-count').val(1));
	}else if(num>max){
		parseInt($('#buy-count').val(max));
	}else{
		parseInt($('#buy-count').val(num));
	}
}

/**点击加入购物车 商品添加入数据库**/
$('#add-cart').click(function(){
	if(isLogin()){   //判断是否有用户登录
		addCart();
	}else{
		location.href = "login.html";
	}
});

/**将目前选购的商品加入购物车**/
function addCart(){
	var data = {
			uname: isLogin(),
			pno: pno,
			count: parseInt($('#buy-count').val())
		}
	$.ajax({
		type: 'POST',
		url: 'data/cartAdd.php',
		data: data,
		success: function(msg){
			if(msg == "succ"){
				$('.add-succ-msg').hide().stop(true).show().fadeOut(1000);
			}else{
			}
		}
	})
}
/**点击立即结算，如果登陆就跳转到购物车界面，没有登陆跳转登陆界面**/
/**将目前的商品加入购物车，并且跳转到购物车界面**/
$('#add-cart-now').click(function(){
	if(isLogin()){
		addCart();
		location.href = 'cart.html';
	}else{
		location.href = 'login.html';
	}
});


/**商品详情与商品评价之间的切换**/
$('a.p-comment').click(function(e){
	e.preventDefault();
	$(e.target).parent().addClass('checked').siblings().removeClass('checked');
	$('.product-container').hide();
	$('.product-comment').show();
})
$('a.p-story').click(function(e){
	e.preventDefault();
	$(e.target).parent().addClass('checked').siblings().removeClass('checked');
	$('.product-container').show();
	$('.product-comment').hide();
})