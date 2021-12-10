import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { React, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginLeft: "Auto",
  },
});

function Header() {
  const classes = useStyles();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Typography variant="h6">Mind Techno Systems</Typography>
        <Tabs
          className={classes.container}
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Services" />
          <Tab label="About" />
          <Tab label="About" />
          <Tab icon={<SearchIcon />} />
          <Tab icon={<AccountCircleIcon />} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
