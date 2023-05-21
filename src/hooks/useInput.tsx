import React from 'react'

const typeField = {
  email: {
    regex: /^.{2,}$/,
    message: "Por favor, digite duas letras ou mais."
  }
}

export const useInput = () => {
  const [value, setValue] = React.useState<string>('')
  const [error, setError] = React.useState<string>('');

  const validate = (value: string) => {
    if (typeField.email.regex.test(value) === false) setError(typeField.email.message)
    else setError('');
  }

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value)
    if (target.placeholder === "Nome") {
      validate(target.value)
    }
  }

  return (
    { value, onChange, error, setValue }
  )
}