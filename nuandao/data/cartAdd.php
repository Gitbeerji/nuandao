<?php
	header('Content-Type:text/plain;charset=utf-8');
	$uname = $_POST['uname'];
	$pno = $_POST['pno'];
	$count = $_POST['count'];
	include('config.php');
	$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
	mysqli_query($link,'SET NAMES UTF8');
	$sql = "SELECT uid FROM nuandao_user WHERE uname='$uname'";
	$result = mysqli_query($link,$sql);
	if($result){
		$row = mysqli_fetch_assoc($result);
		$uid = $row['uid'];
		//通过uid查询该用户是否存在购物车记录，若有取出cid 若没有插入记录并取出cid
		$sql = "SELECT cid FROM nuandao_cart WHERE userId='$uid'";
		$result = mysqli_query($link,$sql);
		if($result){
			if(mysqli_num_rows($result) == 0){ //cart中不存在用户信息
				$sql = "INSERT INTO nuandao_cart VALUES(null,$uid)";
				$result = mysqli_query($link,$sql);
				$cid = mysqli_insert_id($link);
			}else{ //cart中存在用户信息
				$row = mysqli_fetch_assoc($result);
				$cid = $row['cid'];
			}
			//取到cid后 通过 cid以及pno 判断该商品是否已存在cart_detail中
			$sql = "SELECT did,count FROM nuandao_cart_detail WHERE cartId='$cid' AND productId='$pno'";
			$result = mysqli_query($link,$sql);
			if($result){
				if(mysqli_num_rows($result) == 0){ //cart_detail中不存在商品信息 插入数据
					$sql = "INSERT INTO nuandao_cart_detail VALUES(null,'$cid','$pno','$count')";
					$result = mysqli_query($link,$sql);
					if($result){
						echo "succ";
					}else{
						echo "err";
					}
				}else{ //cart_detail中存在商品信息 修改count
					$temp=array();
					while($res=mysqli_fetch_assoc($result)) {
						$temp[]=$res;
					}
					$list = $temp;
					$did = $list[0]['did'];
					$count = $list[0]['count'] + $count;
					$sql = "UPDATE nuandao_cart_detail SET count='$count' WHERE did='$did'";
					$result = mysqli_query($link,$sql);
					if($result){
						echo "succ";
					}else{
						echo "err";
					}
				}
			}
			
		}else{
			echo "nodata";
		}
	}else{
		echo "nodata";
	}
	
?>