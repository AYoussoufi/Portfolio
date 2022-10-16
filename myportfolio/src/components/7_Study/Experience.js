import React from "react";
import "./Experience.css";
import Experiencebox from "./components/Experiencebox";
import looking from "./looking.png";

export default function Experience() {
  const detailexp = [
    {
      date: "Sep 2017- Jul 2018",
      entreprise: "El Bakilani Public School",
      title: "Bachelor Experimental Sciences",
      desc: "Life and Earth Sciences option",
    },
    {
      date: "Sep 2018-2020",
      entreprise: "ISTA - AIN BORJA",
      title: "Structure Works Specialized",
      desc: "Training brings together all the concepts of building such as Building construction, Management, Market Study.",
    },
    {
      date: "JAN 2020-2021",
      entreprise: "Universite Hassan 1er",
      title: "Construction Field",
      desc: "Training includes all the needs to build and develop a web application : Backend developement, DataBase, FrontEnd Developement, Digital Design, Software engineering, Technologies (GITHUB,CLOUD)",
    },
  ];

  return (
    <div className="Study">
      <div className="title">Formation</div>
      <div className="container">
        <Experiencebox
          date={detailexp[0].date}
          entreprise={detailexp[0].entreprise}
          title={detailexp[0].title}
          desc={detailexp[0].desc}
        ></Experiencebox>
        <Experiencebox
          date={detailexp[1].date}
          entreprise={detailexp[1].entreprise}
          title={detailexp[1].title}
          desc={detailexp[1].desc}
        ></Experiencebox>
        <Experiencebox
          date={detailexp[2].date}
          entreprise={detailexp[2].entreprise}
          title={detailexp[2].title}
          desc={detailexp[2].desc}
        ></Experiencebox>
      </div>
    </div>
  );
}
