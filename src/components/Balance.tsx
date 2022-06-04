import React from "react";
import { BalanceContainer, BalanceInner } from "./Balance.styled";

const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceInner>
        <h3>Balance</h3>
        <span>£123.45</span>
      </BalanceInner>
    </BalanceContainer>
  );
};

export default Balance;
