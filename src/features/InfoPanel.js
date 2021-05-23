import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExtraInfo from '../resource/extraInfo.json'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width:'100%',
    textAlign:'left'
  },
  tabs: {
    width:'50%'
  },
  tabtitle: {
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: '5px'
  },
  tabtext: {
    textAlign: 'left'
  },
  panelheader: {
    // backgroundColor: theme.palette.primary.main
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    // transform: 'scale(0.8)',
  },
}));


export function InfoPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const bull = <span className={classes.bullet}>•</span>;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
  <Grid container justify="center" alignItems="center">
    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow}>
    <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.panelheader} label="When To Use" {...a11yProps(0)} />
          <Tab className={classes.panelheader}  label="Pearls/Pitfalls" {...a11yProps(1)} />
         </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="body1">
          {bull}{ExtraInfo.whenToUse[0]}
        </Typography>
        <Typography variant="body1">
          {bull}{ExtraInfo.whenToUse[1]}
        </Typography>
        
 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6" >
          {ExtraInfo.pearlsPitfalls.title}
        </Typography>
        <Typography variant="body1" >
          {ExtraInfo.pearlsPitfalls.text}
        </Typography>
      
      </TabPanel>
</Grid>
</Grid>
</div>
    );
}
