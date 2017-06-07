<?php
	header('Content-Type:application/json;charset=utf-8');
	include('config.php');
	$pno = $_REQUEST['pno'];
	$data = array();
	//$data = ['msg' => 0,'nowproduct' => 0,'seriesproduct' =>0,'series' =>0];
	$link = mysqli_connect($db_host,$db_user,$db_pwd,$db_name);
	mysqli_query($link,'SET NAMES utf8');
	$sql = "SELECT * FROM nuandao_product WHERE pno='$pno'";
	$result = mysqli_query($link,$sql);
	if($result){
		$temp=array();
        while($res=mysqli_fetch_assoc($result)) {
            $temp[]=$res;
        }
		$list = $temp;
		$data['nowproduct'] = $list[0];
		$series = $list[0]["pseries"];
		$sql = "SELECT pno,price FROM nuandao_product WHERE pseries='$series'";
		$result = mysqli_query($link,$sql);
		if($result){
			$temp=array();
			while($res=mysqli_fetch_assoc($result)){
				$temp[]=$res;
			}
			$list = $temp;
			$data['seriesproduct'] = $list;
		}
		$sql = "SELECT * FROM nuandao_series WHERE sno='$series'";
		$result = mysqli_query($link,$sql);
		if($result){
			$temp=array();
			while($res=mysqli_fetch_assoc($result)){
				$temp[]=$res;
			}
			$list = $temp;
			$data['series'] = $list[0];
		}

		$data['msg'] = 'succ';
	}else{
		$data['msg'] = "nodate";
	}
	echo json_encode($data);

?>