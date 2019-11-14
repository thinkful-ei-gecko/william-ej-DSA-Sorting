//1. Understanding merge sort

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