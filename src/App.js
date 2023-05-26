import "./App.css";
import Card from "./components/card/card";
import { useState } from "react";

function App() {
  const [openCard, setOpencard] = useState(false);
  const [emptyWarn, setemptyWarn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [encoded, setEncoded] = useState("");
  const [requestmade, setrequestmade] = useState(false);

  const handleInput = event => {
    const { value } = event.target;
    setinputValue(value);
    const encodedText = encodeURIComponent(value);
    setEncoded(encodedText);
  };

  const handleemptyInput = () => {
    setemptyWarn(!emptyWarn);
    setLoading(false);
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleSearch = () => {
    handleLoading();
    if (encoded !== "") {
      setemptyWarn(false);
      const fetchData = async fooditem => {
        const url =
          "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=" +
          fooditem;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "aa7fbd4779msh469601fbb75658bp10ad88jsnf61fc939c2a6",
            "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setData(result);
          setOpencard(true);
          setLoading(false);
          setrequestmade(true);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData(encoded);
    } else handleemptyInput();
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="left-div">
            <div className="left-container">
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
                <input
                  className="input-box"
                  placeholder="100g of Paneer"
                  value={inputValue}
                  onChange={handleInput}
                />
                <button className="search-btn" onClick={handleSearch}>
                  <img src="./images/search.png" alt="search" />
                </button>
              </div>

              {emptyWarn && (
                <div className="emptywarn">
                  Enter the food name of your choice!
                </div>
              )}

              {loading && <div className="loading">Loading...</div>}

              <div className="card-container">
                {openCard && requestmade && data.length > 0 ? (
                  <Card
                    name={data[0].name}
                    serve_size={data[0].serving_size_g}
                    calories={data[0].calories}
                    fat={data[0].fat_total_g}
                    saturatedfat={data[0].fat_saturated_g}
                    cholesterol={data[0].cholesterol_mg}
                    protein={data[0].protein_g}
                    carbs={data[0].carbohydrates_total_g}
                    fiber={data[0].fiber_g}
                    sugar={data[0].sugar_g}
                  />
                ) : requestmade ? (
                  <div className="errormsg">
                    Sorry our database doesn't have this food item! Try
                    something else!
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
