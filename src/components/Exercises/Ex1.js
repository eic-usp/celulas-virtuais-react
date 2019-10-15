import React from "react";
import ReactSVG from "react-svg";
import test from "../svg/ex1.svg";
import OrganellDrawer from "./OrganellDrawer";
import { Button } from "@material-ui/core";

export default function Ex1(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <ReactSVG
        src={test}
        onClick={e => {
          let id = e.target.id;
          id = id.replace(/[0-9]/g, "");
          id = id.replace("-", "");
          console.log(id);
        }}
      ></ReactSVG>
      <OrganellDrawer
        open={open}
        organells={[
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
        ]}
      ></OrganellDrawer>
    </div>
  );
}
