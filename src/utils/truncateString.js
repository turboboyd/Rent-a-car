const trimAndCapitalizeLastTwoWords= (arr)=> {


  let words = arr[1].split(' ');
  if (words.length < 2) {
    return;
  }

  let lastTwoWords = words.slice(-2);
  lastTwoWords = lastTwoWords.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return lastTwoWords.join(' ');
}

export default trimAndCapitalizeLastTwoWords;
