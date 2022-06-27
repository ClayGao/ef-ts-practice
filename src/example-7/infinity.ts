{
/**
 * 如果是物件呢？ 
 */

type Identified = {
  id: string;
}

// 1. 值裡面是否有一個 id 屬性？有
// 2. id 屬性的值是否是 string 的子集合？是
const a:Identified = {
  id: 'abcd'
}

/**
 * 再說一次，把「型態」視為「值的集合」可以幫助我們了解 TypeScript 的檢查器是如何工作的
 */

interface Person {
  name: string;
}

interface Lifespan {
  birth: Date;
  death: Date;
}

// & 運算子，可以視為兩個型態的交集
type PersonSpan = Person & Lifespan;

// 1. Person / Lifespan 兩者沒有共同的屬性，所以他們的交集是屬於空集合，空集合就是 never
// 2. 但重點重點重點，型態運算子的操作處理的是「值的集合」，不是「屬性 key」的集合，所以以下的 ps 這個變數，我們可以把 ps 這個變數的值視為「交集型態」
const ps: PersonSpan = {
  name: 'John',
  birth: new Date('1912-01-01'),
  death: new Date('2012-01-01')
}

// 對於 2. 你會有「交集的屬性」這個直覺是對的，但這個只限於兩個 interface 的「聯集」
type UnionPersonSpan = Person | Lifespan;

// const ups: UnionPersonSpan = {
//   name: 'John',
//   birth: new Date('1912-01-01'),
//   death: new Date('2012-01-01'),
// }

// 為什麼不會出錯？請參考這裡：https://ithelp.ithome.com.tw/articles/10216794
// 建議這個部分如果只是為了開發通順，這部分就當參考就好，請用類似於 boolean 的邏輯去看待 & or | 運算子

// keyof (A|B) ＝ (keyof A) & (keyof B);
type T = keyof UnionPersonSpan; // never

// keyof (A&B) ＝ (keyof A) | (keyof B);
type K = keyof PersonSpan // "name" | "birth" | "death"

// const testKey:T = 'name'
}  
