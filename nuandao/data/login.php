<?php
	header('Content_Type:text/plain;charset:utf-8');
	include('config.php');
	@$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
	mysqli_query($link,'SET NAMES utf8');
	$uname = $_POST['uname'];
	if(empty($_POST['upwd'])){
		$upwd = '';
	}else{
		$upwd = $_POST['upwd'];
	}

	$sql = "SELECT upwd FROM nuandao_user WHERE uname='$uname'";
	$result = @mysqli_query($link,$sql);
	if(mysqli_num_rows($result) ==0 ){
		echo "nodata";
	}else{
		$list = mysqli_fetch_assoc($result);
		if($upwd == $list['upwd']){
			echo "succ";
		}else{
			echo "err";
		}
	}
?>