import React, { useEffect } from "react";
import "../../../App.css";
import Organells from "../../json/Organells";
import LeftBox from "./LeftBox";
import Grid from "@material-ui/core/Grid/Grid";
import RightBox from "./RightBox";
import { jsPlumb } from "jsplumb";

export default class Ex2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      lines: [],
      hasLines: false
    };
  }

  componentDidMount() {
    jsPlumb.ready(function() {
      var els = document.querySelectorAll(".wrapper");

      var target = {
        isSource: false,
        isTarget: true,
        connector: "Straight",
        endpoint: "Rectangle",
        paintStyle: { fill: "white", outlineStroke: "blue", strokeWidth: 3 },
        hoverPaintStyle: { outlineStroke: "lightblue" },
        connectorStyle: { outlineStroke: "green", strokeWidth: 1, margin:'15px' },
        connectorHoverStyle: { strokeWidth: 2 },
        margin:15
      };
      var source = {
        isSource: true,
        isTarget: false,
        connector: "Straight",
        endpoint: "Rectangle",
        paintStyle: { fill: "white", outlineStroke: "blue", strokeWidth: 3 },
        hoverPaintStyle: { outlineStroke: "lightblue" },
        connectorStyle: { outlineStroke: "green", strokeWidth: 1, margin:'15px' },
        connectorHoverStyle: { strokeWidth: 2 },
        margin:15,

      };


    
      jsPlumb.addEndpoint(
          "A",
          { anchors: ["Left"] },
          target
        );
      

      jsPlumb.addEndpoint(
          "B",
          { anchors: ["Left"] },
          target
        );

      jsPlumb.addEndpoint(
          "C",
          { anchors: ["Left"] },
          target
        );

      jsPlumb.addEndpoint(
          "D",
          { anchors: ["Left"] },
          target
        );

      jsPlumb.addEndpoint(
          "Núcleo",
          {anchors:["Right"]},
          source
      )
      jsPlumb.addEndpoint(
        "Retículo Endoplasmático Rugoso",
        { anchors: ["Right"] },
        source
      );
      jsPlumb.addEndpoint("Mitocôndria", { anchors: ["Right"] }, source);

      jsPlumb.addEndpoint("Lisossomo", { anchors: ["Right"] }, source);

    
    });
  }


  render() {
    const left = [];

    const desc = [
      <RightBox
        id="A"
        className="Retículo Endoplasmático Rugoso"
        desc="Modificação de proteínas"
      />,
      <RightBox
        id="B"
        className="Núcleo"
        desc="Duplicação do DNA e produção de RNA"
      />,
      <RightBox
        id="C"
        className="Mitocôndria"
        desc="Produção de energia"
      />,
      <RightBox
        id="D"
        className="Lisossomo"
        desc="Digestão intracelular"
      />
    ];
    let i = 0;
    Organells.organells.forEach(element => {
      if (
        element.name === "Núcleo" ||
        element.name === "Mitocôndria" ||
        element.name === "Lisossomo" ||
        element.name === "Retículo Endoplasmático Rugoso"
      ) {
        left.push(
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <LeftBox
              id={element.name}
              handleClick={e => {
                this.setState({ first: e.target });
              }}
              
              img={element.gif}
              desc={element.name}
            />
            {desc[i]}
          </Grid>
        );
        i++;
      }
    });

    return (
      <>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="baseline"
        >
          <p className="titulo">Associe as Organelas</p>
          <p>Associe as organelas com suas respectivas funções celulares:</p>
          {left}
        </Grid>
      </>
    );
  }
}
