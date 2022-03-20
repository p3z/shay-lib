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

// Takes a string of arbitrary numbers and letters (as salts), and letters to be translated to numbers according to a key
// The characters of the key each refer to a numeric digit, so it's important the chosen key have 10 unique characters
// The function will removes all numbers and letters not in the key, translate all remaining letters to numbers
function simple_cypher_alpha_only($code, $key = "blacksmith"){
		
	// Remove all number salts
	$code = preg_replace('/[0-9]+/', '', $code);
	
	// Normalize to lower case
	$code = strtolower($code);
		
	// Break into array to loop over
	$code_arr = str_split($code);
	
	switch ($key){
			
		case "blacksmith":
			$key_arr = str_split("blacksmith");
			$translation = "";
			
			// Loop through the input
			foreach($code_arr as $character){
				
				// Loop through the key
				foreach($key_arr as $i => $key_char){
					if($character == $key_char){
						$translation .= $i;
					}
				}
			}
			
			break;
			
		case "flashpoint":
			$key_arr = str_split("flashpoint");
			$translation = "";
			
			// Loop through the input
			foreach($code_arr as $character){
				
				// Loop through the key
				foreach($key_arr as $i => $key_char){
					if($character == $key_char){
						$translation .= $i;
					}
				}
			}
			
			break;
			
			
		
	}
			
	return $translation;
}
?>