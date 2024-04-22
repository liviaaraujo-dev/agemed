import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Container, BodyContainer, SidebarContainer } from './styles';
export default function Layout({
  asideData,
  navbarText,
  children
}) {

  return (
    <Container>
      <SidebarContainer>
        <Sidebar asideData={asideData} />
      </SidebarContainer>
      <BodyContainer>
        <Navbar text={navbarText} />
        {children}
      </BodyContainer>
    </Container>
  );
}
