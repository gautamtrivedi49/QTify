import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import { fetchNewAlbums } from "./api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
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
  const generateTopALbums = async () => {
    try {
      const data = await fetchNewAlbums();
      setSongsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateTopALbums();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} title="Top Albums" type="album" />
        <Section data={songsData} title="New Albums" type="album" />
      </div>

      
    </div>
  );
};

export default App;
