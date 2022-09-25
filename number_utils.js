function random_num(floor, ceil, string = "false"){
   let num = Math.floor(Math.random() * (ceil - floor + 1) + floor);

   if(string){

       //console.log("String mode set to true")
       return num.toString();
   }

   return num;
   
} // end random_num

// Depends on random_num()
function coin_flip(){
   return random_num(0, 1);
} // end coinFlip