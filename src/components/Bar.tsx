import React from "react";
import { BarFiller, BarOuter, BarTitle } from "./Bar.styled";

interface IBarProps {
  value: number;
  day: string;
}

const Bar = ({ value, day }: IBarProps) => {
  return (
    <BarOuter>
      <BarFiller height={value} />
      <BarTitle>{day}</BarTitle>
    </BarOuter>
  );
};

export default Bar;
