import "../../styles/App.css";
import Routes from "./Routes";
import { Helmet } from 'react-helmet';
 
function App() {
  return (
    <div className="app_div">
      <Helmet>
        <title>Kasa - Réservation immobilière</title>
      </Helmet>
      <Routes />
    </div>
  );
}

export default App;