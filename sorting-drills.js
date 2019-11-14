const {LinkedList, _Node} = require('./linkedList')

//1.Understanding merge sort

//1a. 
/* 
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
Data set has length of 16
 
First sort: [21,1,26,45,29,28,2,9] [16,49,39,27,43,34,46,40]
Second sort: [21,1,16,45], [29,28,2,9], [16,49,39,27,43,34,46,40]
Third sort: [21,1], [16,45], [29,28,2,9], [16,49,39,27,43,34,46,40]

Fourth sort: [21] [1] [16,45] [29,28,2,9] [16,49,39,27,43,34,46,40]
Fifth sort: [1,21] [16,45] [29,28,2,9] [16,49,39,27,43,34,46,40]
Sixth sort: [1,21] [16] [45] [29,28,2,9] [16,49,39,27,43,34,46,40]
Seventh sort: [1,21] [16,45] [29,28,2,9] [16,49,39,27,43,34,46,40]
Eigth sort: [1,21] [16,45] [29] [28] [2,9] [16,49,39,27,43,34,46,40]
Ninth sort: [1,21] [16,45] [28,29] [2,9] [16,49,39,27,43,34,46,40]
Tenth sort: [1,21] [16,45] [28,29] [2][9] [16,49,39,27,43,34,46,40]
Eleventh sort: [1,21] [16,45] [28,29] [2,9] [16,49,39,27,43,34,46,40]
Twelfth sort: [1,16,21,45] [28,29] [2,9] [16,49,39,27,43,34,46,40]
Thirteenth sort: [1,16,21,45] [2,9,28,29] [16,49,39,27,43,34,46,40]
Fourteenth sort: [1,2,9,16,21,28,29,45] [16,49,39,27,43,34,46,40]
Fifteenth sort: [1,2,9,16,21,28,29,45] [16,49,39,27] [43,34,46,40]
Sixteenth sort: [1,2,9,16,21,28,29,45] [16,49] [39,27] [43,34] [46,40]

The first 2 lists to be merged is the very first and second elements in our original dataset AKA the two leftmost arrays.

[1,16,21,45] [2,9,28,29] These two lists would be merged on the 7th merge...
*/


//2. Understanding quicksort
/*2a. Either 14 or 17 could have been the pivot. This is because after the quick sort has ran, values to the left of both 17 and 14 are less than the number itself.
Similarly, the numbers to the right of 14 and 17 are larger than the number itself, which means we have successfully sorted the left and right partitions around the pivot.

2b. 
[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
Length of 10

NOTE: The array is not actually split up, but easier for visualization. We split the arrays where the partition occurred AKA where the pivot moved after the first partition

Last item is pivot:
(First partition):
[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
[10, 3, 13, 15, 19, 14, 17, 16, 9, 12]
[10, 3, 9, 15, 19, 14, 17, 16, 13, 12]
[10, 3, 9, 12] [15, 19, 14, 17, 16, 13]

(Second partition):
[10,3,9,12] [15, 19, 14, 17, 16, 13]
[3,10,9,12] [15, 19, 14, 17, 16, 13]
[3,9,10,12] [15, 19, 14, 17, 16, 13]


First item is pivot:
(First partition):
[14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
[14, 13, 17, 15, 19, 10, 3, 16, 9, 12]
[14, 13, 10, 15, 19, 17, 3, 16, 9, 12]
[14, 13, 10, 3, 19, 17, 15, 16, 9, 12]
[14, 13, 10, 3, 9, 17, 15, 16, 19, 12]
[14, 13, 10, 3, 9, 12, 15, 16, 19, 17]
[13, 10, 3, 9, 12, 14] [15, 16, 19, 17]

(Second partition):
[13, 10, 3, 9, 12, 14] [15, 16, 19, 17]
[13, 3, 10, 9, 12, 14] [15, 16, 19, 17]
[13, 3, 9, 10, 12, 14] [15, 16, 19, 17]
[13, 3, 9, 12, 10, 14] [15, 16, 19, 17]
[3, 9, 12, 10] [13, 14] [15, 16, 19, 17]
*/

let numbers = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,
    13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,
    93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,
    9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,
    13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,
    39,42,51,54,84,34,53,78,40,14,5]

function swap(array, i, j){
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function partition(array, start, end){
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++){
        if (array[i] <= pivot){
            swap(array, i, j);
            j++
        }
    }
    swap(array, end - 1, j);
    return j;
}

function qSort(array, start = 0, end = array.length - 1){
    if (start >= end){
        return array
    }

    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return array;
}
// console.log(qSort(numbers))

// Q4. Merge Sorting

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left, right, array)
}

function merge(left, right, array){
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            array[outputIndex++] = left[leftIndex++]
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++){
        array[outputIndex++] = left[i];
    }

    for(let i = rightIndex; i < right.length; i++){
        array[outputIndex++] = right[i]
    }

    return array;
}

// console.log(mergeSort(numbers))

let list = new LinkedList();
list.insertFirst(2)
list.insertLast(21)
list.insertLast(34)
list.insertLast(42)
list.insertLast(12)
list.insertLast(27)
list.insertLast(19)
list.insertLast(33)
list.insertLast(49)
list.insertLast(50)
list.insertLast(9)

function mergeLink(linkedList){
    let result = linkedList
    let node = linkedList.head
    let nextNode = node.next
    let array = [];

    while(nextNode || node){
        array.push(node.value)
        result.remove(node.value)

        if (nextNode === null){
            break;
        }

        node = nextNode;
        nextNode = nextNode.next
    }

    mergeSort(array)

    for(let i = 0; i < array.length; i++){
        if(result.head === null){
            result.insertFirst(array[i])
        } else {
            result.insertLast(array[i])
        }
    }

    result = JSON.stringify(result)

    return result;
}

// console.log(mergeLink(list));

let buckets = [87, 42, 15, 2, 79, 50]

function bucketSort(array, max, min){

    let result = [];
    
    for(let i = 0; i < max; i++){
        result[i] = 'EMPTY BUCKET'
    }

    for(let i = 0; i < array.length; i++){
        result[array[i] - min] = array[i]
    }

    return result
}

// console.log(bucketSort(buckets, 87, 2))