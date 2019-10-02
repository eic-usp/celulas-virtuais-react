import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import '../App.css'
import AnimalSvg from './svg/teste.svg'
import VegetalSvg from './svg/celulaVegetal.svg'
import CellPanel from './CellPanel'
import ProcarionteSvg from './svg/celulaProcarionte.svg'
import AnimalOrganells from './json/AnimalOrganells'
/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        },
}));*/



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function UnderstandCells() {
    //const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <Tabs style={{
                width: '100vw',
                backgroundColor: "#75DEC9",
                position: 'relative',
                top: '-24px',
                left: '-24px',
                
            }}
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                variant="fullWidth">
                <Tab label="Célula Animal" {...a11yProps(0)} />
                <Tab label="Célula Vegetal" {...a11yProps(1)} />
                <Tab label="Célula Procarionte" {...a11yProps(2)} />
            </Tabs>

            <CellPanel json={AnimalOrganells} value={value} name={'Célula Animal'} img={AnimalSvg} index={0}>

            </CellPanel>
            <CellPanel value={value} name={'Célula Vegetal'} img={VegetalSvg} index={1}>

            </CellPanel>
            <CellPanel value={value} name={'Célula Procarionte'} img={ProcarionteSvg} index={2}>

            </CellPanel>
        </div >
    )
}