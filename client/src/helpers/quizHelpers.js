export const selectRandom = (dataArray, num) => {
  let newData = [];
  let copyDataArray = dataArray;
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * copyDataArray.length);
    newData.push(copyDataArray[index]);
    copyDataArray.splice(index, 1);
  }
  return newData;
};
function randomNum(length) {
  const index = Math.floor(Math.random() * length);
  return index;
}
function chooseCorrectAnswer(obj, ind) {
  const resultObj = {
    option: obj.translations[ind].result,
    optionLang: obj.translations[ind].lang,
    isCorrect: true,
  };
  return resultObj;
}
function chooseOtherOptions(array, id) {
  const targetArr = array.filter((item) => item._id !== id);
  const resultTargetArr = selectRandom(targetArr, 3);
  const result = resultTargetArr.map((elem) => {
    const randomI = randomNum(elem.translations.length);
    return {
      option: elem.translations[randomI].result,
      optionLang: elem.translations[randomI].lang,
      text: elem.text,
      isCorrect: false,
    };
  });
  return result;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

export const makeQuizArray = (array) => {
  if (array.includes(undefined)) {
    return "In order to solve a quiz, you should have at least 10 searched words!"
  }
  let result = [];
  array.map((item) => {
    const randomInd = randomNum(item.translations.length);
    const otherOptions = chooseOtherOptions(array, item._id);
    const answersArray = [
      chooseCorrectAnswer(item, randomInd),
      ...otherOptions,
    ];
    shuffleArray(answersArray);
    return result.push({ text: item.text, answers: answersArray });
  });

  return result;
};


export const languageConvert = (language) => {
  switch (language) {
    case 'de':
      return 'German';
    case 'es':
      return 'Spanish';
    case 'ar':
      return 'Arabic';
    case 'tr':
      return 'Turkish';
    case 'it':
      return 'Italian';
    case 'pt':
      return 'Portuguese';
    case 'fr':
      return 'French';
    case 'el':
      return 'Greek';
    case 'he':
      return 'Hebrew';
    case 'ru':
      return 'Russian';
    default:
      return '';
  }
};
