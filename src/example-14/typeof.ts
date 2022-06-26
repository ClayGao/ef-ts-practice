const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#000',
  label: 'VGA'
}

// type InitOption = typeof INIT_OPTIONS;

/**
 * TypeScript 使用 typeof，雖然語法與 JavaScript 執行期的 typeof 相同是刻意的，但它的確是在 TypeScript 型態層面上操作，而且更精確
 * 但這樣使用時需要特別小心留意，最好的作法還是先定義型態，再宣告變數
 */

/**
 * 那如果我們是要為函式推斷的型態去定義型態呢？使用 ReturnType
 */

const initOptionsFn = () => {
  return {
    width: 640,
    height: 480,
    color: '#000',
    label: 'VGA'
  }
}

type InitOption = ReturnType<typeof initOptionsFn>;