import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import styles from "./App.module.css";

const App = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const [filterDataValues, setFilterDataValues] = useState([]); // Add missing state variable

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      setFilterDataValues(songsData);
      return;
    } else {
      key = ["", "rock", "pop", "jazz", "blues"][value];
    }

    const res = songsData.filter((ele) => ele.genre && ele.genre.key === key);
    setFilterDataValues(res);
  };

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topAlbums = await fetchTopAlbums();
        setTopAlbumsData(topAlbums);

        const newAlbums = await fetchNewAlbums();
        setNewAlbumsData(newAlbums);

        const songs = await fetchSongs();
        setSongsData(songs);
        setFilterDataValues(songs); // Initialize filterDataValues with all songs
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <Section data={topAlbumsData} title="Top Albums" type="album" />
        <Section data={newAlbumsData} title="New Albums" type="album" />
        <Section
          data={songsData}
          title="Songs"
          type="song"
          filterDataValues={filterDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default App;
