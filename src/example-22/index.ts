/**
 * 窄化是寬化的相反，null 檢查是個常見的案例
 */
const element = document.getElementById('element');
if (element) {
    element.style.color = 'red';
} else {
    console.log('Element not found');
}

// 你也可以使用 return / throw 來窄化
// if(!element) {
//     throw new Error('Element not found');
// }
// element.style.color = 'red';

// 也可以使用 屬性檢查或是 instanceof 檢查
if(element instanceof HTMLElement) {
    element.style.color = 'red';
}

/**
 * TypeScript 很擅長使用條件式來處理窄化，但也有一些常見的錯誤用法：
 */
if (typeof element === 'object') {
    element.style.color = 'red';
}

// 重要！這個超級常見，還會卡住想說會什麼會錯誤
function foo(x?: string | null) {
  if(!x) {
    x
  }
}