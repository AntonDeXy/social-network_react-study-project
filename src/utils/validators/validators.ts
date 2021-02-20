export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
  if (value) {
    return undefined
  }
  return 'field is required'
}

export const maxLenghtCreator = (maxLenght: number): FieldValidatorType => (value) => {
  if (value.length > maxLenght) {
    return `Max lengt is ${maxLenght} symb`
  }
  return undefined
}