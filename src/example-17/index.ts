/**
 * 大家看看這個函式可能有什麼問題？
 */

// 這是一個會有副作用的陣列，因為 pop()
function arraySum(arr: number[]) {
  let sum = 0, num;
  while ((num = arr.pop()) !== undefined ){
    sum+=num;
  }
  return sum
}

function printTriangles(n: number) {
  const nums:number[] = [];
  for (let i = 0; i < n; i++) {
    nums.push(i);
    console.log(arraySum(nums));
  }
}

/**
 * readonly 有幾個特性，他是一個新的型態：
 * 1. 你可以讀取，但無法寫入
 * 2. 你可以讀取他的 length 屬性，但無法更改
 * 3. 你不能呼叫 pop 或是其他會修改陣列的方法
 */

/**
 * 嚴格來說 number[] 是 readonly number[] 的子型態 (這種想法很容易反過來，以後再解釋)，所以你可以把 number[] 指派為 readonly number[]
 */
const a:number[] = [1,2,3];
const b:readonly number[] = a;
const c:number = b;

/**
 * 將函式中的參數設定為 readonly 可以讓你的函式不會有副作用:
 * 1. TypeScript 會幫你檢查參數在函式內文中沒有被改變
 * 2. 它可以讓呼叫方相信你的函式不會去改變參數，確認沒有副作用
 * 3. 呼叫方可將一個 readonly 陣列傳給你的函式
 */

// -> 與其去預期別人寫的程式不會改變你的參數，不如好好使用 readonly 可以讓你的程式更安全

/**
 * readonly 的局限性在於他是淺的
 */

const dates: readonly Date[] = [new Date(), new Date()];
dates.push(new Date());
dates[0].setFullYear(2077) // OK


/**
 * 物件的 Readonly 也是一樣
 */
type Outer = {
  inner: {
    x: number
  }
}
const o: Readonly<Outer> = { inner: { x: 1 } };
o.inner = { x: 2 };
o.inner.x = 3; // OK

/**
 * tips:可以寫一個 T 來看一下 readonly 的狀況
 */
type T = Readonly<Outer>;