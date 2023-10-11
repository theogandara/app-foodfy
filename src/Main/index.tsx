import { Button } from '../components/Button/button';
import { Categories } from '../components/Categories/Categories';
import { Header } from '../components/Header/header';
import { Menu } from '../components/Menu/Menu';
import { SafeArea } from '../components/SafeArea';
import * as S from './styles';

export default function Main() {
  return (
    <>
      <SafeArea>
        <Header />

        <S.CategoriesContainer>
          <Categories />
        </S.CategoriesContainer>

        <S.MenuContainer>
          <Menu />
        </S.MenuContainer>
      </SafeArea>

      <S.Footer>
        <S.FooterContainer>
          <Button onPress={() => alert('teste')}>Novo Pedido</Button>
        </S.FooterContainer>
      </S.Footer>
    </>
  );
}
