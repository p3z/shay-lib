//////////////////////////////////////////////////
//
// Shay Lib v1
//
// I find myself repeatedly creating the same or similar functions in personal projects. Going forwads I'm going to collate such potentially universal functions into this one file.
//

//////////////////////////////////////////////////



function dataURLtoFile(dataurl, filename) {
 
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
}

//Usage example:
var file = dataURLtoFile(dataURL,'test.png');
console.log(file);

 // If we dont want peeps to know what software this is	
function hideSrc(){

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