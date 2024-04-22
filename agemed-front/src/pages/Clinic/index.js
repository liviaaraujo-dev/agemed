import { useState } from 'react';
import BlurContainerComponent from '../../components/BlurContainer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import {
  Container, BodyContainer, FormContainer,
  FormTitleContainer,FormButtonContainer
} from './styles';
export default function Clinic() {

  const [name, setName] = useState('');
  const [specialities, setSpecialities] = useState('');
  const [crm, setCrm] = useState('');
  const [cpf, setCpf] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  function handleSaveClick() {
    const form = {
      name,
      specialities,
      crm,
      cpf,
      contact,
      address,
    }
    console.log(form)
  }
  
  return (
    <Container>
      <BodyContainer>
        <BlurContainerComponent>
          <FormContainer>
            <FormTitleContainer>
              <Text text={"Preencha o formulário"} size={"medium"} />
            </FormTitleContainer>
            <Input label={"Nome"} onChange={(e) => setName(e.target.value)} />
            <Input label={"Especialidades"} onChange={(e) => setSpecialities(e.target.value)}/>
            <Input label={"CRM"} onChange={(e) => setCrm(e.target.value)}/>
            <Input label={"CPF"} onChange={(e) => setCpf(e.target.value)}/>
            <Input label={"Contato"} onChange={(e) => setContact(e.target.value)}/>
            <Input label={"Endereço"} onChange={(e) => setAddress(e.target.value)}/>
            <FormButtonContainer>
              <Button label={"Cadastrar"} onClick={() => handleSaveClick()} />
            </FormButtonContainer>
          </FormContainer>
        </BlurContainerComponent>
      </BodyContainer>
    </Container>
  );
}
