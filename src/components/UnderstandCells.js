import React from 'react'
import { makeStyles, Tabs, Tab } from '@material-ui/core'
import '../App.css'
import AnimalSvg from './svg/celulaAnimal.svg'
import VegetalSvg from './svg/celulaVegetal.svg'
import CellPanel from './CellPanel'
import ProcarionteSvg from './svg/celulaProcarionte.svg'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function UnderstandCells() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    function handleChange(newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Célula Animal" {...a11yProps(0)} />
                <Tab label="Célula Vegetal" {...a11yProps(1)} />
                <Tab label="Célula Procarionte" {...a11yProps(2)} />
            </Tabs>

            <CellPanel value={value} name={'Célula Animal'} img={AnimalSvg} index={0}>
                
            </CellPanel>
            <CellPanel value={value} name={'Célula Vegetal'} img={VegetalSvg} index={1}>

            </CellPanel>
            <CellPanel value={value} name={'Célula Procarionte'} img={ProcarionteSvg} index={2}>

            </CellPanel>
        </div >
    )
}