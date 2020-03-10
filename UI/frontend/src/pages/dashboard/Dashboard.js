import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import EventIcon from "@material-ui/icons/Event";
import AddIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Accessibility from "@material-ui/icons/Accessibility";
import CategoryIcon from "@material-ui/icons/Category";
import SaveIcon from "@material-ui/icons/Save";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import EventDetail from "../../components/Tasks/EventDetail.js";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardFooter from "../../components/Card/CardFooter.js";
import HeatMap from "../../components/DashBoard/HeatMap.js";

// additional addins
import { VictoryPie } from "victory";
import TablePagination from "@material-ui/core/TablePagination";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

import pdf_file from '../../assets/pdf/event-report.pdf';

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className="container">
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <EventIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Average Number of events</p>
              <h3 className={classes.cardTitle}>24</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AddIcon />
                Calculated per year
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <PeopleIcon />
              </CardIcon>
              <p className={classes.cardCategory}>
                Median increase in participants
              </p>
              <h3 className={classes.cardTitle}>98</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AddIcon />
                Calculated per year
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Most common age group</p>
              <h3 className={classes.cardTitle}>25-34</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <WorkIcon />
                Volunteered for events under organization
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* End of First Row */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardIcon color="info">
              <Icon>
                Event details | Age group breakdown | Gender distribution
              </Icon>
            </CardIcon>
            <div className={classes.testMiddleRow}>
              <div className={classes.testMiddleRowContent}>
                <EventDetail />
                <TablePagination
                  component="nav"
                  page={0}
                  labelRowsPerPage={"One event display"}
                  rowsPerPage={10}
                  rowsPerPageOptions={[2]}
                  count={10}
                  onChangePage={console.log}
                />
              </div>
              <div className={classes.testMiddleRowContent}>
                <VictoryPie
                  colorScale={["#3387AF", "#3387E5", "#83D7FF"]}
                  data={[
                    { x: "25-34", y: 60 },
                    { x: "35-54", y: 25 },
                    { x: "16-24", y: 15 }
                  ]}
                />
              </div>
              <div className={classes.testMiddleRowContent}>
                <VictoryPie
                  colorScale={["#FFB500", "#FF3600"]}
                  data={[{ x: "Male", y: 35 }, { x: "Female", y: 65 }]}
                />
              </div>
            </div>
          </Card>
        </GridItem>
      </GridContainer>
      {/* End of Second Row */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <HeatMap />
        </GridItem>
      </GridContainer>

      {/* End of Third Row */}
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Location
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                defaultValue="Hougang"
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Minimum number of volunteers"
              defaultValue="120"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PeopleIcon />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Category"
              defaultValue="Pets"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CategoryIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button variant="contained" size="small" className={classes.button}>
              <SaveIcon />
              <Link to={pdf_file} target="_blank" download>Save As PDF{" "}</Link>
            </Button>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <PeopleIcon />
              </CardIcon>
              <p className={classes.cardCategory}>
                Predicted number of volunteers
              </p>
              <h3 className={classes.cardTitle}>100</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <AddIcon />
                Event prediction
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Predicted age group</p>
              <h3 className={classes.cardTitle}>16-24</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <WorkIcon />
                Participants for the event
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
