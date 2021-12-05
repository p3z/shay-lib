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