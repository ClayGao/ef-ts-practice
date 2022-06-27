import express, {app} from 'express'
{
/**
 * Dont do this，因為 TypeScript 會自動幫你推斷程式碼
 */
let x: number = 12 // 不要這樣寫
let y = 12 // OK

// 物件也是如此
const person = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking']
}

function square(x: number): number {
  return x * x
}

const axis1:string = 'x'
const axis2 = 'x' // TypeScript 推斷得更為精確

// 其中一種函式參數不需要加上型態註記的狀況，比如說有預設值時：
function parseNumber(str:string, base = 10) {
  ///
}

// Don't do this
app.get('/google', (req: express.Request, res: express.Response) => {
  res.send('ok')
})

// Do this
app.get('/google', (req,res) => {
  res.send('ok')
})

/**
 * 當你需要使用多餘屬性檢查時，就可以主動使用型態註記
 */

const spark = {
  name: 'Spark',
  id:  2254,
  price: 299
}

type Product = {
  id:string;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  console.log(product.id, product.name, product.price)
}

logProduct(spark)

/**
 * 雖然 TypeScript 可以幫我們推斷大部分型態，但有時候建議在函式中使用型態註記，類似 TDD 的作法：
 * 1. 確定傳進參數的型態
 * 2. 確定函式回傳的型態 (至少做到這點)
 * 3. 實作
 */

}