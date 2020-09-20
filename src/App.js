import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./styles.css";
import axios from "axios"; 

const App = () => {
  const [jokes, seJoke] = useState("loading..");
  const [fetching, setFetching] = useState(false);

  useEffect(
    function () {
      async function getData() {
        const res = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json"
          }
        });
        // console.log(res.data);
        seJoke(res.data.joke);
      }
      getData();
    },
    [fetching]
  );

  //getdata();

  return (
    <>
      <h1>Do-Not-Laugh 😄</h1>

      <div className="card area mt-5   ">
        <div className="card-body">
          <h2>{jokes}</h2>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setFetching(!fetching)}
        >
          Get another
        </Button>
      </div>
      <p>with ❤️ Avisek Sahoo</p>
    </>
  );
};
export default App;
