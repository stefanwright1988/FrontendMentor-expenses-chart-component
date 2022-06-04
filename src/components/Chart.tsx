import React from "react";
import Bar from "./Bar";
import { ChartContainer, ChartInner, ChartSummary } from "./Chart.styled";
import Header from "./Header";

const Chart = () => {
  return (
    <ChartContainer>
      <Header />
      <ChartInner>
        <Bar value={50} day="Mon" />
        <Bar value={57} day="Tue" />
        <Bar value={89} day="Wed" />
        <Bar value={50} day="Thu" />
        <Bar value={34} day="Fri" />
        <Bar value={80} day="Sat" />
        <Bar value={20} day="Sun" />
      </ChartInner>
      <ChartSummary>
        <h2>Total this month</h2>
        <span>£1234.56</span>
      </ChartSummary>
    </ChartContainer>
  );
};

export default Chart;
