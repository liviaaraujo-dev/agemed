import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input'
import Button from '../../components/Button'
import Text from '../../components/Text'
import {
  Container,
  TitleContainer,
  BodyContainer,
  DataContainer,
  BodyBlurContainer,
} from './styles';

export default function Main() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/dashboard")
  }

  return (
    <Container>
      <BodyBlurContainer />
      <BodyContainer>
        <TitleContainer>
          <Text size={'large'} text={"AgeMed"} />
        </TitleContainer>
        <DataContainer>
          <Input placeholder={'Insira seu e-mail'} label={'E-mail'} kind={'transparent'} />
          <Input placeholder={'Insira seu e-mail'} label={'Senha'} kind={'transparent'} />
          <Button label={'Entrar'} onClick={() => handleLoginClick()} />
        </DataContainer>
      </BodyContainer>
    </Container>
  );
}
