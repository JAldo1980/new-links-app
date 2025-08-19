import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div classs="wrapper">
        <div class="container">
          <header>
            <img
              src="/public/jene-knight.webp"
              alt="Jene Knight"
              class="main-img"
            />
            <h1>Jene Knight</h1>
            <p>Head of Digital | Extramile Digital</p>
          </header>
          <section class="social-section">
            <div>
              <a href="#" class="hyper-link-el">
                LinkedIn
              </a>
            </div>
            <div>
              <a href="#" class="hyper-link-el">
                Instagram
              </a>
            </div>
            <div>
              <a href="#" class="hyper-link-el">
                Website
              </a>
            </div>
            <div>
              <a href="#" class="hyper-link-el">
                Email
              </a>
            </div>
          </section>
          <main>
            <div class=""></div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
