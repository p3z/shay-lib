function is_unique_str(str1, str2){
    
   if (str1 === str2){
       return false;
   }
   
   return true;

}


// Check a single string against an entire array of strings
function is_fresh_input(code, arr){
   
   var code_in_array = arr.includes(code);

   if(code_in_array){
       return false;
   } 
       
   return true;

}

// You should refactor this to be able to take a limited range of characters too
function random_alpha(lower = "false"){
   const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

   // Generate a random letter
   var charIndex = Math.floor(Math.random() * 25);
   if(lower){
       return alpha[charIndex].toLowerCase();
   }
  
   return alpha[charIndex];
}

// Add random numbers to a string n number of time
function make_number_string(str, n = 1){
   let join = '';

   for(let i = 0; i < n; i++){
       let number = random_num(0,9).toString();
       join += number;
   }

   return join; // It's a string at this point
}


// Parse through an array of strings and remove duplicates
// Returns an object containing the number of duplicates removed and the resulting array
function remove_duplicates(catalog){

   var orig_length = catalog.length;

   //(if needed)
   // From here: // https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array
   let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
   
   // An array of duplicated keys 
    var duplicates = [...new Set(findDuplicates(catalog))]


   // Loop over the catalog, and this time remove all duplicates from it
   var unique_vals = [...new Set(catalog)];
   var unique_length = unique_vals.length;  

   return {
       num_keys_removed: `${duplicates.length}`,
       duplicates: duplicates,        
       catalog: unique_vals
   }
   
}



// Contains duplicates
let catalog_one = [ "WT7L-CQW0-KCV4-0REK", "0N2E-Y981-S9B5-5STT", "WT7L-CQW0-KCV4-0REK", "TH80-TQ47-S1GO-UTQ6", "F8EM-LG40-2SK1-7N4P", "04ZI-91J5-69Y5-92N2", "WT7L-CQW0-KCV4-0REK", "0N2E-Y981-S9B5-5STT"];

// No duplicates
let catalog_two = [ "WT7L-CQW0-KCV4-0REK", "0N2E-Y981-S9B5-5STT", "TH80-TQ47-S1GO-UTQ6", "F8EM-LG40-2SK1-7N4P", "04ZI-91J5-69Y5-92N2", "7H3G-78M8-NY7R-8U74", "SPVL-CPXO-0445-869H"];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(remove_duplicates(catalog_one));
// console.log(remove_duplicates(catalog_two));

console.log(is_fresh_input("04ZI-91J5-69Y5-92N2", catalog_two))