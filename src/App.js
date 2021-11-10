/* React imports */
import { Container } from "@mui/material/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Pages */
import HomeAdmin from "./pages/HomeAdmin";
import PageProfessores from "./pages/Teachers/PageProfessores";
import PagePilates from "./pages/PilatesModalities/PagePilates";

/* Component imports  */
import Login from "./components/login/Login";
import MainMenu from "./components/AppBar/MainMenu";
import Localizacao from "./components/Map/Localization";
import Formulario from "./components/Formulario/Formulario";
import Modalidades from "./components/Modalidades/Modalidades";
import SectionCall from "./components/CallToAction/SectionCall";
import FooterContainer from "./components/Footer/containers/Footer";
import CarouselOfImages from "./components/CarouselOfImages/Carousel";
import SecaoProfessores from "./components/SecaoProfessores/SecaoProfessores";

/* Other imports */
import DataProvider from "./contexts/DataContext";

function App() {
  return (
    <Router>
      <Switch>
        <DataProvider>
          {/* Main routes */}
          <Route exact path="/">
            <MainMenu />
            <CarouselOfImages />
            <Container maxWidth="xl">
              <Modalidades />
              <SecaoProfessores />
              <Localizacao />
              <SectionCall />
            </Container>
            <FooterContainer />
          </Route>
          {/* Route to admin */}
          <Route path="/admin">
            <HomeAdmin />
          </Route>
          {/* Route to registration */}
          <Route path="/cadastro">
            <Formulario />
          </Route>
          {/* Route to the modalities */}
          <Route path="/modalidades">
            <PagePilates />
          </Route>
          {/* Route for teachers */}
          <Route path="/professores">
            <PageProfessores />
          </Route>
        </DataProvider>
      </Switch>
      {/* Route to login */}
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
