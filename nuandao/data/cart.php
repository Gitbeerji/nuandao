<?php
	header('Content-Type:application/json;charset=utf-8');
	$uname = $_POST['uname'];
	include('config.php');
	$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
	mysqli_query($link,'SET NAMES UTF8');

	/**
	$sql = "SELECT uid FROM nuandao_user WHERE uname='$uname'";
	$result = mysqli_query($link,$sql);
	$uid = mysqli_fetch_assoc($result)['uid'];
	**/
	
	$sql = "SELECT cid FROM nuandao_cart WHERE userId=(SELECT uid FROM nuandao_user WHERE uname='$uname')";
	$result = mysqli_query($link,$sql);
	if(mysqli_num_rows($result) != 0){
		$cid = mysqli_fetch_assoc($result)['cid'];
		$sql = "SELECT sno,sname,productId,pname,price,pcount,count FROM nuandao_cart_detail,nuandao_product,nuandao_series WHERE cartId='$cid' AND productId=pno AND pseries=sno;";
		$result = mysqli_query($link,$sql);
		if(mysqli_num_rows($result) != 0){
			$temp=array();
			while($res=mysqli_fetch_assoc($result)){
				$temp[]=$res;
			}
			echo json_encode($temp);
		}else{
			$temp = ['msg'=>'noproduct'];
			echo json_encode($temp);
		}
	}else{
		$temp = ['msg'=>'nocart'];
		echo json_encode($temp);
	}
?>