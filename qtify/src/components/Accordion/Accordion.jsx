import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

export default function DisabledAccordion() {
  const { heading, wrapper, accordian, accordianText } = styles;
  return (
    <div className={wrapper}>
      <div>
        <Typography variant="h3" className={heading} margin={3}>
          FAQs
        </Typography>
      </div>
      <Accordion
        className={accordian}
        sx={{
          backgroundColor: "transparent",
          color: "white",
          border: "1px solid white",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: "#34c94b", width: "35px", height: "40px" }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className={accordianText}>
            Is Qtify free to use?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          <Typography className={accordianText}>
            Yes! It is 100% free, and 0% ads!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={accordian}
        sx={{
          backgroundColor: "transparent",
          color: "white",
          border: "1px solid white",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: "#34c94b", width: "35px", height: "40px" }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className={accordianText}>
            Can I download and listen to songs offline?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          <Typography className={accordianText}>
            Sorry, unfortunatly we don't provide the service to dowmload any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
