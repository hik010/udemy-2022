function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('result: ', num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combinedValues: (a: number, b: number) => number;
combinedValues = add;

// printResult(10);
console.log(combinedValues(8, 10));
