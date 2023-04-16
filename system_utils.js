function url_params_to_dict() {

    var query_dict = {};
    // Get the query string, break into an array and loop through each clause
    location.search.substr(1).split("&").forEach(
     // For each clause, assign the key of query_dict to be the key in the url param, and likewise the value
    	function (item) {
    		query_dict[item.split("=")[0]] = item.split("=")[1];
    	}
    );

   // Returns a dictionary of url parameters
    return query_dict;
}

// If we dont want peeps to know what software this is	
 function hide_src(){

   // Prevents right clicks
   document.addEventListener('contextmenu', function(e) {
     e.preventDefault(); 
    });


   // Prevent them seeing source
   document.onkeydown = function(e) {
       if (e.ctrlKey &&         // ctrl key
           (e.keyCode === 67 || // c (ctrl + c = copy)
            e.keyCode === 86 || // v (ctrl + v = paste)
            e.keyCode === 85 || // u (ctrl + u = src code)
            e.keyCode === 117)) { // f6 (ctrl + f6 go to the next document window)
           alert('not allowed');
           return false;
       } else if (e.keyCode === 123){ // F12 = open devtools
           alert('not allowed');
           return false;
           
       }else {
           return true;
       }
   };
}


function data_url_to_file(dataurl, filename) {

   if(dataurl !== undefined){

       var arr = dataurl.split(','),
       mime = arr[0].match(/:(.*?);/)[1],
       bstr = atob(arr[1]), 
       n = bstr.length, 
       u8arr = new Uint8Array(n);
       
   while(n--){
       u8arr[n] = bstr.charCodeAt(n);
   }
   
   return new File([u8arr], filename, {type:mime});

   } else {
       return "No data url specified";
   }


}

//Usage example:
//var file = dataURLtoFile(dataURL,'test.png');
//console.log(file);



function show_flash_message(type, message, alert_box){

    alert_box.classList.add("hide");
    alert_box.classList.remove("alert-success", "alert-danger", "alert-warning");  // Remove any old flash messages
    alert_box.textContent = message;
    alert_box.classList.add(`alert-${type}`);
    alert_box.classList.remove("hide");

} 

function hide_flash_message(remove_classes, alert_box, ms = 1000){
   
   setTimeout(function(){
       alert_box.classList.remove(remove_classes);
       alert_box.classList.add("hide");
       alert_box.textContent = '';
   }, ms)

} // reset_flash_message

function random_color(alpha = false){
   if(alpha){
       return'rgba(' + 
           Math.floor(Math.random() * 256) + ',' + 
           Math.floor(Math.random() * 256) + ',' + 
           Math.floor(Math.random() * 256) + ',' + 
           Math.floor(Math.random() ) + ')'; // Alpha channel
   } else {
       return'rgb(' + 
           Math.floor(Math.random() * 256) + ',' + 
           Math.floor(Math.random() * 256) + ',' + 
           Math.floor(Math.random() * 256) + ')';
   }
}

function random_gradient(){
    
}

function is_canvas_blank(canvas){
   //console.log("inside isCanvasBlank")
   return !canvas.getContext('2d')
     .getImageData(0, 0, canvas.width, canvas.height)
     .data.some(channel => channel !== 0)
}



function get_keycode(key){
     
   let read_key = key.toUpperCase() ?? key;
   
   const key_map = {
       A:65,
       B:66,
       C:67,
       D:68,
       E:69,
       F:70,
       G:71,
       H:72,
       I:73,
       J:74,
       K:75,
       L:76,
       M:77,
       N:78,
       O:79,
       P:80,
       Q:81,
       R:82,
       S:83,
       T:84,
       U:85,
       V:86,
       W:87,
       X:88,
       Y:89,
       Z:90,
       0:48,
       1:49,
       2:50,
       3:51,
       4:52,
       5:53,
       6:54,
       7:55,
       8:56,
       9:57,
       BACKSPACE:8,
       TAB:9,
       ENTER:13,
       SHIFT:16,
       CTRL:17,
       ALT:18,
       LEFT: 37,
       UP: 38,
       RIGHT: 39,
       DOWN: 40         
   }

   return key_map[read_key] ?? "Couldnt find key";
   
}

// Run a function repeatedly 'n' number of times [ Doesn't work if we need to pass arguments to it ]
function repeat_function(func, n, args = {}){
   for(let i = 0; i < n; i++){
       if (args){
           func(args);
       } else{
           func();
       }
   } // end loop
} // end function



