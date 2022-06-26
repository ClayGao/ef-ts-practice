type Man = {
  name: string;
  age: number;
}

/**
 * 型態映射
 */
const jack:Man = {
  name: 'Jack',
  age: 18
  // 觸發多餘屬性檢查
  // sex: 'boy',
}

/**
 * 多餘屬性檢查會被中間變數忽略
 */

const who = {
  name: 'Jack2',
  age: 18,
  hobbit: 'coding'
}

// 多餘屬性檢查沒有檢查出 who 多了 hobbit 這個屬性，因為 who 被推斷為包含擁有的比 Man 更多的屬性，所以可以被指派給 jack2
const jack2:Man = who

/**
 * 使用型態斷言不會觸發多餘屬性檢查 (example-9)
 */

/**
 * 如何不使用多餘屬性檢查？
 */

type Man2 = {
  name: string;
  [age: string]: unknown;
}

const clay2:Man2 = {
  name: 'Clay'
}

// -> 多餘屬性檢查可以有效地抓到拼字錯誤 /屬性名稱錯誤，也適合用於型態映射如 optional 屬性，但也要十分了解他的局限性