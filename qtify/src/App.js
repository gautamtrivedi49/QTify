import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import { fetchNewAlbums } from "./api/api";
import { fetchSongs } from "./api/api";
import DisabledAccordion from "./components/Accordion/Accordion";
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
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((ele) => ele.genre.key.toLowerCase() === key);
    filteredData(res);
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
