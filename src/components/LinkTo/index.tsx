import * as Styled from './styles'
interface LinkToProps {
  children: React.ReactNode,
  href: string
}
export const LinkTo = ({ children, href }: LinkToProps) => {
  return (
    <Styled.Container href={href} target='_blank'>
      {children}
    </Styled.Container>
  )
}