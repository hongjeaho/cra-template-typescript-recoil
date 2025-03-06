import TextField from '@mui/material/TextField'
import { type FieldError, type FieldValues, type UseFormRegister } from 'react-hook-form'

interface InputBoxProps<T extends FieldValues> {
  id: string
  label?: string
  type?: string
  disabled?: boolean
  register: UseFormRegister<T>
  error?: FieldError
  placeholder?: string
  rules?: Record<string, any>
}

const InputBox: React.FC<InputBoxProps<any>> = ({ id, label, type = 'text', placeholder, disabled = false, register, error, rules }) => {
  return (
    <>
      <TextField
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        fullWidth
        margin="normal"
        variant="outlined"
        {...register(id, rules)}
        error={error !== undefined}
        helperText={error !== undefined ? error.message : ''}
      />
    </>
  )
}

export default InputBox
