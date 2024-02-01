import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";

const Section = ({ data, title, type, value = 0, handleChange = null }) => {
  const { header, toggleText, cardsWrapper, wrapper } = styles;
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filteredDataValues, setFilteredDataValues] = useState(data);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  useEffect(() => {
    if (type === "song") {
      if (value === 0) {
        setFilteredDataValues(data);
      } else {
        const selectedGenre = ["All", "Rock", "Pop", "Jazz", "Blues"][value];
        const filteredData = data.filter(
          (ele) =>
            ele.genre &&
            ele.genre.key.toLowerCase() === selectedGenre.toLowerCase()
        );
        setFilteredDataValues(filteredData);
      }
    }
  }, [data, type, value]);

  return (
    <>
      <div className={header}>
        <h3>{title}</h3>
        <h4 className={toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse All" : "Show All"}
        </h4>
      </div>
      {(type === "song" || type === "album") && (
        <>
          {type === "song" && (
            <BasicTabs value={value} handleChange={handleChange} />
          )}
          <div className={cardsWrapper}>
            {!carouselToggle ? (
              <div className={wrapper}>
                {filteredDataValues.map((ele) => (
                  <Card key={ele.id} data={ele} type={type} />
                ))}
              </div>
            ) : (
              <Carousel
                data={filteredDataValues}
                renderComponent={(data) => (
                  <Card key={data.id} data={data} type={type} />
                )}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Section;
