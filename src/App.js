import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material/";
import PagePilates from "./pages/PagePilates";
import PageProfessores from "./pages/PageProfessores";
import Modalidades from "./components/Modalidades/Modalidades";
import SecaoProfessores from "./components/SecaoProfessores/SecaoProfessores"
import Localizacao from "./components/Mapa/Localizacao";
import SectionCall from "./components/CallToAction/SectionCall";
import FooterContainer from "./components/Footer/containers/Footer";
//import Formulario from "./components/Formulario/Formulario";
//import styles from "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Container maxWidth="lg">
          <Route exact path="/">
            <Modalidades />
            <SecaoProfessores />
          </Route>
          {/*<Formulario />*/}
          <Route path="/modalidades">
            <PagePilates />
          </Route>
          <Route path="/professores">
            <PageProfessores />
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
