/**读取sessionstorage中是否有数据**/
function isLogin(){
	var uname = sessionStorage.getItem('uname');
	if(!uname){
		uname = '';
	}
	return uname
}
/**页面加载完成后，异步请求公共的页头和页尾**/
//**
$(function(){
	$('#header').load('data/header.php',{'uname':isLogin()});
	$('#footer').load('data/footer.php');
})
//**/
/**为导航栏绑定鼠标移入移出的事件**/
$('#header').on('mouseenter','.nav>ul>li',function(){             //导航栏鼠标移入事件
				$('.nav>ul>li>a').removeClass("active");
				$(this).children('a').addClass("active").next().css('display','block');})
			.on('mouseleave','.nav>ul>li',function(){               //导航栏鼠标移出事件
				$('.nav>ul>li>a').removeClass("active");
				$(this).children('a').next().css('display','none');})
			.on('mouseenter','.nav>ul>li>div',function(){           //下拉菜单鼠标移入事件
				$(this).css('display','block').prev().addClass('active');})
			.on('mouseleave','.nav>ul>li>div',function(){            //下拉菜单鼠标移出事件
				$(this).css('display','none').prev().removeClass('active');
})

/**header绑定事件，当页面滚动时header-a部分隐藏**/
var header_state = 1;
$(window).scroll(function(){
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	if(header_state === 1 ){
		$('#header').stop(true);
		$('#header').animate({top:'-46px'},500)
		header_state = 0;
    }
   if( scrollTop ==0 ){
		$('#header').stop(true);
		$('#header').animate({top: '0px'},500)
		header_state = 1;
	}
  //**/
});

/**头部用户名称绑定移入移出事件**/
$('#header').on('mouseenter','#to-user',function(){
  $('.user-list').css('display','block');
}).on('mouseleave','#to-user',function(){
  $('.user-list').css('display','none');
}).on('mouseenter','.user-list',function(){
  $(this).css('display','block');
}).on('mouseleave','.user-list',function(){
  $(this).css('display','none');
})

/**点击登出删除sessionstorage 刷新页面**/

$('#header').on('click','.user-out',function(){
  sessionStorage.removeItem('uname');
  location.reload();
})