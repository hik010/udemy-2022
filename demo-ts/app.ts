// basic add function
function add(n1: number, n2: number) {
  return n1 + n2;
}

// const result = add(10, 2);

// console.log(result);

// flexible: add accept number or string

type Combinable = string | number;

function combine(n1: Combinable, n2: Combinable, cb: (num: string) => void) {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number') result = n1 + n2;

  result = n1.toString() + n2.toString();
  cb(result);
  return result;
}

function printResult(str: string) {
  console.log(str);
}

let result = combine('11', '1', printResult);
console.log('code from app.ts');
