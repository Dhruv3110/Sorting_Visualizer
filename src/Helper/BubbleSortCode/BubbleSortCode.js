const bubbleSortCCode = `
  void swap(int* xp, int* yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
  }

  void bubbleSort(int arr[], int n){
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(&arr[j], &arr[j + 1]);
          swapped = true;
        }
      }

      if (swapped == false)
        break;
    }
  }

`
const bubbleSortCPPCode =`
  void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    bool swapped;

    for (int i = 0; i < n - 1; i++) {
      swapped = false;
      for (int j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr[j], arr[j + 1]);
          swapped = true;
        }
      }

      if (!swapped)
          break;
    }
  }

`
const bubbleSortJavaCode = `
  static void bubbleSort(int arr[], int n){
    int i, j, temp;
    boolean swapped;
    for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {

              temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              swapped = true;
          }
      }
      if (swapped == false)
          break;
    }
  }
`
const bubbleSortJSCode = `
  function bubbleSort(arr, n){
    var i, j, temp;
    var swapped;
    for (i = 0; i < n - 1; i++){
      swapped = false;
      for (j = 0; j < n - i - 1; j++){
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }

      if (swapped == false)
      break;
    }
  }
`
const bubbleSortPCode = `
  def bubbleSort(arr):
    n = len(arr)
    
    for i in range(n):
      swapped = False

      for j in range(0, n-i-1):

        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            swapped = True
      if (swapped == False):
          break
`
export {
  bubbleSortCCode,
  bubbleSortCPPCode,
  bubbleSortJavaCode,
  bubbleSortJSCode,
  bubbleSortPCode
}