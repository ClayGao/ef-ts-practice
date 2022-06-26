type UploadEvent = {
  type: 'upload';
  fileName: string;
  contents: string;
}

type DownloadEvent = {
  type: 'download';
  fileName: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case 'upload':
      e
      break;
    case 'download':
      e
      break;
  }
}

/**
 * 或者使用自定義 function 來處理型態，這種方式叫做 type guard
 */

const peopleList = ['John', 'Clay', 'Jane']
const members = ['John', 'Jane'].map(who => peopleList.find(n => n === who)).filter(who => who !== undefined)

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

const members2 = ['John', 'Jane'].map(who => peopleList.find(n => n === who)).filter(isDefined)
