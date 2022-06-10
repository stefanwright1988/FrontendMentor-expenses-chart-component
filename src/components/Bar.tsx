import React from "react";
import ReactTooltip from "react-tooltip";
import { BarFiller, BarOuter, BarTitle } from "./Bar.styled";

interface IBarProps {
  value: number;
  height: number;
  day: string;
  children?: any;
}

const Bar = ({ value, day, height }: IBarProps) => {
  return (
    <>
      <BarOuter>
        <BarFiller height={height} data-tip={`£${value}`} />
        <ReactTooltip place="top" type="dark" effect="float" />
        <BarTitle>{day}</BarTitle>
      </BarOuter>
    </>
  );
};

export default Bar;
