import styled from "styled-components";

const ChartContainer = styled.div`
  width: 25vw;
  min-width: 360px;
  max-width: 620px;
  aspect-ratio: 1;
  background-color: ${(props) => props.theme.palette.verypaleorange};
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const ChartInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 90%;
  height: 50%;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.palette.cyan};
`;
const ChartSummaryRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
  align-items: center;
  width: 90%;
  flex-wrap: nowrap;
  align-content: center;
`;
const ChartSummaryColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: flex-start;
`;
const ChartSummaryColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: flex-end;
`;

export {
  ChartContainer,
  ChartInner,
  ChartSummaryRow,
  ChartSummaryColumnLeft,
  ChartSummaryColumnRight,
};
