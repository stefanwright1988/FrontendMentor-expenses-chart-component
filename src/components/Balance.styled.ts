import styled from "styled-components";
const BalanceContainer = styled.div`
  width: 25vw;
  min-width: 360px;
  max-width: 620px;
  background-color: ${(props) => props.theme.palette.softred};
  border-radius: ${(props) => props.theme.borderRadiusLarge};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
  color: white;
`;

const BalanceInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 1rem 0;
  margin-left: 5%;
`;

const BalanceLogo = styled.img`
  margin-right: 1rem;
`;

export { BalanceContainer, BalanceInner, BalanceLogo };
