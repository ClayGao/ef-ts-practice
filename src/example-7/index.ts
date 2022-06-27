/**
 * 將型態視為值的集合
 */
{
  /**
   * 這是什麼意思？請把型態 A 視為 「值的集合」，也請把 'a' 視為值的集合，你會發現他們相同，都是 'a'，所以可以指派
   */
  type A = 'a';
  const a: A = 'a';

  /**
   * 將 B 視為值的集合，是 'b'，'c' 的集合是 'c'，他們彼此不相同，所以不能指派
   */
  type B = 'b';
  const b: B = 'c';


  /**
   * 集合最小的是 never，是空集合，所以什麼都不能指派給它
   */
  const n: never = [1, 2];


  /**
   * 聯集集合 |，我們稱 AB 叫做聯集型態，也就是「值的集合」的聯集
   */
  type AB = A | B;
  const ab: AB = 'a';
  const ab2: AB = 'b';

  /**
   * 型態檢查器日常的工作，其實就是在測試一個集合是不是另一個集合的子集合
   */
}