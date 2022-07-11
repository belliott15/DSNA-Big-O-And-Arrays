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



module.exports = { push, pop };
