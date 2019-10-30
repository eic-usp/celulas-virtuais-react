import React from "react";
import ReactDOM from "react-dom";
import ReactSVG from "react-svg";
import test from "../svg/ex1.svg";
import OrganellDrawer from "./OrganellDrawer";
import CustomResponsive from "../../CustomResponsive";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from 'react-dnd-touch-backend'
import { DndProvider } from "react-dnd";
import Ex1svg from './ex1svg'
import {isMobile} from 'react-device-detect'

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
  'citoesqueleto'
];

export default class Ex1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      organellDrop: [],
    };
    this.dndRef = React.createRef();
  }

  

  render() {
    return (
      <div>
        <DndProvider ref={this.dndRef} backend={isMobile ? TouchBackend : HTML5Backend}>
          
          <Ex1svg organells={organells} complete={this.props.complete}/>

          <OrganellDrawer
            open={this.state.open}
            organells={organells}
          ></OrganellDrawer>
        </DndProvider>
      </div>
    );
  }
}
