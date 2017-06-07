/**
 * Created by bjwsl-001 on 2016/10/30.
 */

var state = "login"; //存储当前的状态是登录还是注册
/**功能1：登录及注册切换**/
$('#login').click(function(){
  $('#register').removeClass('active');
  $(this).addClass('active');
  $('#login-btn').html('登录暖岛');
  $('.login-msg>span').html('').attr('class','');
  state = "login";
})

$('#register').click(function(){
  $('#login').removeClass('active');
  $(this).addClass('active');
  $('#login-btn').html('注册暖岛');
  $('.login-msg>span').html('').attr('class','');
  state = "register";
})
/**注册时 用户名输入框获得焦点时 .login-msg>span 给出提示**/
$('#uname').focus(function(){
  //判断当前处于登录状态还是注册状态
  if( state == "register"){
    $('.login-msg>span').html('请输入长度为6-12位的英文或数字').attr('class','primary');
  }else{
    $('.login-msg>span').html("");
  }
})

/**注册时， 密码输入框获得焦点时**/
$('#upwd').focus(function(){
  if( state == "register"){
    $('.login-msg>span').html('请输入长度为8-16位的英文或数字').attr('class','primary');
  }else{
    $('.login-msg>span').html("");
  }
})

/**点击登录按钮或者注册按钮时验证数据的合法性**/
$('#login-btn').click(function(e){
	e.preventDefault();
  if( state == 'login'){
    //如果是登录
    //先验证用户名或者密码是否为空
    var uname = $('#uname').val().replace(/\s/ig,'');
    var upwd = $('#upwd').val().replace(/\s/ig,'');
    if(uname == '' || upwd == ''){
      $('.login-msg>span').html('用户名或密码不能为空').attr('class','err');
    }else{
      $.ajax({
        type: 'POST',
        url: 'data/login.php',
        data: 'uname='+uname+'&upwd='+upwd,
        success: function(txt){
          if(txt == "succ"){
            $('.login-msg>span').html('登录成功').attr('class','succ');
            sessionStorage.setItem('uname',uname);
            setTimeout(function(){
				history.go(-1);
            },500);
          }else if(txt == "nodata"){
            $('.login-msg>span').html('用户名不存在').attr('class','err');
          }else{
            $('.login-msg>span').html('密码错误').attr('class','err');
          }
        }
      })
    }

  }else{
    //如果是注册，先验证输入框中数据的合法性
    if(/^[\w]{6,12}$/.test($('#uname').val().trim())){
      if(/^[\w]{8,16}$/.test($('#upwd').val().trim())){
        //用户名和密码数据合法，异步向数据库中请求数据 判断用户名是否存在
        $.ajax({
          type: 'POST',
          url: 'data/login.php',
          data: 'uname='+$('#uname').val().trim(),
          success: function(txt){
            if(txt == "nodata"){  //用户名不存在，向数据库中写入用户信息
              $.ajax({
                type: 'POST',
                url: 'data/register.php',
                data: 'uname='+$('#uname').val().trim()+'&upwd='+$('#upwd').val().trim(),
                success: function(txt){
                  if(txt == "succ"){
                    $('#login').trigger('click');
                    $('.login-msg>span').html('注册成功 请登录').attr('class','succ');
                  }
                }
              })
            }else{
              $('.login-msg>span').html('用户名已存在').attr('class','err');
            }
          }
        })
      }else{
        $('.login-msg>span').html('密码不符合要求').attr('class','err');
      }
    }else{
      $('.login-msg>span').html('用户名不符合要求').attr('class','err');
    }
  }
})
