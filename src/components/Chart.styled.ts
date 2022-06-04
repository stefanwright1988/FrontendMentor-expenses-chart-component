import styled from "styled-components";

const ChartContainer = styled.div`
  width: 33.33%;
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
const ChartSummary = styled.div`
  display: flex;
  flex-direction: row;
  height: 30%;
`;

export { ChartContainer, ChartInner, ChartSummary };
