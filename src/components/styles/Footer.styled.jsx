import styled from "styled-components";

const StyledFooter = styled.footer`
   width: 100%;
   height: 80px;
   padding: 20px;
   margin-top: auto;
   display: flex;
   align-items: center;
   position: relative;

   .control-inputs {
      display: flex;
      align-items: center;
      gap: 10px;

      label {
         color: ${({ theme }) => theme.primaryText};
         transition: 0.4s;
      }

      input {
         width: 120px;
         height: 8px;
         appearance: none;
         border-radius: 50px;
         -webkit-appearance: none;
         -moz-appearance: none;

         &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: ${({ theme }) => theme.highlightDark};
            cursor: pointer;
         }
         
         &::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: ${({ theme }) => theme.highlightDark};
            cursor: pointer;
         }
      }
   }

   @media (max-width: 1250px) {
      height: 150px;

      .control-inputs {
         flex-direction: column;
         justify-content: center;
      }
   }

   @media (max-width: 932px) and (orientation: landscape) {
      height: 120px;

      .control-inputs label {
         font-size: 14px;
      }      
   }

   @media (max-width: 768px) {
      height: 200px;
   }

   @media (max-width: 740px) and (orientation: landscape) {
         height: 120px;
   }

   @media (max-width: 650px) {
      .control-inputs label {
         font-size: 14px;
      }
   }   

   @media (max-width: 430px) {
      height: 300px;

      .control-inputs {
         align-self: flex-end;
      }
   }

   @media (max-width: 375px) {
      height: 280px;
   }
`

export default StyledFooter