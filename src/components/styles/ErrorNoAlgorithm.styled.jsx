import styled from "styled-components";

const StyledErrorNoAlgorithm = styled.span`
   display: flex;
   align-items: center;
   gap: 10px;
   padding: 5px 10px;
   border-radius: 5px;
   position: absolute;
   transform: translate(-50%, -500%);
   left: 50%;
   top: 50%;
   font-weight: 500;
   background-color: #f44336;
   color: #fff;
   transition: 0.5s;
   z-index: 1;

   &.showError {
      transform: translate(-50%, -50%);
   }

   @media (max-width: 430px) {
      font-size: 14px;
   }

   @media (max-width: 375px) {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 220px;
   }
`

export default StyledErrorNoAlgorithm