import styled from "styled-components";
const BalanceContainer = styled.div`
  width: 33.33%;
  background-color: ${(props) => props.theme.palette.softred};
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const BalanceInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem 0;
  margin-left: 5%;
`;
export { BalanceContainer, BalanceInner };
