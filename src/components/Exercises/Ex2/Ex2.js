import React, { useEffect } from "react";
import "../../../App.css";
import Organells from "../../json/Organells";
import LeftBox from "./LeftBox";
import Grid from "@material-ui/core/Grid/Grid";
import RightBox from "./RightBox";
import "./box.css";

const answer = {
  A: "Retículo Endoplasmático Rugoso",
  B: "Núcleo",
  C: "Mitocôndria",
  D: "Lisossomo"
};

export default class Ex2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      A: "",
      B: "",
      C: "",
      D: ""
    };
  }

  componentDidMount() {
    const jsPlumb = this.props.jsPlumb;
    //var els = document.querySelectorAll(".conections");
    jsPlumb.ready(function() {
      var target = {
        cssClass: "boxRight",
        isSource: false,
        isTarget: true,
        endpoint: "Rectangle",
        paintStyle: { fill: "white", outlineStroke: "blue", strokeWidth: 3 },
        hoverPaintStyle: { outlineStroke: "lightblue" }
      };
      var source = {
        id: "test",
        cssClass: "boxLeft",
        isSource: true,
        isTarget: false,
        connector: "Straight",
        endpoint: "Rectangle",
        paintStyle: { fill: "white", outlineStroke: "blue", strokeWidth: 3 },
        hoverPaintStyle: { outlineStroke: "lightblue" },
        connectorStyle: {
          outlineStroke: "green",
          strokeWidth: 1,
          width: "80%"
        },
        connectorHoverStyle: { strokeWidth: 2 }
      };

      jsPlumb.addEndpoint("A", { anchors: ["Left"] }, target);

      jsPlumb.addEndpoint("B", { anchors: ["Left"] }, target);

      jsPlumb.addEndpoint("C", { anchors: ["Left"] }, target);

      jsPlumb.addEndpoint("D", { anchors: ["Left"] }, target);

      jsPlumb.addEndpoint("Núcleo", { anchors: ["Right"] }, source);
      jsPlumb.addEndpoint(
        "Retículo Endoplasmático Rugoso",
        { anchors: ["Right"] },
        source
      );
      jsPlumb.addEndpoint("Mitocôndria", { anchors: ["Right"] }, source);

      jsPlumb.addEndpoint("Lisossomo", { anchors: ["Right"] }, source);
    });
    jsPlumb.bind("connection", info => {
      this.setState({ [info.targetId]: info.sourceId }, () => {
        let temp = {
          A: this.state.A,
          B: this.state.B,
          C: this.state.C,
          D: this.state.D
        };

        if (
          answer.A === temp.A &&
          answer.B === temp.B &&
          answer.C === temp.C &&
          answer.D === temp.D
        ) {
          this.props.complete();
          
        }
      });
    });
  }

  render() {
    const left = [];

    const style = {
      margin: "15px"
    };
    const desc = [
      <RightBox
        id="A"
        style={style}
        className="Retículo Endoplasmático Rugoso"
        desc="Modificação de proteínas"
      />,
      <RightBox
        id="B"
        style={style}
        className="Núcleo"
        desc="Duplicação do DNA e produção de RNA"
      />,
      <RightBox
        id="C"
        style={style}
        className="Mitocôndria"
        desc="Produção de energia"
      />,
      <RightBox
        id="D"
        style={style}
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
      <div id="connections">
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
      </div>
    );
  }
}
