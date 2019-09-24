function zipList(list1, list2) {
  const returnList = [];
  for (let i = 0; i < list1.length; i++) {
    returnList.push(list1[i], list2[i]);
  }
  return returnList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];
console.log(zipList(testList1, testList2));
console.log(zipListTheSimpleWay(testList1, testList2));
