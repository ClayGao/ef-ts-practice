/**
 * 思考下列程式碼
 */
type Person = {
  firstName: string;
  lastName: string;
}

function logPerson(person: Person, gender: 'boy' | 'girl') {
  console.log(`${person.firstName} ${person.lastName} ${gender}`);
}

let genderOfClay = 'boy';
let clay = {
  firstName: 'Clay',
  lastName: 'Gao'
}

// logPerson(clay, genderOfClay)


























/**
 * 這就是型態加寬造成的，因為 x 被推斷為 string，但 logPerson 要的是 'boy' / 'girl'，讓我們放大這個案例
 */

const mixed = ['x', 1]

type A = (string | number)[]
type B = ['x', 1]
type C = [string | number]
type D = readonly [string | number]
type E = ('x' | 1)[]
type F = readonly (string | number)[]
type G = [any, any]
type H = any

/**
 * 要縮減上述y最開頭的狀況，你可以使用 const，這個 ESLint 有幫我們做到
 */
const genderOfClayWithConst = 'boy';
logPerson(clay, genderOfClayWithConst)

/**
 * TypeScript 在物件上也極力處理具體性
 */
const v = {
  x : 1
}

v.x = 3
v.x = '3'
v.y = 4
v.name = 'qwe'

/**
 * 覆蓋 TypeScript 所做的型態加寬，你可以使用結構化註記：
 */

const v2: {
  x: 1 | 3 | 5
} = {
  x : 1
}

v2.x = 2
v2.x = 3

/**
 * 最大化限制加寬，使用 as const 斷言，但你要了解產生的結果
 */

const v3 = {
  x: 1,
  y: 2
}

const v4 = {
  x: 1 as const,
  y: 2
}

const v5 = {
  x: 1,
  y: 2
} as const