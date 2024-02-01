import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import { fetchNewAlbums } from "./api/api";
import { fetchSongs } from "./api/api";
import DisabledAccordion from "./components/Accordian/Accordian";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const generateSongsData = (value) => {
    if (value === 0) {
      filteredData(songsData);
      return;
    }
  
    const genreMap = {
      1: "rock",
      2: "pop",
      3: "jazz",
      4: "blues",
    };
  
    const selectedGenre = genreMap[value];
  
    if (selectedGenre) {
      const filteredSongs = songsData.filter((song) =>
        song.genre.key.toLowerCase() === selectedGenre
      );
      console.log(`Filtered Songs for ${selectedGenre}:`, filteredSongs);
      filteredData(filteredSongs);
    }
  };
  
  useEffect(() => {
    generateSongsData(value);
  }, [value]);
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
      setNewAlbumsData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    generateTopALbums();
  }, []);
  const generateSongs = async () => {
    try {
      const data = await fetchSongs();
      setSongsData(data);
      setFilteredDataValues(data);
    } catch (error) {
      console.error(error);
    }
  };
  const filteredData = (data) => {
    setFilteredDataValues(data);
  };

  useEffect(() => {
    generateSongs();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} title="Top Albums" type="album" />
        <Section data={newAlbumsData} title="New Albums" type="album" />

        {
          <Section
            data={songsData}
            title="Songs"
            type="song"
            filteredData={filteredData}
            filteredDataValues={filteredDataValues}
            value={value}
            handleChange={handleChange}
          />
        }
      </div>
        <DisabledAccordion />
    </div>
  );
};

export default App;
