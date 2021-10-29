import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material/";
import PagePilates from "./pages/PagePilates";
import PageProfessores from "./pages/PageProfessores";
import Modalidades from "./components/Modalidades/Modalidades";
import Login from "./components/login/Login";
import SecaoProfessores from "./components/SecaoProfessores/SecaoProfessores"
import Localizacao from "./components/Mapa/Localizacao";
import SectionCall from "./components/CallToAction/SectionCall";
import FooterContainer from "./components/Footer/containers/Footer";
import Formulario from "./components/Formulario/Formulario";
import Slide from "./components/SlidesPrincipais/Slides"
//import styles from "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Container maxWidth="xl">
          <Route exact path="/">
            <Slide />
            <Modalidades />
            <SecaoProfessores />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/modalidades">
            <PagePilates />
          </Route>
          <Route path="/professores">
            <PageProfessores />
          </Route>
          <Route path="/cadastro">
            <Formulario />
          </Route>
          <Localizacao />
          <SectionCall />
          <FooterContainer/>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
