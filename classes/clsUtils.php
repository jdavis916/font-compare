<?php 

class UtilsClass{
	
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


	public function updateGameList(){

		$truncatetable = $this->conn->query("TRUNCATE TABLE game_genres");

			if($truncatetable !== FALSE)
			{
			   $list = fopen('../data/genres.txt', 'r');

			   //loops,line by line, until reaching end of file
				while(!feof($list)){
					//gets current line
					$getLine = fgets($list);

					$sql = "INSERT INTO game_genres (type)
								  VALUES ('$getLine')";

					$this->conn->query($sql);
				}
				fclose($list);

				$msg = "Game List Updated";
			}
			else
			{
			   $msg = "No rows have been deleted.";
			}

		//return a success or error message
		return $msg;
	}
}

?>