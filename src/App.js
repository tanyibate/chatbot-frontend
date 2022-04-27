import ChatBot from "./components/chatbot/ChatBot";
import LoginModal from "./components/login-modal/LoginModal";
import "./App.scss";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import BurgerMenu from "./components/burgerMenu/BurgerMenu";

function App() {
  const [modal, setModal] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <div className="App">
      {modal && <LoginModal setModal={setModal} />}
      <div className="header">
        <img src="images/img-tea-cozy-logo.png" alt="" />
        <div className="nav">
          {isDesktopOrLaptop && (
            <>
              <p>
                <a href="#mission">Mission</a>
              </p>
              <p>
                <a href="#month">Featured Tea</a>
              </p>
              <p>
                <a href="#location">Locations</a>
              </p>
              <p
                onClick={() => {
                  setModal(true);
                }}
                style={{ cursor: "pointer" }}
                href="#"
              >
                Log In
              </p>
            </>
          )}
          {!isDesktopOrLaptop && (
            <BurgerMenu
              {...{
                setBurgerMenuActive: setBurgerMenuActive,
                burgerMenuActive: burgerMenuActive,
                setModalActive: setModal,
              }}
            />
          )}
        </div>
      </div>
      <div className="main">
        <div className="mission" id="mission">
          <div className="text">
            <h2>Our Mission</h2>
            <h4>
              Handpicked, Artisanally Curated, Free Range, Sustainable, Small
              Batch, Fair Trade, Organic Tea
            </h4>
          </div>
        </div>
        <section id="month">
          <h2>Tea of the month</h2>
          <h5>What's Steeping at The Tea Cozy?</h5>
          <div className="month">
            <div className="item">
              <img src="images/img-bedford-bizarre.jpg" alt="" />
              <h4>Bedford Bizzare Tea</h4>
            </div>
            <div className="item">
              <img src="images/img-myrtle-ave.jpg" alt="" />
              <h4>Myrtle Ave Tea</h4>
            </div>
            <div className="item">
              <img src="images/img-spiced-rum.jpg" alt="" />
              <h4>Spiced Rum Tea</h4>
            </div>
            <div className="item">
              <img src="images/img-berryblitz.jpg" alt="" />
              <h4>Fall Berry Blitz Tea</h4>
            </div>
            <div className="item">
              <img src="images/img-donut.jpg" alt="" />
              <h4>Seasonal Donuts</h4>
            </div>
          </div>
        </section>

        <section className="locations" id="locations">
          <h2>Locations</h2>
          <div className="location" id="location">
            <div className="place">
              <h3>Uptown</h3>
              <p>360 East 4th St</p>
              <p>Suite 108</p>
              <p>Portland, Maine</p>
            </div>
            <div className="place">
              <h3>Downtown</h3>
              <p>384 West 4th St</p>
              <p>Suite 103</p>
              <p>Portland, Maine</p>
            </div>
            <div className="place">
              <h3>South Beach</h3>
              <p>384 Escobar St</p>
              <p>Suite 101</p>
              <p>Miami, Florida</p>
            </div>
          </div>
        </section>
        <section className="footer">
          <h2>Tea Cozy</h2>
          <p>contact@teacozy.com</p>
          <p>028-8765-675</p>
        </section>
        <p id="copyright">copyright© The Tea Cozy 2017</p>
      </div>
      <ChatBot />
    </div>
  );
}

export default App;
