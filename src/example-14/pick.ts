
/**
 * 相反的，如果我只是要取一部分的屬性呢？
 */
type State = {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
  pageContents: string;
}

type TopNavState = {
  userId: string;
  pageTitle: string;
  recentFiles: string[];
}

// 方法 1 (Don't do this):
type TopNavState2 = {
  userId: State['userId'];
  pageTitle: State['pageTitle'];
  recentFiles: State['recentFiles'];
}

const topNavState2: TopNavState2 = {
  userId: '1',
  pageTitle: 'Home',
  recentFiles: ['1', '2', '3']
}

// 方法 2 (Don't do this):
type TopNavState3 = {
  [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k];
}

const topNavState3: TopNavState3 = {
  userId: '1',
  pageTitle: 'Home',
  recentFiles: ['1', '2', '3']
}

// 方法 3 type Pick<T, K> = { [k in K]: T[k] };
type TopNavState4 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

/**
 * tagged union example，假如我只想要 `type` 這個屬性 ?
 */

type SaveAction = {
  type: 'save';
  url: string;
}

type LoadAction = {
  type: 'load';
  url: string;
}

type DeleteType = {
  type: 'delete';
  url: string;
}

type Action = SaveAction | LoadAction | DeleteType;
type ActionType = 'save' | 'load'; // 還是有重複到

// 可使用方法 
type ActionType1 = Action['type'];

// 不同於上面的方法，Pick 會回給你一個新的 type / interface
type ActionType2 = Pick<Action, 'type'>;
// -> 
type ActionType3 = Pick<Action, 'type'>['type'];
