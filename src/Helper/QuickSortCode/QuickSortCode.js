const quickSortCCode =`
#include <stdio.h>

void swap(int *a, int *b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int partition(int array[], int low, int high) {
  int pivot = array[high];
  int i = (low - 1);

  for (int j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(&array[i], &array[j]);
    }
  }

  swap(&array[i + 1], &array[high]);
  return (i + 1);
}

void quickSort(int array[], int low, int high) {
  if (low < high) {
    int pi = partition(array, low, high);
    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
}
  `

  const quickSortCPPCode=`
#include <bits/stdc++.h>
using namespace std;

int partition(vector<int> &vec, int low, int high) {

  int pivot = vec[high];
  int i = (low - 1);

  for (int j = low; j <= high - 1; j++) {
    if (vec[j] <= pivot) {
      i++;
      swap(vec[i], vec[j]);
    }
  }

  swap(vec[i + 1], vec[high]);
  return (i + 1);
}

void quickSort(vector<int> &vec, int low, int high) {

  if (low < high) {
    int pi = partition(vec, low, high);

    quickSort(vec, low, pi - 1);
    quickSort(vec, pi + 1, high);
  }
}
  `

  const quickSortJavaCode =`
static int partition(int[] arr, int low, int high) {

  int pivot = arr[high];
  int i = low - 1;

  for (int j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);  
  return i + 1;
}

static void swap(int[] arr, int i, int j) {
  int temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

static void quickSort(int[] arr, int low, int high) {
  if (low < high) {
      
    // pi is the partition return index of pivot
    int pi = partition(arr, low, high);

    // Recursion calls for smaller elements
    // and greater or equals elements
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
  `
  const quickSortJSCode =`
function partition(arr, low, high){

  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, low, high){
  if (low < high) {

    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
  `
  const quickSortPCode=`

def partition(arr, low, high):

  pivot = arr[high]
  i = low - 1

  for j in range(low, high):
    if arr[j] < pivot:
      i += 1
      swap(arr, i, j)

  swap(arr, i + 1, high)
  return i + 1

def swap(arr, i, j):
  arr[i], arr[j] = arr[j], arr[i]

def quickSort(arr, low, high):
  if low < high:

    pi = partition(arr, low, high)

    quickSort(arr, low, pi - 1)
    quickSort(arr, pi + 1, high)

  `
export  {quickSortCCode, quickSortCPPCode, quickSortJSCode, quickSortJavaCode, quickSortPCode};