/**
 * 介紹何謂函式陳述式與函式表達式
 */

function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number): number => a + b;

/**
 * 在 TypeScript 中，使用表達式的一個優點是可以一次性為一個函式宣告型態，而不需要在每個函式呼叫時都重新宣告它。
 */

type AddFn = (a: number, b: number) => number;
const add3: AddFn = (a, b) => a + b;

// 這樣我們就可以來做複用：

type BinaryFn = (a: number, b: number) => number;

const subtract: BinaryFn = (a, b) => a - b;
const multiply: BinaryFn = (a, b) => a * b;
const divide: BinaryFn = (a, b) => a / b;

// -> 需要處理的型態註記更少，而且與函式的實作分開，讓邏輯更明顯，讓 TypeScript 檢查器更易讀。

/**
 * 假設 divide 是一個 library 提供的函式，你需要編寫一個類似的新函式，但會與 divide 同一個回傳值：
 * (書本中用 fetch 當作案例，但我覺得可以用以下類比來替代)
 */

 const divideDouble: typeof divide = (a, b) => (a / b) * 2;
