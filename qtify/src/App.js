import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import Card from "./components/Card/Card";
import Section from "./components/Section/Section";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateTopAlbums();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* {topAlbumsData.map((topAlbum) => (
        <Card data={topAlbum} type="album" key={topAlbum.id} />
      ))} */}
      <Section data={topAlbumsData} title={"Top Albums"} type="album" />
     
    </div>
  );
};

export default App;
