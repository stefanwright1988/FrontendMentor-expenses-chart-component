import styled from "styled-components";

interface IBarOuterProps {
  height: number;
}

const BarOuter = styled.div`
  width: 10%;
  margin-left: 5%;
  height: 100%;
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: flex-end;
  &:first-child {
    margin-left: 2.5%;
  }
  &:last-child {
    margin-right: 2.5%;
  }
`;

const BarFiller = styled.div<IBarOuterProps>`
  height: ${(props) => props.height}%;
  width: 100%;
  background-color: ${(props) => props.theme.palette.softred};
  border-top-left-radius: ${(props) => props.theme.borderRadiusSmall};
  border-top-right-radius: ${(props) => props.theme.borderRadiusSmall};
  &:hover {
    background-color: ${(props) => props.theme.palette.cyan};
  }
`;

const BarTitle = styled.span`
  padding-top: 5px;
`;

export { BarOuter, BarFiller, BarTitle };
