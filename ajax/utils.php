<?php 
	include('../classes/clsForm.php'); 
	include('../classes/clsUtils.php'); 
  //echo $dbhost;
	$db = new DbClass();
	$util = new UtilsClass();
	// $req = gettype($_POST);
	$req = $_POST;

	if($req['action'] === 'updateGameList'){
		//$file = fopen('../data/genres.txt', 'r');
		$msg = $util->updateGameList();
		
		$result = [
			"msg" => $msg
		];
	}

	echo json_encode($result);
	exit;
?>