import React, { useState } from "react";
import axios from "axios";

function Sayari() {
  const [shayari, setShayari] = useState("");
  const [keyword, setKeyword] = useState("");
  const [selectShayari, setSelectShayari] = useState("");

  const generateShayari = () => {
    // Make an API request to the backend with the keyword
    // Receive and set the Shayari in the state
    axios
      .get(`http://localhost:8000/shayari?type=${selectShayari}&keyword=${keyword}`)
      .then((response) => {
        setShayari(response?.data?.shayari);
        console.log("Res" + response?.data?.shayari);
        console.log("clicked Me")
      })
      .catch((error) => {
        console.error("Error generating Shayari:", error);
      });
  };

  return (
    <div className="sayari-page">
      <select
        name=""
        id=""
        className="selectbox"
        value={selectShayari}
        onChange={(e) => setSelectShayari(e.target.value)}
      >
        <option value="" hidden>
          Select Type
        </option>
        <option value="shayari">Shayari</option>
        <option value="joke">Joke</option>
        <option value="story">Story</option>
        <option value="funny">Funny</option>
      </select>
      <input
        type="text"
        placeholder="Enter a keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={generateShayari}>Generate Shayari</button>
      <div>
        <p>{shayari}</p>
      </div>
    </div>
  );
}

export default Sayari;
