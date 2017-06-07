<?php
	header('Content-Type:text/html;charset=utf-8');
	$uname = $_REQUEST['uname'];
	if($uname){
	  $str = '<li class="user">
	          <a href="#" id="to-user">
	            <span>'.$uname.'</span>
	          </a>
	          <div class="user-list">
                <ul>
                   <li><a href="#">我的订单</a></li>
                   <li><a href="#">未付款订单</a></li>
                   <li><a href="#">我的代金券</a></li>
                   <li><a href="#">我的评价</a></li>
                   <li><a href="#">我的最爱</a></li>
                   <li><a href="#">我的作品</a></li>
                   <li><a href="#">修改密码</a></li>
                </ul>
                <a href="#" class="user-out">登出</a>
              </div>
	          </li>';
	}else{
	  $str = ' <li class="bt-login"><a href="login.html" id="index-to-regg">登录丨注册</a> </li>';
	}
?>
	<!--网站头部a部分-->
    <div class="header-a">
      <div class="container">
        <!--logo-->
        <div class="logo">
          <a href="index.html"></a>
          <div class="logo-background"></div>
        </div>
        <!--搜索框-->
        <div class="header-search">
          <input type="text" placeholder="请输入关键字搜索"/>
          <i></i>
        </div>
        <!--头部广告-->
        <span class="header-msg">每日10点上新&nbsp;&nbsp;&nbsp;&nbsp;满249元包邮</span>
        <!--头部右侧 购物车 登录注册 以及微博关注-->
        <div class="header-a-right">
          <ul>
            <li class="mini-cart">
              <a href="cart.html">
                <span>购物车</span>
                <strong id="cart_total_value">0</strong>
              </a>
            </li>
            <li class="split">丨</li>
            <?php echo $str ?>
          </ul>
          <div class="weibo">
            <a href="snake/snake.html" title="暖岛网">
              <em class="weibo-icon"></em>
              <span>加关注</span>
            </a>
            <span class="wb-fb-plus">
              <a href="">
                <span id="fNum">28.2万</span>
                <em></em>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!--网站头部b部分-->
    <div class="header-b">
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <a href="#" class="color-e396ff active">大家喜欢</a>
            </li>
            <li>
              <a href="#">女装服饰</a>
              <div class="nav-hidden group">
                <div class="container">
                  <div class="nav-hidden-l">
                    <h5>逛分类</h5>
                    <ul>
                      <li><a href="#">新品</a></li>
                      <li><a href="#">T恤背心</a></li>
                      <li><a href="#">卫衣</a></li>
                      <li><a href="#">衬衫罩衫</a></li>
                      <li><a href="#">毛衣针织</a></li>
                      <li><a href="#">连衣裙</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">半身裙</a></li>
                      <li><a href="#">外套</a></li>
                      <li><a href="#">牛仔裤</a></li>
                      <li><a href="#">裤装</a></li>
                      <li><a href="#">泳衣</a></li>
                      <li><a href="#">内衣</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">袜子</a></li>
                      <li><a href="#">鞋靴</a></li>
                      <li><a href="#">箱包</a></li>
                      <li><a href="#">饰品</a></li>
                      <li><a href="#">配件</a></li>
                      <li><a href="#">限时暖价</a></li>
                    </ul>
                  </div>
                  <div class="nav-hidden-r">
                    <h5>特别推荐</h5>
                    <ul>
                      <li><a href="#">暖岛独家</a></li>
                      <li><a href="#">买手精选</a></li>
                      <li><a href="#">编辑土建</a></li>
                      <li><a href="#">岛民最爱</a></li>
                      <li><a href="#">本月星座</a></li>
                      <li><a href="#">LookBook</a></li>
                    </ul>
                    <div class="show-img">
                      <a href="#"><img src="images/head/show-1-1.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-1-2.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-1-3.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-1-4.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-1-5.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-1-6.jpg" title=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">男装服饰</a>
              <div class="nav-hidden group">
                <div class="container">
                  <div class="nav-hidden-l">
                    <h5>逛分类</h5>
                    <ul>
                      <li><a href="#">新品</a></li>
                      <li><a href="#">T恤背心</a></li>
                      <li><a href="#">卫衣</a></li>
                      <li><a href="#">衬衫</a></li>
                      <li><a href="#">毛衣针织</a></li>
                      <li><a href="#">外套</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">牛仔裤</a></li>
                      <li><a href="#">裤装</a></li>
                      <li><a href="#">内衣</a></li>
                      <li><a href="#">袜子</a></li>
                      <li><a href="#">鞋子</a></li>
                      <li><a href="#">箱包</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">饰品</a></li>
                      <li><a href="#">配件</a></li>
                      <li><a href="#">限时暖价</a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                    </ul>
                  </div>
                  <div class="nav-hidden-r">
                    <h5>特别推荐</h5>
                    <ul>
                      <li><a href="#">暖岛独家</a></li>
                      <li><a href="#">买手精选</a></li>
                      <li><a href="#">编辑土建</a></li>
                      <li><a href="#">岛民最爱</a></li>
                      <li><a href="#">本月星座</a></li>
                      <li><a href="#">LookBook</a></li>
                    </ul>
                    <div class="show-img">
                      <a href="#"><img src="images/head/show-2-1.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-2-2.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-2-3.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-2-4.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-2-5.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-2-6.jpg" title=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">美容健康</a>
              <div class="nav-hidden group">
                <div class="container">
                  <div class="nav-hidden-l">
                    <h5>逛分类</h5>
                    <ul>
                      <li><a href="#">新品</a></li>
                      <li><a href="#">彩妆</a></li>
                      <li><a href="#">指彩</a></li>
                      <li><a href="#">面部护肤</a></li>
                      <li><a href="#">香氛</a></li>
                      <li><a href="#">身体护理</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">礼品组合</a></li>
                      <li><a href="#">男士护肤</a></li>
                      <li><a href="#">女士护肤</a></li>
                      <li><a href="#">美发护发</a></li>
                      <li><a href="#">美妆大促</a></li>
                      <li><a href="#">显示暖价</a></li>
                    </ul>
                    <ul>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                    </ul>
                  </div>
                  <div class="nav-hidden-r">
                    <h5>特别推荐</h5>
                    <ul>
                      <li><a href="#">暖岛独家</a></li>
                      <li><a href="#">买手精选</a></li>
                      <li><a href="#">编辑土建</a></li>
                      <li><a href="#">岛民最爱</a></li>
                      <li><a href="#">本月星座</a></li>
                      <li><a href="#">LookBook</a></li>
                    </ul>
                    <div class="show-img">
                      <a href="#"><img src="images/head/show-5-1.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-5-2.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-5-3.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-5-4.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-5-5.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-5-6.jpg" title=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">家居创意</a>
              <div class="nav-hidden group">
                <div class="container">
                  <div class="nav-hidden-l">
                    <h5>逛分类</h5>
                    <ul>
                      <li><a href="#">新品</a></li>
                      <li><a href="#">家纺</a></li>
                      <li><a href="#">香氛</a></li>
                      <li><a href="#">厨具</a></li>
                      <li><a href="#">灯具</a></li>
                      <li><a href="#">杯具</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">家具</a></li>
                      <li><a href="#">书籍音乐</a></li>
                      <li><a href="#">文具</a></li>
                      <li><a href="#">宠物用品</a></li>
                      <li><a href="#">美食</a></li>
                      <li><a href="#">钟表</a></li>
                    </ul>
                    <ul>
                      <li><a href="">卫浴</a></li>
                      <li><a href="">雨具</a></li>
                      <li><a href="">玩具娱乐</a></li>
                      <li><a href="">家装软饰</a></li>
                      <li><a href="">限时暖价</a></li>
                      <li><a href=""></a></li>
                    </ul>
                  </div>
                  <div class="nav-hidden-r">
                    <h5>特别推荐</h5>
                    <ul>
                      <li><a href="#">暖岛独家</a></li>
                      <li><a href="#">买手精选</a></li>
                      <li><a href="#">编辑土建</a></li>
                      <li><a href="#">岛民最爱</a></li>
                      <li><a href="#">本月星座</a></li>
                      <li><a href="#">LookBook</a></li>
                    </ul>
                    <div class="show-img">
                      <a href="#"><img src="images/head/show-3-1.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-3-2.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-3-3.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-3-4.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-3-5.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-3-6.jpg" title=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">数码户外</a>
              <div class="nav-hidden group">
                <div class="container">
                  <div class="nav-hidden-l">
                    <h5>逛分类</h5>
                    <ul>
                      <li><a href="#">新品</a></li>
                      <li><a href="#">手机及配件</a></li>
                      <li><a href="#">平板及配件</a></li>
                      <li><a href="#">摄影摄像</a></li>
                      <li><a href="#">音乐设备</a></li>
                      <li><a href="#">电脑周边</a></li>
                    </ul>
                    <ul>
                      <li><a href="#">户外</a></li>
                      <li><a href="#">限时暖价</a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                      <li><a href="#"></a></li>
                    </ul>
                    <ul>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                      <li><a href=""></a></li>
                    </ul>
                  </div>
                  <div class="nav-hidden-r">
                    <h5>特别推荐</h5>
                    <ul>
                      <li><a href="#">暖岛独家</a></li>
                      <li><a href="#">买手精选</a></li>
                      <li><a href="#">编辑土建</a></li>
                      <li><a href="#">岛民最爱</a></li>
                      <li><a href="#">本月星座</a></li>
                      <li><a href="#">LookBook</a></li>
                    </ul>
                    <div class="show-img">
                      <a href="#"><img src="images/head/show-4-1.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-4-2.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-4-3.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-4-4.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-4-5.jpg" title=""/></a>
                      <a href="#"><img src="images/head/show-4-6.jpg" title=""/></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#" class="color-e396ff">限时暖价</a>
              <div class="nav-hidden groupp">
                <div class="container">
                  <div class="nav-hidden-l">
                    <h5>逛分类</h5>
                    <ul>
                      <li><a href="#">女装服饰</a></li>
                      <li><a href="#">男装服饰</a></li>
                      <li><a href="#">美容健康</a></li>
                      <li><a href="#">家居创意</a></li>
                      <li><a href="#">数码户外</a></li>
                    </ul>
                  </div>
                  <div class="nav-hidden-r">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="#">精选品牌</a>
            </li>
            <li>
              <a href="#" class="color-e396ff">定制商品</a>
            </li>
          </ul>
        </div>
        <div class="header-side"></div>
      </div>
    </div>