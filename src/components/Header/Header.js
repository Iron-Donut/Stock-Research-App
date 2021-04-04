import React, { useState } from 'react';
import { useSelector } from "react-redux";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import './Header.css'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#000000',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: '#ffffff',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#dfdfdf',
  },
  icon: {
    color: '#ffffff',
  },
}));

function Header() {
  const profile = useSelector(state => state.stockInfo.profileInfo);
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="header-container">
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
          aria-controls="header-content"
          id="header"
          className={classes.root}
        >
          <Typography className={classes.heading}>{profile.Name}</Typography>
          <Typography className={classes.secondaryHeading}>Industry: {profile.Industry}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {profile.Description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Header;