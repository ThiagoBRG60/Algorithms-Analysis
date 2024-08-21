import styled from "styled-components";

const StyledAlgorithmContainer = styled.section`
   width: 90%;
   height: 700px;
   display: flex;
   justify-content: center;
   gap: 10px;
   border-bottom: 1px solid ${({ theme }) => theme.border};
   overflow: hidden;

   .bar {
      display: flex;
      justify-content: center;
      align-self: flex-end;
      width: 15px;
      font-size: 11px;
      color: #fff;
      transition: 0.2s;
      background-color: ${({ theme }) => theme.bars};
   }

   @media (max-width: 1024px) {
      height: 500px;
   }

   @media (max-width: 932px) and (orientation: landscape) {
      height: 300px;
   }
   
   @media (max-width: 667px) and (orientation: landscape) {
      height: 180px;
   }

   @media (max-width: 375px) {
      height: 300px;
   }
`

export default StyledAlgorithmContainer