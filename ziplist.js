const numberArray = [1, 2, 3];
const letterArray = ['a', 'b', 'c'];

function zipList(listA, listB) {
  const finalArray = [];
  for (let i = 0; i < listA.length; i++) {
    finalArray.push(listA[i]);
    finalArray.push(listB[i]);
  }
  return finalArray;
}
console.log(`zipList Array: ${zipList(numberArray, letterArray)}`);

function zipListTheSimpleWay(listA, listB) {
  return _.flatten(_.zip(listA, listB));
}

console.log(`zipList Underscore Array: ${zipListTheSimpleWay(numberArray, letterArray)}`);
