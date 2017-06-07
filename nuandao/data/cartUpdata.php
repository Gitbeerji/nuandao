<?php
	header('Content-Type:text/plain;charset=utf-8');
	$uname = $_POST['uname'];
	$productId = $_POST['productId'];
	$count = $_POST['count'];

	include('config.php');
	$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);

	mysqli_query($link,'SET NAMES UTF8');
	$sql = "SELECT cid FROM nuandao_cart WHERE userId=(SELECT uid FROM nuandao_user WHERE uname='$uname')";
	$result = mysqli_query($link,$sql);
	if($result){
		$cartId = mysqli_fetch_assoc($result)['cid'];
		$sql = "UPDATE nuandao_cart_detail SET count='$count' WHERE cartId='$cartId' AND productId='$productId'";
		$result = mysqli_query($link,$sql);
		if($result){
			echo "succ";
		}else{
			echo "err";
		}
	}
?>