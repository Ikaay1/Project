import React, { useState, useEffect } from "react";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";
import axios from "axios";

const Home = () => {
  const [pin, setPin] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=odxGypsWxIxRce1LCWZDgHSYxwlDAMTqnOjRMPZb"
      )
      .then((data) => {
        setPin(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Spinner message={"Please wait"} />;
  }
  return <div>{pin.copyright && <MasonryLayout pin={pin} />}</div>;
};

export default Home;
