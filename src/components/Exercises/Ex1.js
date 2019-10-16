import React from "react";
import ReactDOM from "react-dom";
import ReactSVG from "react-svg";
import test from "../svg/ex1.svg";
import OrganellDrawer from "./OrganellDrawer";
import { Button } from "@material-ui/core";
import CustomResponsive from "../../CustomResponsive";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Droppable from "./Droppable";

const organells = [
  "nucleo",
  "membPlasm",
  "retEndLis",
  "retEndRug",
  "citoEsqueleto",
  "mitocondria",
  "vesicula",
  "golgi",
  "peroxissomo",
  "ribossomo",
  "lisossomo",
  "centriolos"
];

export default class Ex1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      organellDrop: [],
      svg: null
    };
  }

  componentDidMount() {
    let svg = (
      <ReactSVG
        src={test}
        beforeInjection={svg => {
          svg.setAttribute(
            "style",
            `width: ${CustomResponsive("90vw", "70vw", "40vw")}`,
            `height:${CustomResponsive("45vh", "35vh", "20vh")}`
          );

          const paths = svg.getElementsByTagName("path");
          let organellDropTemp = [];
          for (let i = 0; i < paths.length; i++) {
            let idDrop = paths.item(i).id;
            idDrop = idDrop.replace(/[0-9]/g, "");
            idDrop = idDrop.replace("-", "");
            if (
              organells.indexOf(idDrop) !== -1 &&
              organellDropTemp.indexOf(idDrop) === -1
            ) {
              //Preenche vetor com droppable
              
            }
          }
          this.setState({ organellDrop: organellDropTemp });
        }}
      ></ReactSVG>
    );
    this.setState({ svg: svg });
  }

  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          {this.state.svg}
          {this.state.organellDrop}
          <OrganellDrawer
            open={this.state.open}
            organells={organells}
          ></OrganellDrawer>
        </DndProvider>
      </div>
    );
  }
}
