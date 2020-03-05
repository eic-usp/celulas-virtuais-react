import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import '../App.css'
import AnimalSvg from './svg/teste.svg'
import VegetalSvg from './svg/celulaVegetal.svg'
import CellPanel from './CellPanel'
import ProcarionteSvg from './svg/celulaProcarionte.svg'


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function UnderstandCells() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
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
                <Tab label="Animal" {...a11yProps(0)} />
                <Tab label="Vegetal" {...a11yProps(1)} />
                <Tab label="Procarionte" {...a11yProps(2)} />
            </Tabs>

            {value===0 && <CellPanel value={value} index={0} name={'Célula Animal'} img={AnimalSvg} >

            </CellPanel>}
            {value===1 && <CellPanel value={value} index={1} name={'Célula Vegetal'} img={VegetalSvg}>

            </CellPanel>}
            {value===2 && <CellPanel value={value} index={2} name={'Célula Procarionte'} img={ProcarionteSvg}>

            </CellPanel>}
        </div >
    )
}