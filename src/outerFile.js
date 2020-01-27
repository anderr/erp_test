const flags = {
  addition: true,
  subtraction: true,
  multiplication: true,
  division: true
}

const checkErrors = function(method, value1, value2) {
  let errors = {
    errorType: 'none', // critical - есть ошибка, warning - предупреждение, none - все чикаго, друг
    msg: ''
  }

  if (value1 === '' || value2 === '') {
    errors.errorType = 'critical'
    errors.msg = 'Заполните оба поля'
  } else if (isNaN(value1) || isNaN(value2)) {
    errors.errorType = 'critical'
    errors.msg = 'Вы ввели совсем не числа'
  } else if (method === 'multiplication' || method === 'division') {
    if (method === 'multiplication' && (value1 == 0 || value2 == 0)) {
      errors.errorType = 'warning'
      errors.msg = 'Ты же итак знаешь что будет если умножить на 0'
    } else if (method === 'division' && value2 == 0) {
      errors.errorType = 'critical'
      errors.msg = 'Делить на 0 нельзя :\'('
    }
  }

  return errors
}

const addition = function(value1, value2) {
  return parseFloat(value1) + parseFloat(value2)
}

const subtraction = function(value1, value2) {
  return parseFloat(value1) - parseFloat(value2)
}

const multiplication = function(value1, value2) {
  return parseFloat(value1) * parseFloat(value2)
}

const division = function(value1, value2) {
  return parseFloat(value1) / parseFloat(value2)
}

export {
  checkErrors,
  flags,
  addition,
  subtraction,
  multiplication,
  division
}
