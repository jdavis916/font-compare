<?php 

class DbClass{
	
	private $conn = null;

	public function __construct(){
		//config file for database
		include('../configs/db.php'); 

		//MySQLi connection
	
			$this->conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
			if(!$this->conn){
				die(": " . mysqli_error($this->conn));
			}			
		}

		
		// PDO connection
		/*try{
			$this->conn = new PDO(
				"mysql:dbhost=$dbhost;dbname=$dbname", "$dbuser", "$dbpass"
			);
		}catch(PDOException $e){
			echo $e->getMessage();
		}*/


	public function showMe(){
		//echo "Database class function is working";
	}
	public function getAddUser(){
		$msg = 'Select Game Genres';

		$sql = "SELECT * FROM game_genres";
		$result = $this->conn->query($sql);

		if($result){
			if ($result->num_rows > 0) {
			  // output data of each row
			  $msg = $result->fetch_all(MYSQLI_ASSOC);
			} else {
			  $msg = "0 results";
			}
		}else{
			$msg = "Add User Info Failed: ". $this->conn->error;
		}

		//return a success or error message
		return $msg;
	}
	public function insertContactForm($formData){
		$msg = 'Insert Contact Method';

		$is_empty = false; //flag

		foreach ($formData as $key => $value) {
		    if ($value == '')
		        $is_empty = true;
		}

		if(!$is_empty){

			$fName = $formData['fName'];
			$lName = $formData['lName'];
			$email = $formData['email'];

			$sql = "INSERT INTO users (f_name, l_name, email)
						  VALUES ('$fName', '$lName', '$email')";

			if($this->conn->query($sql)){
				$msg = "Contact Info Saved";
			}else{
				//echo "Error: " . $sql . "<br/>" . $this->conn->error;
				$msg = "Contact Save Failed";
			}
		}else{
			$msg = 'Info Incomplete';
		}
		//return a success or error message

		return $msg;
	}
	public function getContactList(){
		$msg = 'Select Contact Method';

		$sql = "SELECT * FROM users";
		$result = $this->conn->query($sql);

		if($result){
			if ($result->num_rows > 0) {
			  // output data of each row
			  $msg = $result->fetch_all(MYSQLI_ASSOC);
			} else {
			  $msg = "0 results";
			}
		}else{
			$msg = "Contact List Read Failed: ". $this->conn->error;
		}

		//return a success or error message
		return $msg;
	}
	public function getProfileInfo($id){
		$msg = 'Select Contact Method';
		//return $id;
		$sql = "SELECT users.*, game_genres.type
						FROM users 
						INNER JOIN game_genres 
						ON users.fav_game_cat = game_genres.id
						WHERE users.uid = '$id'";

		$result = $this->conn->query($sql);

		if($result){
			if ($result->num_rows > 0) {
			  // output data of each row
			  $msg = $result->fetch_all(MYSQLI_ASSOC);
			} else {
			  $msg = "0 results";
			}
		}else{
			$msg = "Contact List Read Failed: ". $this->conn->error;
		}

		//return a success or error message
		return $msg;
	}
	public function setProfileUpdate($data, $formName){
		$set = '';

		foreach ($data as $key => $value) {
			if($key != 'uid'){
				$set .= ' '.$key.' = "'.$value.'",';
			}
		}

		$set = rtrim($set, ",");

		$sql = "UPDATE users ". 
						"SET ". $set .
						" WHERE users.uid = '$data->uid'";
		// return $sql;
		$result = $this->conn->query($sql);

		if($result){
			$msg = 'Profile Updated';
		}else{
			$msg = $formName. " Action Failed: ". $this->conn->error;
		}

		//return a success or error message
		return $msg;
	}
}

?>