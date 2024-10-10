const insertionSortCCode =`
  void insertionSort(int arr[], int n){
    for (int i = 1; i < n; ++i) {
      int key = arr[i];
      int j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }

`
const insertionSortCPPCode =`
  void insertionSort(int arr[], int n){
    for (int i = 1; i < n; ++i) {
      int key = arr[i];
      int j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }

`
const insertionSortJavaCode = `
  void sort(int arr[]){
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
      int key = arr[i];
      int j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }
`
const insertionSortJSCode =`
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }

`
const insertionSortPCode =`
  def insertionSort(arr):
    for i in range(1, len(arr)):
      key = arr[i]
      j = i - 1

      while j >= 0 and key < arr[j]:
        arr[j + 1] = arr[j]
        j -= 1
      arr[j + 1] = key

`
export {
  insertionSortCCode,
  insertionSortCPPCode,
  insertionSortJavaCode,
  insertionSortJSCode,
  insertionSortPCode
}