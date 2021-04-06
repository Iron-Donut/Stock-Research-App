export const dateToMMDDYYYYConverter = (dateString) => {
  const valueDate = new Date(dateString);
      return (
        (valueDate.getMonth() > 8
          ? valueDate.getMonth() + 1
          : "0" + (valueDate.getMonth() + 1)) +
        "/" +
        (valueDate.getDate() > 9
          ? valueDate.getDate()
          : "0" + valueDate.getDate()) +
        "/" +
        valueDate.getFullYear()
      );
}

export const floatWithRounding = (number, places = 2) => {
  return parseFloat(number).toFixed(places)
} 

export const percentageConverter = (number) => {
  const percentageNumber = parseFloat(number) * 100;
  return percentageNumber.toFixed(2)+"%";
}