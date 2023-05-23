import "../../styles/App.css";
import Routes from "./Routes";
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";
import Footer from '../../components/Footer';
 
function App() {
  return (
    <div className="app_div">
      <Header />
      <Helmet>
        <title>Kasa - Réservation immobilière</title>
      </Helmet>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;