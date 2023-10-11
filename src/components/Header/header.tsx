import { Text } from '../Text';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <Text size={14} opacity={0.9}>
        Bem vindo(a) ao
      </Text>
      <Text size={24} weight="700">
        FOOD
        <Text size={24}>FY</Text>
      </Text>
    </S.Container>
  );
}
