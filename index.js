function superbowlWin(arr) {
  const element = arr.find(isWin);
  return element && element.year;
}

const isWin = (element) => element['result'] === 'W';
