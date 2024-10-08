import React, {useEffect, useState} from "react";
// import { data } from "../data";
import Prescription from "./Prescription";

const PrescriptionsList = (props) => {

  useEffect(() => {
    props.getPrescriptions();
    console.log('use effect')
  }, []);

  // console.log(props, "THE PROPS");
  const {completeDosage, data} = props;

  const prescriptions = data
    // .filter(p => p.email === email)
    // .filter(p => p.completedDosage !== true)
    .map(p => {
    return <Prescription key={p._id} name={p.name} start={p.startDate} end={p.endDate} numOfTimesPerDay={p.numOfTimesPerDay} numOfTablets={p.numOfTablets} id={p._id} completedDosage={p.completedDosage} completeDosage={completeDosage}/>;
  });
  return (
    <>
      <section id="gigs" className="container">
        <h1>Prescriptions</h1>
        {prescriptions}
      </section>
    </>
  );
};

export default PrescriptionsList;
