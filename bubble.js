function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let j = 0; j < arr.length-i; j++){
            console.log(arr);
            if (arr[j] > arr[j+1]){
                let temporary = arr[j];
                arr[j] = arr[ j + 1];
                arr[j + 1] = temporaryl
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

bubbleSort([4, 20, 12, 10, 7, 9]);

module.exports = bubbleSort;