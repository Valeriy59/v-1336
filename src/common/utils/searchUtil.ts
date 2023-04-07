export function searchUtil(id: number, idName: string, arr: any[]) {
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][idName] === id) {
        return arr[i].name
      }
    }
  }
}
