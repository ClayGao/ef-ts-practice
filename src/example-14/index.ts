{
/**
 * 大家都知道 DRY 原則，但懂得 DRY 原則的工程師未必在編寫型態時也可以好好遵守：
 */

// 由於介紹關係請容許我這樣命名
type Person =  {
  firstName: string;
  lastName: string;
}

type PersonWithBirthday = {
  firstName: string;
  lastName: string;
  birth: Date;
}

/**
 * 如果你本身就有在寫 TS，你應該知道如何處理，如果你是用 interface 宣告型態，那你會使用 extend 來避免複用：
*/ 

// type PersonWithBirthday = Person & {
//   birth: Date;
// }
}