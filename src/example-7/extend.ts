{
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
  
  // extend，雖然你第一會想到「繼承」，但這裡建議你解讀為 PersonSpan 為 Person 的子集合
  interface PersonSpan extends Person {
    birth: Date;
    death: Date;
  }

  /**
   * 舉個範例
   */
  interface Vector1D { x: number } // 一維
  interface Vector2D extends Vector1D { y: number } // 二維
  interface Vector3D extends Vector2D { z: number } // 三維
  
  // 如果照上面解讀：
  // Vector1D 的子型態是 Vector2D
  // Vector2D 的子型態是 Vector3D
  
  // Vector3D 是 Vector2D 的子集合，但另外有 { z: number } 值

  }  
  