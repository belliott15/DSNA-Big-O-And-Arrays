function push(arr, item) {
    //loop through array to reach end item
    const end = arr.length - 1;
    for (let i = 0; i < arr.length; i++ ) {
        //if there is no next item add item to end of array
        if(arr.length === 0) return null 
        arr[end + 1] = item;
        return arr.length
    }
    
}

function pop(arr) {
    //loop through an array to reach end item
    // const end = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        //remove the last item of the array
        if(arr.length === 0) return null
        // arr[end] = null;
        arr.length = arr.length -1;
        return arr.length;
    }

}

function shift(arr) {
    //remove first item from array;
    const first = arr[0]
    arr[0] = null
    //loop through items and move them backward in the array
    for (let i = 0; i < arr.length; i++){
             arr[i-1] = arr[i]
        }
     //return removed element
     arr.length = arr.length -1
    return first;
    }
   

function unshift(arr, item) {
    //loop through items and move them backward in the array
    // arr.length = arr.length + 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    //add a new item to the beginning of array
    arr[0] = item;
    return arr[0];
}

//small change

function hasDuplicates(array) {
    //loop through array to see if there is a duplicate
    for (let i = 0; i < array.length; i++) {  
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                return true
            } 
        }
    }
    return false
}



module.exports = { push, pop, shift, unshift, hasDuplicates };
