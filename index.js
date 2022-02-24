function superbowlWin(arr) {
  const element = arr.find(isWin);
  //   if (element) {
  //     return element.year;
  //   }
  //     return element.year;
  //   element ? element.year : undefined;
  element && element.year;
}

const isWin = (element) => element['result'] === 'W';
