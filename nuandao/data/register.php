<?php
	header('Content_Type:text/plain;charset:utf-8');
	include('config.php');
	@$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);

	$uname = $_POST['uname'];
	$upwd = $_POST['upwd'];

	$sql = "INSERT INTO nuandao_user VALUES(NULL,'$uname','$upwd')";
	$result = @mysqli_query($link,$sql);
	if($result){
		echo "succ";
	}else{
		echo "err";
	}
?>