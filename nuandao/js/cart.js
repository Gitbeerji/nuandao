/**
 * Created by bjwsl-001 on 2016/11/3.
 */
if(!isLogin()){
  location.href = 'index.html';
}
/**DOM树加载完成后 读取并加载购物车数据**/
$(function(){
$.ajax({
  type: 'POST',
  url: 'data/cart.php',
  data: 'uname='+isLogin(),
  success: function(list){
      var html ='';
      if(list.msg == 'nocart' || list.msg == 'noproduct'){
        //不存在购物车，或者购物车中没有商品
		iscartEmpty();
      }else{
        //重新整理的到的json数据，按不同的系列分类
        var arr = [];
        for(var i=0;i<list.length;i++){
          if(arr[list[i].sno]){
            arr[list[i].sno].push(list[i]);
          }else{
            arr[list[i].sno] =[list[i]];
          }
        }
        //遍历重新整理后的数组，将数据加载到页面
        for(var key in arr){
          html += '<div class="order-holder"><div class="designer">设计师: '+arr[key][0].sname+'</div>';
            for(var i=0;i<arr[key].length;i++) {
              var pid = arr[key][i].productId;
              html += '<ul class="order-item group checked" id="p'+pid+'">'+
              '<li>'+
                '<input type="checkbox" class="td-chk" value="xx" checked/>'+
              '</li>'+
              '<li class="td-info group">'+
                '<a href="detail.html?'+pid+'">'+
                  '<img src="images/product/'+pid+'-0-100.jpg" alt=""/>'+
                '</a>'+
                '<dl>'+
                  '<dt>'+
                    '<a href="detail.html?'+pid+'">'+arr[key][i].pname+'</a>'+
                  '</dt>'+
                  '<dd>品牌: '+arr[key][i].sname+'</dd>'+
                  '<dd class="text-error">[销售剩余时间：6天1小时]</dd>'+
                 '</dl>'+
              '</li>'+
              '<li class="td-price">￥'+parseInt(arr[key][i].price)+'</li>'+
              '<li class="td-amount">'+
                '<div class="item-amount group">'+
                '<button class="minus">-</button>'+
                  '<input type="text" name="number" data-pno="'+pid+'" data-pcount="'+arr[key][i].pcount+'"value="'+arr[key][i].count+'">'+
                '<button class="plus">+</button>'+
                '</div>'+
                '<p class="amount-msg">库存：'+arr[key][i].pcount+'</p>'+
              '</li>'+
              '<li class="td-sum">￥<strong>'+parseInt(arr[key][i].price)*arr[key][i].count+'</strong></li>'+
              '<a class="item-delete" data-pno="'+pid+'"></a>'+
              '</ul>';
            }
          html += '</div>';
        }
        $('.order-list').html(html);
        countTotal();
      }
  }
});
});
/**每个商品前的checkbox添加操作**/
$('.order-list').on('click','.td-chk',function(e){
  if($('.td-chk:checked').length == $('.td-chk').length){
    $('#checkall').prop('checked',true);
  }else{
    $('#checkall').prop('checked',false);
  }
  var $chk = $(e.target);
  if($chk.is(':checked')){
    $chk.parents('.order-item').addClass('checked');
  }else{
    $chk.parents('.order-item').removeClass('checked');
  }
  countTotal();
});

/**全选按钮操作**/
$('#checkall').click(function(e){
  if($(e.target).is(':checked')){
    $('.td-chk').prop('checked',true);
    $('.order-item').addClass('checked');
  }else{
    $('.td-chk').prop('checked',false);
    $('.order-item').removeClass('checked');
  }
  countTotal();
});

/**为数量加减键添加操作**/
$('.order-list').on('click','.item-amount>button',function(e){
  var $input = $(e.target).siblings('input');
  var num = $input.val();
  if($(e.target).html()=='+'){
    $input.val(++num);
  }else{
    $input.val(--num);
  }
  countChange($input);
});

/**数量输入框失去焦点后数据处理**/
$('.order-list').on('blur','.item-amount>input',function(e){
  countChange($(e.target));
});

/**购物车中商品数量改变后所执行的操作**/
function countChange($input){
	//1.判断数量数据是否合法
	judgeBuyCount($input);
	//2.商品小计的数据更新
	countSum($input.parents('.td-amount').next()); 
	//3.总商品数量以及价格的数据更新
	countTotal();
	//4.数据库中的数据更新
	upData($input);
}
/**验证数量输入框的数据合法性**/
function judgeBuyCount($input){
  var num = parseInt($input.val());
  var max = parseInt($input.data('pcount'));
  if(isNaN(num) || num<1){
    parseInt($input.val(1));
  }else if(num>max){
    parseInt($input.val(max));
  }else{
    parseInt($input.val(num));
  }
}

/**购买数量更改后商品小计价格更改**/
function countSum($sum){
  var price = parseInt($sum.siblings('.td-price').html().substr(1));
  var count = parseInt($sum.siblings('.td-amount').children().children('input').val());
  $sum.children('strong').html(parseInt(price*count));
}

/**修改购物车中商品的购买数量后数据库中对应数据的更新**/
function upData($input){
	var productId = $input.data('pno');
	var count = $input.val();
	$.ajax({
		type: 'POST',
		url: 'data/cartUpdata.php',
		data: 'uname='+isLogin()+'&productId='+productId+'&count='+count,
		success: function(msg){
			//console.log(msg);
		}
	})
}
/**购买数量更改后商品总计价格以及商品数量的更改**/
function countTotal(){
  //商品总数量的更改
  var counts = Array.prototype.slice.call($('.order-holder>ul.checked .td-amount input'));
  var totalCount = 0;
  $.each(counts,function(i,val){
    totalCount += parseInt($(val).val());
  });
  $('.cart-count').html(totalCount);
  //总价的更改
  var sums = Array.prototype.slice.call($('.order-holder>ul.checked .td-sum>strong'));
  var totalPrice = 0;
  $.each(sums,function(i,val){
    totalPrice += parseInt($(val).html());
  });
  $('.total').html(totalPrice);
}

/**点击删除按钮后的操作**/
$('.order-list').on('click','.item-delete',function(e){
	var pno = $(e.target).data('pno');
	$('.overlay-bg').show().data('pno',pno);
});
/**删除提示遮罩层**/
$('a.cancel').click(function(){
	$('.overlay-bg').fadeOut(100);
})
$('#delprobtn').click(function(){
	var pno = $('.overlay-bg').data('pno')
	var $orderHolder = $('#p'+pno).parent();
	$.ajax({
		type: 'POST',
		url: 'data/cartDelete.php',
		data: 'uname='+isLogin()+'&pid='+pno,
		success: function(msg){
			if(msg == "succ"){
				$('#p'+pno).remove();
				countTotal();
				//查找每个系列标题下面是否有兄弟元素，如果没有，删除这个系列的容器
				if($orderHolder.children('.order-item').length == 0){
					$orderHolder.remove();
				}
				iscartEmpty();
			}
		}
	})
	$('.overlay-bg').fadeOut(100);
})

/**如果购物车中没有商品，显示“您的购物车是空的，请选购商品”**/
function iscartEmpty(){
	if($('.order-list').html().replace(/\s/ig,'') == ''){
		var html = "<div class='cart-msg'>您的购物车是空的，请 <a href='index.html'>选购商品</a></div>"
		$('.order-list').html(html);
	}
}