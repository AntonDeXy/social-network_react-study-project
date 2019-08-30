export const required = value => {
  if (value) {
    return undefined
  }
  return 'field is required'
}

export const maxLenghtCreator = (maxLenght) => (value) => {
  if (value.lenght > maxLenght) {
    return `Max lengt is ${maxLenght} symb`
  }
  return undefined
}