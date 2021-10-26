import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";
import PagePilates from "./components/pages/home/PagePilates";
import Modalidades from "./components/Modalidades/Modalidades";
import FooterContainer from "./containers/footer";
import Alunos from "./components/pages/home/formAlunos/propAlunos";
//import styles from "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Container maxWidth="lg">
          <Route exact path="/">
            <Modalidades />
          </Route>
          <Alunos />
          <Route path="/modalidades">
            <PagePilates />
          </Route>
          <FooterContainer />
        </Container>
      </Switch>
    </Router>

  );
}

export default App;
