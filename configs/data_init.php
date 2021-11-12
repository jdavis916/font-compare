<?php

//config file for database
	include('db.php'); 

	//MySQLi connection

	$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
	if(!$conn){
		die(": " . mysqli_error($conn));
	}	

	//Game genres
	$file = fopen('../data/genres.txt', 'r');

	//loops,line by line, until reaching end of file
	while(!feof($file)){
		//gets current line
		$getLine = fgets($file);

		$sql = "INSERT INTO game_genres (type)
					  VALUES ('$getLine')";

		$conn->query($sql);
	}
	fclose($file);



?>