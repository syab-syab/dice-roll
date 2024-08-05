const demeChouhan = (rollArr: number[]): string => {
  const sum: number = rollArr[0] + rollArr[1]
  if (sum % 2 === 0) {
    return "丁"
  } else {
    return "半"
  }
}

export default demeChouhan