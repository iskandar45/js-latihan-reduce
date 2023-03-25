// Soal Nomor 1
// Hitung total dari array angka [2, 5, 8, 10, 15] dengan menggunakan reduce.
function SumArrayReduce(array) {
  // gunakan method reduce
  let result = array.reduce((iterasi, hasil) => {
    return iterasi + hasil;
  }, 0);
  return result;
}

function SumArrayLoop(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

// Soal Nomor 2
// Ubah array ['s', 'o', 'm', 'e', ' ', 't', 'e', 'x', 't'] menjadi sebuah string dengan menggunakan reduce.
function ubahArrTextReduce(text) {
  let result = text.reduce((akumulator, currentvalue) => {
    return akumulator + currentvalue;
  });
  return result;
}

function ubahArrTextLoop(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += text[i];
  }
  return result;
}

// Soal Nomor 3
// Buat sebuah function yang mengembalikan nilai true jika semua nilai dari sebuah array berisi angka genap, dan false jika sebaliknya, dengan menggunakan reduce.
function isAllEvenReduce(array) {
  let result = array.reduce((result, value) => {
    if (value % 2 === 0 && result) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
function isAllEvenLoop(array) {
  let result = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && result) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}
// Soal Nomor 4
// Buat sebuah function yang mengembalikan array baru berisi nilai-nilai yang lebih besar dari 10 dari array [5, 12, 8, 25, 7] dengan menggunakan reduce.
function filterGreaterThanTenReduce(arr) {
  let result = arr.reduce((res, val) => {
    if (val > 10) {
      res.push(val);
    }
    return res;
  }, []);
  return result;
}

function filterGreaterThanTenLoop(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Soal Nomor 5
// Buat sebuah function yang mengembalikan rata-rata nilai dari sebuah array [10, 20, 30, 40, 50] dengan menggunakan reduce.
function averageReduce(nilai) {
  let result = nilai.reduce((res, val) => {
    return res + val;
  });
  result = result / nilai.length;
  return result;
}

function averageLoop(nilai) {
  let result = 0;
  for (let i = 0; i < nilai.length; i++) {
    result += nilai[i];
  }
  result = result / nilai.length;
  return result;
}

// deklarasi variable
const array = [2, 4, 8, 10, 16];
const text = ["s", "o", "m", "e", " ", "t", "e", "x", "t"];
const arr = [5, 12, 8, 25, 7];
const arr2 = [10, 20, 30, 40, 50];

// console.log()
console.log(
  "Array ini dihitung mengggunakan reduce, dan hasilnya => ",
  SumArrayReduce(array)
);
console.log(
  "Array ini dihitung mengggunakan loop, dan hasilnya => ",
  SumArrayLoop(array)
);
console.log("=================================");
console.log(
  "Text ini dihitung mengggunakan reduce, dan hasilnya => ",
  ubahArrTextReduce(text)
);
console.log(
  "Text ini dihitung mengggunakan loop, dan hasilnya => ",
  ubahArrTextLoop(text)
);
console.log("=================================");
console.log(
  "Array ini dihitung mengggunakan reduce, dan hasilnya => ",
  isAllEvenReduce(array)
);
console.log(
  "Array ini dihitung mengggunakan loop, dan hasilnya => ",
  isAllEvenLoop(array)
);
console.log("=================================");
console.log(
  "Array ini dihitung mengggunakan reduce, dan hasilnya => ",
  filterGreaterThanTenReduce(arr)
);
console.log(
  "Array ini dihitung mengggunakan loop, dan hasilnya => ",
  filterGreaterThanTenLoop(arr)
);

console.log("=================================");
console.log(
  "Array ini dihitung mengggunakan reduce, dan hasilnya => ",
  averageReduce(arr2)
);
console.log(
  "Array ini dihitung mengggunakan loop, dan hasilnya => ",
  averageLoop(arr2)
);
