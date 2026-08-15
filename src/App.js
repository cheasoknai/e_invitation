import "./App.css";
import "./components/MainContainer.css";
import MainContainer from "./components/MainContainer";
import WelcomeScreen from "./components/WelcomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="bg-vdoplay"
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <video src="SCR003.webm" autoPlay muted width="450px"></video>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/home" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
