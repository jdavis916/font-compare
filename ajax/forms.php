<?php 
	include('../classes/clsForm.php'); 
  //echo $dbhost;
	$db = new DbClass();
	// $req = gettype($_POST);
	$req = $_POST;
	// $req = $_POST['formType'];
	
	//$result = $req['formType'];
//$result = count($req);

// Takes raw data from the request
// $json = file_get_contents('php://input');

// Converts it into a PHP object
// $req = json_decode($json);

// $result = $req['formType'];
	/*

	if(isset($_POST['data'])){
		$req = json_decode($_POST['data']);
	}*/

	if($req['formType'] === 'getAddUser'){
		$data = $db->getAddUser();
		//return data
		$result = [
			"formType" => $req['formType'],
			"data" => $data
		];
		// $result = 'Contact route successful';
		//$result = $req['formType'];
	} else if($req['formType'] === 'contact'){
		$formData = [
			'fName' => $req['fName'],
			'lName' => $req['lName'],
			'email' => $req['email'],
			'gameGenre' => $req['gameGenre'],
		];

		$data = $db->insertContactForm($formData);
		//return data
		$result = [
			"formType" => $req['formType'],
			"data" => $data
		];
		// $result = 'Contact route successful';
		//$result = $req['formType'];
	} else if($req['formType'] === 'contactList'){

		$data = $db->getContactList();

		$result = [
			"formType" => $req['formType'],
			"data" => $data
		];
	}
	else{
		$result = [
			"formType" => "ajaxError",
			"data" => "Form route failed"
	];
}

	echo json_encode($result);

?>