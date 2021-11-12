<?php 
	include('../classes/clsForm.php'); 

	$db = new DbClass();

	//$data = json_decode($_POST);
	// $data = 'tester';
	/*$result = [
			"formType" => "ajaxError",
			"data" => "Profile route failed"
	];*/
// echo json_encode($data->f_name);
// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$req = json_decode($json);
//$req = json_decode($data);
//echo $req;
	if($req->formType === 'profile'){
		$id = $req->formData->uid;
		$data = $db->getProfileInfo($id);

		$result = [
			"formType" => $req->formType,
			"data" => $data
		];
	}else if($req->formType === 'profileUpdate'){
		$data = $db->setProfileUpdate($req->formData, $req->formName);
		$result = [
			"formType" => $req->formType,
			"data" => $data
		];
	}
	else{
		$result = [
			"formType" => "ajaxError",
			"data" => "Profile route failed"
	];
}

	echo json_encode($result);

?>