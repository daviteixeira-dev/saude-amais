import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@mui/material/";
import PagePilates from "./pages/PagePilates";
import Modalidades from "./components/Modalidades/Modalidades";
//import styles from "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Container maxWidth="lg">
          <Route exact path="/">
            <Modalidades />
          </Route>
          <Route path="/modalidades">
            <PagePilates />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
