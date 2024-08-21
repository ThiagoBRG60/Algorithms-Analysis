import styled from "styled-components";

const StyledHeaderMenu = styled.div`
   width: 150px;
   height: 0px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
   position: absolute;
   top: 35px;
   left: -25px;
   border-radius: 10px;
   background-color: ${({ theme }) => theme.headerMenu};
   border: 1px solid rgba(0, 0, 0, 0.5);
   transition: 0.4s;
   opacity: 0;
   overflow: hidden;

   &.active {
      height: 200px;
      opacity: 1;
   }

   p {
      &::after {
         content: '';
         width: 0%;
         height: 4px;
         position: absolute;
         bottom: -4px;
         left: 50%;
         border-radius: 50px;
         transition: 0.4s;
         background-color: ${({ theme }) => theme.highlight};
      }

      &.active {
         &::after {
            width: 100%;
            left: 0;
         }
      }
   }

   @media (max-width: 540px) {
      &.active {
         height: 180px;
         opacity: 1;
      }

      ul {
         display: flex;
         flex-direction: column;
         align-items: center;
      }
   }
`

export default StyledHeaderMenu