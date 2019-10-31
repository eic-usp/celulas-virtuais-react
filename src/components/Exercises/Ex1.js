import React from "react";
import OrganellDrawer from "./OrganellDrawer";
import { DndProvider } from "react-dnd";
import Ex1svg from "./ex1svg";
import MultiBackend, {
  Preview,
  TouchTransition
} from "react-dnd-multi-backend";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
/*const HTML5toTouch = {
  backends: [
    {
      backend: HTML5Backend
    },
    {
      backend: TouchBackend, // Note that you can call your backends with options
      options: {
        enableHoverOutsideTarget: true,
        ignoreContextMenu: true,
        enableMouseEvents: true
      },
      preview: true,
      transition: TouchTransition
    }
  ]
};*/

const organells = [
  "nucleo",
  "membPlasm",
  "retEndLis",
  "retEndRug",
  "mitocondria",
  "vesicula",
  "golgi",
  "peroxissomo",
  "ribossomo",
  "lisossomo",
  "centriolos",
  "citoesqueleto"
];

export default class Ex1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      organellDrop: [],
      hits: 0,
      hidden: ''
    };
  }

  

  render() {
    return (
      <div>
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <Ex1svg
            organells={organells}
            hits={() => {
              this.setState({ hits: this.state.hits + 1});
            }}
            setUpdate={() => {
              console.log('update')
              this.setState({open:false})
              console.log('update close')
              
            }}
            

            />

          <OrganellDrawer
            open={this.state.open}
            organells={organells}
            openDrawer={()=>{this.setState({open:true})}}
            closeDrawer={()=>{this.setState({open:false})}}
            handleDrawer={() => this.setState({hidden:'', open: true })}
            hidden={this.state.hidden}
            hideDrawer={() => this.setState({ hidden: 'hidden' })}
            updateHidden={() => {
              this.setState({open:false}) 
              this.setState({ hidden: ""});
            }}
          ></OrganellDrawer>
        </DndProvider>
      </div>
    );
  }
}
