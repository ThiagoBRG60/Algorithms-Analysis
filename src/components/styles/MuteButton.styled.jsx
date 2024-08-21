import styled from "styled-components";

const StyledMuteButton = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;

   p {
      color: ${({ theme }) => theme.primaryText};
      transition: 0.4s;
   }

   .volume-control {
      width: 50px;
      height: 22px;
      padding: 0 4px;
      display: flex;
      align-items: center;
      border-radius: 50px;
      background-color: ${({ theme }) => theme.highlight};
      transition: 0.4s;
      cursor: pointer;

      &.off {
         background-color: transparent;
         border: 1px solid ${({ theme }) => theme.muteBorder};
      }
 
      .on, .off {
         width: 14px;
         height: 14px;
         border-radius: 50%;
         background-color: #fff;
         transition: 0.4s;
         transform: translateX(28px);

         &.off {
            transform: translateX(0px);
            background-color: ${({ theme }) => theme.muteBall};
         }
      }
   }

   @media (max-width: 1250px) {
      position: absolute;
      right: 20px;
   }

   @media (max-width: 932px) and (orientation: landscape) {
      p {
         font-size: 14px;
      }
   }

   @media (max-width: 650px) {
      p {
         font-size: 14px;
      }
   }
`

export default StyledMuteButton