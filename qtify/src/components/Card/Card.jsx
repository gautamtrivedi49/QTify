import { Tooltip, Chip } from "@mui/material";
import React from "react";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const { wrapper, card, chip, titleWrapper, banner, pill } = styles;
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <>
            <Tooltip title={`${songs.length} songs`} placeholder="top" arrow>
              <div className={wrapper}>
                <div className={card}>
                  <img src={image} alt="album" />
                  <div className={banner}>
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className={chip}
                    />
                  </div>
                </div>
                <div className={titleWrapper}>
                  <p>{title}</p>
                </div>
              </div>
            </Tooltip>
          </>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <>
            <div className={wrapper}>
              <div className={card}>
                <img src={image} alt="song" />
                <div className={banner}>
                  <div className={pill}>
                    <p>{likes} Likes</p>
                  </div>
                </div>
              </div>
              <div className={titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </>
        );
      }
      default: {
        return <></>;
      }
    }
  };

  // Call the getCard function and return its result
  return getCard(type);
};

export default Card;
