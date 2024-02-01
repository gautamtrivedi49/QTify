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
  filteredData = null,
  filteredDataValues = [],
}) => {
  const { header, toggleText, cardsWrapper, wrapper } = styles;
  const [carouselToggle, setCarouselToggel] = useState(true);
  const handleToggle = () => {
    setCarouselToggel(!carouselToggle);
  };
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
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Section;
