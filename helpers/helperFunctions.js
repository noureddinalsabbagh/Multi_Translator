exports.convertToObj = (arr1, arr2) => {
  const result = arr1.map((element, index) => {
    return { [element]: arr2[index] };
  });
  return result;
};
