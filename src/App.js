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
          <Container maxWidth="xl">
            <Route path="/admin" component={HomeAdmin} >
              <HomeAdmin />
            </Route>
            <Route exact path="/">
              <Banner />
              <MenuPrincipal />
              {/* <Slide /> */}
              <CarroselDeNoticias />
              <Modalidades />
              <SecaoProfessores />
              <Localizacao />
              <SectionCall />
              <FooterContainer />
            </Route>
            <Route path="/login">
              <Login />
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
          </Container>
        </DataProvider>
      </Switch>
    </Router>
  );
}

export default App;
