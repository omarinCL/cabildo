import { useState } from 'react'
import { validate } from '../utils/Validations'

export const validateAll = fields => {
  let isValid = true
  fields.forEach(element => {
    if (!element.validate()) isValid = false
  })
  return isValid
}

const useInput = (name, rules, defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const [isValid, setIsValid] = useState(null)
  const [errors, setErrors] = useState({})

  const handleOnChange = e => {
    e.persist()
    const [errors, isValid] = validate({ name, value: e.target.value, rules })
    setValue(e.target.value)
    setIsValid(isValid)
    setErrors(errors)
  }

  return {
    [name + 'Field']: {
      name,
      value,
      rules,
      errors,
      handleOnChange,
      isValid,
      validate: () => {
        const [errors, isValid] = validate({ name, value, rules })
        setErrors(errors)
        setIsValid(isValid)
        return isValid
      },
      setValue: value => (setValue(value))
    }
  }
}

export default useInput
