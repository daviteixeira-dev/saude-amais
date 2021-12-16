/* React imports */
import { Container } from "@mui/material/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Pages */
//import HomeAdmin from "./pages/HomeAdmin";
import PageProfessores from "./pages/Teachers/PageProfessores";
import PagePilates from "./pages/PilatesModalities/PagePilates";

/* Component imports  */
import Login from "./components/login/Login";
import MainMenu from "./components/AppBar/MainMenu";
import Localization from "./components/Map/Localization";
import Formulario from "./components/Formulario/Formulario";
import SectionCall from "./components/CallToAction/SectionCall";
import Modalities from "./components/PilatesModalities/Modalities";
import FooterContainer from "./components/Footer/containers/Footer";
import CarouselOfImages from "./components/CarouselOfImages/Carousel";
import ListOfTeachers from "./components/TeachersSection/ListOfTeachers";
//admin
import Layout from "./components/Dashboard/Layout";
import HomeAdmin from "./components/Dashboard/Pages/HomeDashboard"
import ListUser from "./components/Dashboard/Pages/ListUser"

import Teste from "./components/Dashboard/Pages/teste"
//import Dashboard from "./components/Dashboard/Layout_Old";

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
              <Modalities />
              <ListOfTeachers />
              <Localization />
              <SectionCall />
            </Container>
            <FooterContainer />
          </Route>
          {/* Route to admin */}
          <Route path="/admin">
            <Layout>
              <Switch>
                <Route exact path="/home-admin">
                  <HomeAdmin/>
                </Route>
                <Route path="/list-user">
                  <ListUser/>
                </Route>
              </Switch>
            </Layout>
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
