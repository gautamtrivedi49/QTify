import React from "react";
import styles from "./Section.module.css";
import { useState } from "react";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({
  data,
  title,
  type,
  value = 0,
  handleChange = null,
}) => {
  const { header, toggleText, cardsWrapper, wrapper } = styles;
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const filterDataByTab = (tabIndex) => {
    console.log("Data:", data);
    if (tabIndex === 0) {
      return data; // Show all data for "All" tab
    } else {
      const key = ["", "rock", "pop", "jazz", "blues"][tabIndex];
      console.log("Key:", key);
      const filtered = data.filter((ele) => ele.genre && ele.genre.key === key);
      console.log("Filtered Data:", filtered);
      return filtered;
    }
  };
  

  const filteredData = filterDataByTab(value);

  return (
    <>
      <div className={header}>
        <h3>{title}</h3>
        <h4 className={toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={cardsWrapper}>
          {!carouselToggle ? (
            <div className={wrapper}>
              {filteredData.map((ele) => (
                <Card key={ele.id} data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card key={data.id} data={data} type={type} />}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Section;
