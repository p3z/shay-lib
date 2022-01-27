<?php

function randomQuery($floor, $ceil, $string = false){
    $num = rand($floor, $ceil);

    if($string){

       //("String mode set to true")
        return strval($num);
    }

    return $num;
    
} // end randomQuery

function coinFlip(){
	return randomQuery(0, 1);
}


function randomAlpha($lower = "false"){
    $alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    // Generate a random letter
    $charIndex = randomQuery(0, 25);
    $character = $alpha[$charIndex];
	
   

    return $character;


}
?>