// Takes a css class, applies it to all elements and removes it from all exceptions (if direction is false, it works in reverse)
function bulk_class_toggler(css_class = '', elements = [], exceptions = [], direction = true){

   // Add classes before taking anyway (needs to be in this order in case of a duplicated entry in an)
   elements.forEach((el)=>{
       
       switch(direction){
           case true: // Default
               el.classList.add(css_class);
               break;

           case false: // Go in reverse
               el.classList.remove(css_class);
               break;


       }// end switch
       
       //console.log("An element:")
      // console.log(el)
       
   }); // end foreach
   
   // Remove class from exceptions
   exceptions.forEach((x)=>{

       switch(direction){
           case true: // Default
               x.classList.remove(cssClass);
               break;

           case false: // Go in reverse
               x.classList.add(cssClass);
               break;


       }// end switch
       
       
       //console.log("An exception:")
       //console.log(x);
       
   }); // end foreach

} // end bulk_class_toggler

// Creates qty number of html elements
// Appends them to append_target
// If content and css classes specified, these are added to each element
function make_html(append_target, element_name, content, qty = 1, css_classes = []){

   for(var i = 0; i < qty; i++){

       // Loop through and create as many elements with as many classes as specified in the arguments
       var new_element = document.createElement(element_name);

       if(content){
           var contentNode = document.createTextNode(content);
           new_element.appendChild(contentNode);
       }

       // Add classes to element
       new_element.classList.add(css_classes.join(" "));

       // Append new element to target
       append_target.appendChild(new_element);
       

   } // end construction loop

} // end make_html


// let example = {
//    "div":{
//       "qty": 4,
//       "css_classes": ["example-div", "tile"],
//       "content": "I am an example",
//       "append_target": ""
//    },
//    "h1":{
//       "qty": 1,
//       "css_classes": [],
//       "content": "This is a heading",
//       "append_target": ""
//    },
//    "section": {
//       "qty": 1,
//       "css_classes": [],
//       "content": "",
//       "append_target": ""
//    }
// }

// Dependend on make_html()
// Takes an object of objects, each represents a qty of html elements to build and append to the DOM
// Uses make_html() to append them
function make_html_in_bulk( buildThis ){
   // Deconstruct the object and build everything into arrays
   let elements = Object.keys(buildThis);
   let values = Object.values(buildThis);
   
   // Loop through the details and build them accordingly
   for(let i = 0; i < elements.length; i++){
      
       // Grab the attributes
       let name = elements[i];
       let qty = values[i].qty ?? 1;
       let css_classes = values[i].css_classes ?? [];
       let content = values[i].content ?? "";
       let appendTarget = values[i].appendTarget ?? document.querySelector("body");

       // Now build everything
       make_html(appendTarget, name, content, qty, css_classes);
       
   } // end loop

} // end make_html_in_bulk


function save_as_pdf(canvas, height, width){

    // Requires jdPSF in the head, also set window.jsPDF = window.jspdf.jsPDF; outside this fn
    // Working version as of 13/04/23: <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>

    // create a new offscreen canvas with custom dimensions
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;

    // draw the contents of the original canvas onto the offscreen canvas at the desired size
    const offscreenCtx = offscreenCanvas.getContext("2d");
    offscreenCtx.drawImage(canvas, 0, 0, offscreenCanvas.width, offscreenCanvas.height);

    // save the contents of the offscreen canvas as a PNG image
    const imgData = offscreenCanvas.toDataURL("image/png");



    const pdf = new jsPDF('p', 'in', [8.5, 11]);
        setTimeout(function() {
        pdf.addImage(imgData, 'PNG', 0, 0, offscreenCanvas.width, offscreenCanvas.height);
        pdf.save("canvas.pdf");
        }, 500);
} // end of pdf save
		
function save_as_png(canvas, height, width){
	

    // create a new offscreen canvas with custom dimensions
    const offscreenCanvas = document.createElement("canvas");
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;

    // draw the contents of the original canvas onto the offscreen canvas at the desired size
    const offscreenCtx = offscreenCanvas.getContext("2d");
    offscreenCtx.drawImage(canvas, 0, 0, offscreenCanvas.width, offscreenCanvas.height);

    // save the contents of the offscreen canvas as a PNG image
    const imgData = offscreenCanvas.toDataURL("image/png");

    // create a new anchor element to download the image
    const link = document.createElement("a");
    link.download = "canvas.png";
    link.href = imgData;

    // simulate a click on the anchor element to start the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
} // end of png save