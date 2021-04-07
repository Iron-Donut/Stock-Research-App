import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, InputBase, Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#230f41',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function PrimarySearchAppBar({ setStockTicker }) {
  const [userSearch, setUserSearch] = useState('');
  const classes = useStyles();

  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      setStockTicker(userSearch)
    }
  }

  const handleChange = (e) => {
    setUserSearch(e.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6" noWrap>
            Stock Look-Up
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}