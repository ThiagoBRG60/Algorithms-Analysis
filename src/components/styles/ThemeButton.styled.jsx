import styled from "styled-components";

const StyledThemeButton = styled.div`
   width: 50px;
   height: 25px;
   padding: 0 5px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 50px;
   border: 2px solid #ccc;
   font-size: 14px;
   color: ${({ theme }) => theme.themeButton};
   cursor: pointer;
   overflow: hidden;
   position: absolute;
   right: 20px;

   .ball {
      width: 15px;
      height: 15px;
      position: absolute;
      left: 27px;
      border-radius: 50%;
      transition: 0.4s;
      border: 2px solid ${({ theme }) => theme.themeButton};
      background-color: ${({ theme }) => theme.themeButtonBall};
   }

   .sun, .moon {
      opacity: 1;
      transition: 0.3s;
   }

   .move {
      left: 4px;
   }

   .hide-sun, .hide-moon {
      opacity: 0;
      transform: translate(5px, -10px);
   }

   .hide-moon {
      transform: translate(-5px, -10px);
   }

   @media (max-width: 540px) {
      top: 20px;
   }  
`

export default StyledThemeButton