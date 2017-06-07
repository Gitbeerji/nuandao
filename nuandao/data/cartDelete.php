<?php
	header('Content-Type:text/plain;charset=utf-8');
	$uname = $_POST['uname'];
	$pid = $_POST['pid'];
	include('config.php');
	$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
	mysqli_query($link,'SET NAMES UTF8');
	$sql = "SELECT cid FROM nuandao_cart WHERE userId=(SELECT uid FROM nuandao_user WHERE uname='$uname')";
	$result = mysqli_query($link,$sql);
	if($result){
		$cartId = mysqli_fetch_assoc($result)['cid'];
		$sql = "DELETE FROM nuandao_cart_detail WHERE cartId='$cartId' AND productId='$pid'";
		$result = mysqli_query($link,$sql);
		if($result){
			echo "succ";
		}else{
			echo "err";
		}
	}
?>