const mergeSortCCode =`
  void merge(int arr[], int left, int mid, int right) {
    int i, j, k;
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int leftArr[n1], rightArr[n2];

    for (i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (j = 0; j < n2; j++)
        rightArr[j] = arr[mid + 1 + j];

    i = 0;
    j = 0;
    k = left;
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        }
        else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
  }

  void mergeSort(int arr[], int left, int right) {
    if (left < right) {

      int mid = left + (right - left) / 2;

      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);

      merge(arr, left, mid, right);
    }
  }
`

const mergeSortCPPCode =`
  void merge(int arr[], int p, int q, int r) {

    int n1 = q - p + 1;
    int n2 = r - q;

    vector<int> L(n1);
    vector<int> M(n2);
    
    for (int i = 0; i < n1; i++)
      L[i] = arr[p + i];
      
    for (int j = 0; j < n2; j++)
      M[j] = arr[q + 1 + j];

    int i = 0, j = 0, k = p;

    while (i < n1 && j < n2) {
      if (L[i] <= M[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = M[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    
    while (j < n2) {
      arr[k] = M[j];
      j++;
      k++;
    }
  }

  void mergeSort(int arr[], int l, int r) {
    if (l < r) {

      int m = l + (r - l) / 2;
      
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);

      merge(arr, l, m, r);
    }
  }
`

const mergeSortJavaCode =`
  void merge(int arr[], int l, int m, int r){
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[] = new int[n1];
    int R[] = new int[n2];

    for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0;

    int k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      }
      else {
          arr[k] = R[j];
          j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  void sort(int arr[], int l, int r){
    if (l < r) {

        int m = (l + r) / 2;

        sort(arr, l, m);
        sort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
  }

`

const mergeSortJSCode =`
  function merge(arr, left, middle, right) {
      
    let l1 = middle - left + 1;
    let l2 = right - middle;

    let arr1 = new Array(l1);
    let arr2 = new Array(l2);

    for (let i = 0; i < l1; ++i) {
        arr1[i] = arr[left + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr2[i] = arr[middle + 1 + i];
    }

    let i = 0,
        j = 0,
        k = left;

    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < l1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
  }

  function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }

    let middle = left + parseInt((right - left) / 2);

    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);

    merge(arr, left, middle, right);
  }
`

const mergeSortPCode = `
  def merge(arr, l, m, r):
    n1 = m - l + 1
    n2 = r - m

    L = [0] * (n1)
    R = [0] * (n2)

    for i in range(0, n1):
      L[i] = arr[l + i]

    for j in range(0, n2):
      R[j] = arr[m + 1 + j]

    i = 0    
    j = 0     
    k = l     

    while i < n1 and j < n2:
      if L[i] <= R[j]:
        arr[k] = L[i]
        i += 1
      else:
        arr[k] = R[j]
        j += 1
      k += 1

    while i < n1:
      arr[k] = L[i]
      i += 1
      k += 1

    while j < n2:
      arr[k] = R[j]
      j += 1
      k += 1
  
  def mergeSort(arr, l, r):
    if l < r:

      m = l+(r-l)//2

      mergeSort(arr, l, m)
      mergeSort(arr, m+1, r)
      merge(arr, l, m, r)
`
export {mergeSortCCode, mergeSortCPPCode, mergeSortJSCode, mergeSortJavaCode, mergeSortPCode}