import './App.css';
import './bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/homepage";
import SearchAppBar from './pages/sobre-mi';
// eslint-disable-next-line no-unused-vars
import SearchAppBar2 from './pages/certificados';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mi" element={<SearchAppBar />} />
            <Route path='/certificados' element={<SearchAppBar2 />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


