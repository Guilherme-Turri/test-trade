import * as Styled from './styles'

export interface SubmitProps {
  children: React.ReactNode,
  userName?: string,
  apiKey?: string,
  error?: string,
  name?: string,
}

export const SubmitButton = ({ children, userName, apiKey, error, name }: SubmitProps) => {
  const values = [userName, apiKey, name].every((e) => (e ?? 'a').length > 0);
  const enableColor = [values, error === '',].every((e) => e === true)
  return (
    <Styled.Container enableColor={enableColor}>
      {children}
    </Styled.Container>
  )
} 