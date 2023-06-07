import { useSelector } from 'react-redux';
import { TextComponent } from '../../components/TextComponent'
import { RootState } from '../../storage/store';
import * as Styled from './styles'
import { Logout } from '../../UI/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { unsetUser } from '../../storage/user/user'

export const Header = () => {

  const { user } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(unsetUser())
    navigate('/')
  }
  return (
    <Styled.Container data-testid="HeaderContainer">
      <TextComponent>Olá, {user?.name}.</TextComponent>
      <Styled.Img onClick={handleLogout}><Logout /></Styled.Img>
    </Styled.Container>
  )
}