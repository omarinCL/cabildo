export function validateAll (fields) {
  return fields.every(field => Object.keys(field.errors).length === 0)
}

export function validate (field) {
  const errors = _validate(field)
  const isValid = Object.keys(errors).length === 0
  return [errors, isValid]
}

function _validate (field) {
  const errors = {}
  if (!field.value && field.rules.required) {
    errors.required = `El campo ${field.name} es obligatorio`
  }

  if (field.rules.email && !/\S+@\S+\.\S+/.test(field.value) && field.value) {
    errors.email = 'Dirección de correo electrónico inválida'
  }

  if (field.rules.minLength && field.value.length < field.rules.minLength) {
    errors.password = `El campo ${field.name} debe tener ${field.rules.minLength} o más caracteres`
  }
  return errors
}
