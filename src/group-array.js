
function groupArrayElements(array, divisions) {

  if (array.length <= 0) {
    throw new Error('The array must have at least one element');
  }

  if (divisions <= 0) {
    throw new Error('The input need to be a positive number greater than 0');
  }

  const minLength = array.length / divisions;


  // Figure out the minimum size of a group.
  let groupLength = Math.round(array.length / divisions);

  // We need to round down if decimal point is .5 as the requirements state the final part should equal to the reminder.
  if (Math.abs(Math.round(minLength) - minLength) === 0.5) {
    groupLength = Math.floor(array.length / divisions);
  }


  const groupedElements = [];
  let groupStart = 0;
  let groupEnd = groupLength;

  for (i = 0; i < divisions; i++) {

    // If we are on the last group then include all the remaining elements
    if (i + 1 === divisions) {
      groupEnd = array.length;
    }

    let arrayGroup = array.slice(groupStart, groupEnd);

    groupedElements.push(arrayGroup);

    groupEnd += groupLength;
    groupStart += groupLength;
  }

  return groupedElements;
}

module.exports = groupArrayElements;
