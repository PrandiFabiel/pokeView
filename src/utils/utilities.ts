function GetColorByType(type: string) {
  switch (type) {
    case "fairy":
      return "";
      break;

    default:
      break;
  }
}

function checkWidth(length: number): string {
  return length >= 2 ? "47%" : "100%";
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addZeros(num: number): string {
  if (num < 10) {
    return "00" + num;
  } else if (num < 100) {
    return "0" + num;
  } else {
    return num.toString();
  }
}

export const Utils = {
  checkWidth,
  capitalize,
  addZeros
};
