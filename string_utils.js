class Shay_string_utils{

    constructor() {
		this.alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	}

    is_unique_str(str1, str2){
        return (!str1 === str2);     
    }

    val_in_array(val, arr){
        return arr.includes(val);
    }

    rand_alpha(lower = "false"){
    
        // Generate a random letter
        let char_index = Math.floor(Math.random() * 25);

        if(lower){
            return this.alpha[char_index].toLowerCase();
        }
    
        return this.alpha[char_index];
    }

    get_rand_int(n = 1, is_int = true){
        let num = '';
    
        // Concat as str, otherwise does accidental math
        for(let i = 0; i < n; i++){ num += Math.floor(Math.random() * 10).toString(); }

        if(is_int){
            num = Number(num);
        }
    
        return num;
    }

    // Parse through an array of strings and remove duplicates
    // Returns an object containing the number of duplicates removed and the resulting array
    remove_duplicates(input_arr){
        
            // From here: // https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array
            let find_dupes = arr => arr.filter((item, index) => arr.indexOf(item) != index);
            
            // An array of duplicated keys 
            let duplicates = [...new Set(find_dupes(input_arr))];    
        
            // Loop over the input_arr, and this time remove all duplicates from it
            let unique_vals = [...new Set(input_arr)];
        
            return {
                orig_input: input_arr,
                orig_count: input_arr.length,
                duplicates_count: `${duplicates.length}`,
                duplicates_found: duplicates,    
                unique_count: `${unique_vals.length}`,    
                unique_vals: unique_vals
            }
        
    }
    
} // end class