const selectionSortCCode =`
  void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {

      int min_idx = i;

      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {

          min_idx = j;
        }
      }

      if (min_idx != i) {
        int temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
      }
    }
  }

`
const selectionSortCPPCode = `
  void selectionSort(vector<int> &arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; ++i) {

      int min_idx = i;

      for (int j = i + 1; j < n; ++j) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j; 
        }
      }

      if (min_idx != i) {
        swap(arr[i], arr[min_idx]);
      }
    }
  }
`
const selectionSortJavaCode =`
  static void selectionSort(int[] arr){
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {

      int min_idx = i;

      for (int j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
      }

      if (min_idx != i) {
        int temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
      }
    }
  }

  static void printArray(int[] arr){
    for (int val : arr) {
      System.out.print(val + " ");
    }
    System.out.println();
  }
`
const selectionSortJSCode =`
  function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {

      let min_idx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
          min_idx = j;
        }
      }

      if (min_idx != i) {
        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
      }
    }
  }

  function printArray(arr) {
    for (let val of arr) {
      process.stdout.write(val + " ");
    }
    console.log();
  }
`
const selectionSortPCode = `
  def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):

      min_idx = i

      for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
          min_idx = j

      if min_idx != i:
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

  def print_array(arr):
    for val in arr:
      print(val, end=" ")
    print()
`
export {
  selectionSortCCode,
  selectionSortCPPCode,
  selectionSortJavaCode,
  selectionSortJSCode,
  selectionSortPCode
}