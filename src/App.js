import React, { useContext } from "react";
import classes from "./App.module.css";
import Card from "./UI/Card";
import Modal from "./UI/Modal";
import AppContext from "./store/appContext";
import LoadingIcons from "react-loading-icons";
import Navbar from "./components/Navbar/index";
import "./components/Navbar/Navbar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import References from './pages/References';
import Pregnancy from './pages/Pregnancy';
import DrugInteractionSearch from './pages/DrugInteractionSearch';

function App() {
  const ctx = useContext(AppContext);

  return (
    <div className={classes.wrapper}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/pregnancy" element={Pregnancy()} />
          <Route path="/references" element={References()} />
          <Route path="/interactions" element={DrugInteractionSearch()} />
        </Routes>
      </Router>
      <Card>
        {ctx.isLoading && (
          <LoadingIcons.Oval
            stroke="Var(--color-primary)"
            strokeOpacity={0.5}
            speed={1}
            strokeWidth="5"
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              zIndex: "100",
              transform: "translateX(-50%)",
            }}
          />
        )}
      </Card>
      {ctx.modal && (
        <Modal title={ctx.modal.title} onClick={ctx.hideModal}>
          <ul>
            {ctx.modal.message.map((item) => {
              return <li key={ctx.modal.message.indexOf(item)}>{item}</li>;
            })}
          </ul>
          {ctx.modal.content === "interactions" && (
            <p style={{ color: "var(--color-grey-700)", marginTop: "1rem" }}>
              <strong>Answers at the speed of life" </strong>
            </p>
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
