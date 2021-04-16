function pivot(arr, start = 0, end = arr.length + 1) {
    var pivot = arr[start]
    var swapIdx = start

    for (i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
        }
    }
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]]
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}

quickSort([4,6,9,1,2,5,3])