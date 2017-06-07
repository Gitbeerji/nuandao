<?php
	header('Content-Type:application/json;charset=utf-8');
	include('config.php');
	@$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
	mysqli_query($link,'SET NAMES utf8');
	$sql = "SELECT sno,stitle,sinfo FROM nuandao_series LIMIT 0,8";
	$result = mysqli_query($link,$sql);
	if($result){
		$temp=array();
        while($res=mysqli_fetch_assoc($result)){
            $temp[]=$res;
        }
		echo json_encode($temp);
	}else{
		echo "err";
	}
?>