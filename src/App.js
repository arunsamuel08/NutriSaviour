import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="left-div">
            <div className="header">
              <div className="main-head">
                <img src="./images/health.png" alt="health" />
              </div>
              <div className="sub-head">
                <h1>NutriSaviour</h1>
                <p>Elevate your plate with smart nutrition insights.</p>
              </div>
            </div>

            <div className="search-cont">
              <input className="input-box" placeholder="100 gm of Paneer" />
              <button className="search-btn">
                <img src="./images/search.png" alt="search" />
              </button>
            </div>
          </div>
          <div className="right-div"></div>
        </div>
      </div>
    </>
  );
}

export default App;
