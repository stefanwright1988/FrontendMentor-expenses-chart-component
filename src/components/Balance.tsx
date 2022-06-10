import { BalanceContainer, BalanceInner, BalanceLogo } from "./Balance.styled";

const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceInner>
        <span>My Balance</span>
        <h2>£123.45</h2>
      </BalanceInner>
      <BalanceLogo alt="logo" src="/logo.svg" />
    </BalanceContainer>
  );
};

export default Balance;
