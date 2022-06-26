{
/**
 * 項目 9，優先使用型態宣告，而非型態斷言
 */

/**
 * 介紹何謂型態宣告與型態斷言
 */
type Person = {
  name: string;
}

// 型態宣告
const clay:Person = {
  name: 'Clay',
}

// 型態斷言
const allie = {
  name: 'Allie',
} as Person

/**
 * 型態宣告與型態斷言的差異:
 */

// 這樣不會被找到任何錯誤，因為型態斷言假設你懂得比 TypeScript 檢查器還要多
const mina = {} as Person;

// 即使你新增新的屬性 tail，也檢查不出錯誤
const mina1 = {
  name: 'Mina',
  tail: 'long'
} as Person;

// -> 你必須有足夠的理由以使用型態斷言

/**
 * 有時我們不知道如何在宣告時使用箭頭函式，我們如何在以下這段程式碼中使用 Person 介面？
 */

// const people = ['alice', 'bob', 'clay'].map(name => ({name}));

// 表面上可以解決問題的作法：
// const people = ['alice', 'bob', 'clay'].map(name => ({name}  as Person));

// -> 也會遇到以下問題
// const people = ['alice', 'bob', 'clay'].map(name => ({}  as Person));

// 有效解決但沒這麼好讀的作法：
// const people = ['alice', 'bob', 'clay'].map(name =>{ 
//   const person: Person = {name}
//   return person
// });

// 推薦作法
// const people = ['alice', 'bob', 'clay'].map((name): Person => ({name}));

// 推薦作法 2，在 end 端加上型態宣告
const people: Person[] = ['alice', 'bob', 'clay'].map((name) => ({name}));

/**
 * 型態斷言之間的轉換
 */

type Human = {
  name: string;
}

type Robot = {
  id: number;
}

const mili:Human = {
  name: 'Mili',
} 

const miliRobot = mili as unknown as Robot;
}