import { Homepage } from "./pages/Homepage";
import "./styles/index.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BankAccountPage } from "./pages/projects/BankAccountPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    // <BrowserRouter basename={window.location.pathname || ''}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/bank-account-project-page"
            element={<BankAccountPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
