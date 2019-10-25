import React from "react";
import ReactDOM from "react-dom";
import ReactSVG from "react-svg";
import test from "../svg/ex1.svg";
import OrganellDrawer from "./OrganellDrawer";
import CustomResponsive from "../../CustomResponsive";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Ex1svg from './ex1svg'
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
      svg: null
    };
    this.dndRef = React.createRef();
  }

  componentDidMount() {
    let svg = (
      <DndProvider backend={HTML5Backend}>
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
                ReactDOM.render(
                    <div style={{backgroundColor:'blue', width:'100px', height:'100px', position:'absolute'}} id={idDrop} />
                  ,
                  paths.item(i)
                );
                //ReactDOM.createPortal(<Droppable id={idDrop}/>, document.getElementById('root'))

                //console.log(paths.item(i).children)
              }
            }
            //this.setState({ organellDrop: organellDropTemp });
          }}
        ></ReactSVG>
      </DndProvider>
    );

    this.setState({ svg: svg });
  }

  render() {
    return (
      <div>
        <DndProvider ref={this.dndRef} backend={HTML5Backend}>
          {//this.state.svg
          }
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
