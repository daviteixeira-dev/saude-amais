import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material/";

import PagePilates from "./pages/PagePilates";
import PageProfessores from "./pages/PageProfessores";

import Modalidades from "./components/Modalidades/Modalidades";
import Login from "./components/login/Login";
import SecaoProfessores from "./components/SecaoProfessores/SecaoProfessores";
import Localizacao from "./components/Mapa/Localizacao";
import SectionCall from "./components/CallToAction/SectionCall";
import FooterContainer from "./components/footer/containers/Footer";
import Formulario from "./components/Formulario/Formulario";
import MenuPrincipal from "./components/AppBar/MenuPrincipal";
import MenuPrincipalNew from "./components/AppBar/MenuPrincipalNew";
import Banner from "./components/Banner/Banner";
import DataProvider from "./contexts/DataContext";
import CarroselDeNoticias from "./components/Carousel";

import HomeAdmin from "./pages/HomeAdmin";

//import styles from "./index.css";
//import Slide from "./components/SlidesPrincipais/Slides";
// <Route path="/admin" component={HomeAdmin} />

function App() {
  return (
    <Router>
      <Switch>
        <DataProvider>
            <Route path="/admin" component={HomeAdmin} >
              <HomeAdmin />
            </Route>
            <Route exact path="/">
            {/* <Banner/> */}
              <MenuPrincipalNew />
              {/* <Slide /> */}
              <CarroselDeNoticias />
              <Container maxWidth="xl" >
                <Modalidades />
                <SecaoProfessores />
                <Localizacao />
                <SectionCall />
              </Container>
              <FooterContainer />
            </Route>
            
            <Route path="/cadastro">
              <Formulario />
            </Route>
            <Route path="/modalidades">
              <PagePilates />
            </Route>
            <Route path="/professores">
              <PageProfessores />
            </Route>
        </DataProvider>
      </Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
