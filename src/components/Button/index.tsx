import { memo } from "react"
import { Container } from "./styles"

interface ButtonProps extends  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
}

export const Button = memo(({ onClick, text, ...props } : ButtonProps) => {
  return (
      <Container type="button" onClick={onClick} {...props}>
            <span>
                {text}
            </span>
      </Container>
  )
})
