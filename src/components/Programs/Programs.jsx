import React from "react";
import "./_programs.scss";
import "../main.scss";

function Programs() {
  return (
    <section className="programs">
      <h3 className="programs__title">Programs</h3>
      <div className="programs__items">
        <div className="programs__item programs__item--1">
          <p className="programs__item--heading">Pre-college education</p>
          <p className="programs__item--parag">
            Broaden the creative horizons of your kids
          </p>
        </div>
        <div className="programs__item programs__item--2">
          <p className="programs__item--heading">Middle school</p>
          <p className="programs__item--parag">
            Broaden the creative horizons of your kids
          </p>
        </div>
        <div className="programs__item programs__item--3">
          <p className="programs__item--heading">High school</p>
          <p className="programs__item--parag">
            Preparing youngsters for the adult life
          </p>
        </div>
        <div className="programs__item programs__item--4">
          <p className="programs__item--heading">International exchange</p>
          <p className="programs__item--parag">
            Accepting students from abroad
          </p>
        </div>
        <div className="programs__item programs__item--5">
          <p className="programs__item--heading">Graduate programs</p>
          <p className="programs__item--parag">
            Solidifying knowledge that was obtained through the long years of
            learning
          </p>
        </div>
        <div className="programs__item programs__item--6">
          <p className="programs__item--heading">Home education</p>
          <p className="programs__item--parag">
            Providing robust distant education
          </p>
        </div>
      </div>
    </section>
  );
}

export default Programs;
