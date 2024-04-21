import BlurContainerComponent from '../../components/BlurContainer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import {
  Container, BodyContainer, FormContainer,
  FormTitleContainer,
  FormInputsContainer,
  FormDoubleInputContainer,
  FormButtonContainer,
} from './styles';
export default function Patient() {

  return (
    <Container>
      <BodyContainer>
        <BlurContainerComponent>
          <FormContainer>
            <FormTitleContainer>
              <Text text={"Preencha o formulário"} size={"medium"} />
            </FormTitleContainer>
            <Input label={"Nome completo"} />
            <Input label={"E-mail"} />
            <Input label={"Número"} />
            <Input label={"CPF"} />
            <FormDoubleInputContainer>
              <Input label={"Data de nascimento"} type="date" />
              <Input label={"Sexo"} />
            </FormDoubleInputContainer>
            <Input label={"Endereço"} />
            <Button label={"Cadastrar"} />
          </FormContainer>
        </BlurContainerComponent>
      </BodyContainer>
    </Container>
  );
}
