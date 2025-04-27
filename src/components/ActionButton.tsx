import { ButtonHTMLAttributes } from 'react'

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  operation: string
}

function ActionButton({ operation, ...props }: ActionButtonProps) {

  return <button {...props} />
}

export default ActionButton
