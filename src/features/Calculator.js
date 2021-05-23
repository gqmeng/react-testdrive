import React, { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  inputrow: {
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    alignItems: "center",
    padding: `${theme.spacing(1)}px ${theme.spacing(0)}px`,
  },
  inputcol: {
    width: '100%',
    textAlign:'center'
  },
  toggle: {
    width:'50%',
    backgroundColor: theme.palette.secondary.main,
    border: '1px solid #ccc',
    margin: '0px'
  },
  resulttext: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: 'center',
    color: '#fff',
    padding:  theme.spacing(3),
    // transition: 'opacity 1s'
  },
  input: {
    backgroundColor: theme.palette.secondary.main,
  },
  inputField: {
    backgroundColor: '#fff',
  }
}));

export function Calculator() {

  const patientFeatures = useSelector(state=>state.patientFeatures);
  const [values, setValues] = useState(patientFeatures);

  const classes = useStyles();

  const [result, setResult] = useState({
    score: 0,
    severity: ''
  })

  const [inputReady, setInputReady] =useState(false)
  const [resultReady, setResultReady] =useState(false)

  const handleToggle = (event, newValue) => {
    setResultReady(false)
    setValues({ ...values, sex: newValue });
  };

  const handleChange = (prop) => (event) => {
    setResultReady(false)
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleAgeChange = (prop) => (event) => {
    setResultReady(false)
    if(event.target.value==='' || /^[0-9\b]+$/.test(event.target.value)){
      setValues({ ...values, [prop]: event.target.value });
    } else {
      return;
    }
  };

  const calculate = ()=>{
    let sum = 0
    if(values.sex==='male'){
      sum++
    }
    if(values.age>40){
      sum++
    }
    if(values.weight>60){
      sum++
    }
    if(values.creatinine>0.7){
      sum++
    }
    if(values.height>160){
      sum++
    }
    setResult({ ...result, score: sum, severity: (sum>3) ? 'high':'low' });
    setResultReady(true);
  }


  useEffect(() => {
    let ready = true
    Object.keys(values).forEach(e=>{
      ready = ready && values[e]!==''
    })
    setInputReady(ready)
  },[values]);

 return (
  <div className={classes.root}>
  <Grid container justify="center" alignItems="center">

    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>Sex</Paper>
        </Grid>
        <Grid item xs={6}>
          <ToggleButtonGroup
            value={values.sex}
            exclusive
            onChange={handleToggle}
            aria-label="sex"
            className={classes.inputcol}
          >
            <ToggleButton className={classes.toggle} m={0} value="female" aria-label="left aligned">Female</ToggleButton>
            <ToggleButton className={classes.toggle} m={0}  value="male" aria-label="centered">Male</ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>Age</Paper>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={clsx(classes.margin, classes.textField, classes.input)} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-age"
              type='tel'
              value={values.age}
              onChange={handleAgeChange('age')}
              endAdornment={<InputAdornment position="end">years</InputAdornment>}
              aria-describedby="outlined-age-helper-text"
              labelWidth={0}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow}>
    <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>Weight</Paper>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={clsx(classes.margin, classes.textField, classes.input)} variant="outlined">
            <OutlinedInput
              type='number'
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-age-helper-text"
              inputProps={{'aria-label': 'weight'}}
              labelWidth={0}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow}>
    <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}>Creatinine</Paper>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth className={clsx(classes.margin, classes.textField, classes.input)} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-creatinine"
              type='number'
              value={values.creatinine}
              onChange={handleChange('creatinine')}
              endAdornment={<InputAdornment position="end">mg/dL</InputAdornment>}
              aria-describedby="outlined-Creatinine-helper-text"
              inputProps={{'aria-label': 'creatinine'}}
              labelWidth={0}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow} >
    <Grid container >
        <Grid item xs={6}>
          <Paper className={classes.paper}  elevation={0}>Height</Paper>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth className={clsx(classes.margin, classes.textField, classes.input)} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-height"
            type='number'
            value={values.height}
            onChange={handleChange('height')}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            aria-describedby="outlined-age-helper-text"
            inputProps={{'aria-label': 'height'}}
            labelWidth={0}
          />
        </FormControl>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid container justify="center" alignItems="center">
    <Grid item xs={12} sm={10} md={8} lg={8} className={classes.inputrow}>
      <Button fullWidth color='primary' variant="contained" disabled={!inputReady}  onClick={calculate}>Calculate</Button>
    </Grid>
  </Grid>
  {resultReady &&
    <Grid container justify="center" alignItems="center">
      <Grid item xs={12} sm={10} md={8} lg={8}>
        <Paper className={clsx(classes.paper, classes.resulttext)} elevation={0}>Result: {result.score}, {result.severity}</Paper>
      </Grid>
    </Grid>
  }
</div>
    );
}
