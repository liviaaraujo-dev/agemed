import Main from "./pages/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/Default'
import Patient from "./pages/Patient";
import Clinic from "./pages/Clinic";
import {
  BuildingIcon,
  LibIcon,
  HomeIcon,
  PatientIcon,
  PauseIcon,
} from './components/Icons'

export default function App() {
  function RenderPage(page, navbarText) {
    return (
      <DefaultLayout
        asideData={[
          {
            label: 'Inicio',
            redirectTo: '/dashboard',
            icon: <HomeIcon size={24} />
          },
          {
            label: 'Cadastrar paciente',
            redirectTo: '/patient',
            icon: <PatientIcon size={24} />
          },
          {
            label: 'Marcar consulta',
            redirectTo: '/appointment',
            icon: <LibIcon size={24} />
          },
          {
            label: 'Consultas',
            redirectTo: '/appointments',
            icon: <PauseIcon size={24} />
          },
          {
            label: 'Cadastrar clínica',
            redirectTo: '/clinic',
            icon: <BuildingIcon size={24} />
          },
        ]}
        navbarText={navbarText}
      >
        {page}
      </DefaultLayout>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/patient" element={RenderPage(<Patient />, "Cadastro de pacientes")} />
        <Route path="/clinic" element={RenderPage(<Clinic />, "Cadastro de clínicas")} />
      </Routes>
    </BrowserRouter>
  );
}
