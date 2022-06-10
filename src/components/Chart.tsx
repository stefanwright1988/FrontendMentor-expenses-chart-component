import React from "react";
import Bar from "./Bar";
import {
  ChartContainer,
  ChartInner,
  ChartSummaryColumnLeft,
  ChartSummaryColumnRight,
  ChartSummaryRow,
} from "./Chart.styled";
import Header from "./Header";

const Chart = ({ data }: any) => {
  const weeklyAmounts = data.map(
    (dataRow: { amount: number }) => dataRow.amount
  );
  const maxWeeklyAmount = Math.max(...weeklyAmounts);

  const WeeklyTotal = data.reduce(
    (prev: any, dataRow: any) => prev + dataRow.amount,
    0
  );
  return (
    <ChartContainer>
      <Header />
      <ChartInner>
        {data.map((dataRow: any) => (
          <Bar
            key={dataRow.day}
            value={(dataRow.amount / maxWeeklyAmount) * 100}
            day={dataRow.day}
          />
        ))}
      </ChartInner>
      <ChartSummaryRow>
        <ChartSummaryColumnLeft>
          <span>Total this month</span>
          <h1>£{WeeklyTotal}</h1>
        </ChartSummaryColumnLeft>
        <ChartSummaryColumnRight>
          <h3>+2.4%</h3>
          <span>from last month</span>
        </ChartSummaryColumnRight>
      </ChartSummaryRow>
    </ChartContainer>
  );
};

export default Chart;
