import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/homepage";
import SobreMi from './pages/sobre-mi';
// eslint-disable-next-line no-unused-vars
import Certificados from './pages/certificados';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path='/certificados' element={<Certificados />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


