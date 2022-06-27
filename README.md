## 型態系統：
- 項目 7：將型態視為值的集合
  - -> 將「型態」視為值的集合，這些集合可能是有限的 (比如 `a`，或是 `boolean`，也可能是無限的 (比如 `string` 或是 `number`)

- 項目 9：優先使用型態宣告，而非型態斷言
  - 型態斷言最適合在你知道的資訊確實比 TypeScript 還多的情況下使用，比如說處理 DOM 元素：
  ```ts
  document.querySelector('#nyButton').addEventListener('click', e => {
    e.currentTarget // 型態是 EventTarget
    const button = e.currentTarget as HTMLButtonElement;
    button // 型態足 HTMLButtonElement
  })
  ```
  或是非 null 斷言：
  ```ts
  const elNull = document.querySelector('.foo') // 型態為 HTMLElement | null
  const el = document.querySelector('.foo')! // 型態為 HTMLElement
  ``` 
  你必須很確定時，才使用非 null 斷言

  如果要在型態斷言之間轉換，請使用 as unknown 過度

  - -> 優先使用型態宣告 (:Type)，而非型態斷言 (as Type)
  - -> 知道如何註記箭頭函式的回傳型態
  - -> 當你掌握了 TS 所不知道的型態資訊時，可使用型態斷言 / 非 null 斷言
    
- 項目 11: 認識多餘屬性檢查的侷限性
  - -> 當你將常值物件指派給變數，或將它當成引述傳給 function 時，就會被執行多餘屬性檢查
  - -> 注意多餘屬性檢查的限制：加入中間變數會排除這種檢查
- 項目 12: 盡量對整個函式表達式套用整個型態 (推薦函式表達)
  - -> 考慮註記整個函式的型態，而不是註記他們的參數與回傳型態，這樣太多雜訊
  - -> 如果你不斷編寫同一個型態簽章，請把函式簽章提取出來，或是找看看有沒有「既有」的函式型態
  - -> 用 typeof fn 來匹配其他函式的簽章
  

- → 項目 13: type or interface ?
- 項目 14: 使用型態操作與泛型來避免重複
  - -> DRY 原則也適用於型態，就像它也適用於邏輯
  - -> 為型態命名，不要重複他們，使用 extend / & 來避免重複欄位
  - -> 了解 TypeScript keyof / typeof 的檢索，以及對映型態
  - -> 熟悉 Pick / Partial 與 ReturnType


- 項目 17：使用 readonly 來避免意外變動造成的錯誤
  - -> 如果函式不會修改它的參數，就將參數宣告為 readonly，這樣子可讓合約更清楚，並防止意外變動
  - -> 認知 readonly 是淺的


## 型態推斷：

- 項目 19: 不要讓可推斷的型態混淆你的程式碼
  - -> 當 TypeScript 可以推斷同一個型態時，不要額外做型態註記
  - -> 在理想情況下在函式上使用型態註記，但不用在邏輯中做這件事
  - -> 考慮讓常值物件與函式回傳型態上使用明確的註記，即使他們可以被推斷


- 項目 21 : 型態的寬化 
  - -> 了解 TypeScript 如何藉著將常數加寬來推斷它的型態
  - -> 熟悉可以影響這種行為的手段，基本型態使用 const，或是 as const


- 項目 22 型態窄化
  - -> 了解 TypeScript 如何根據條件式和其他控制流程來窄化型態
  - -> 使用 tagged 聯集來協助窄化程序

## 型態設計

- 項目 32，盡量聯集介面，而不是在介面中聯集