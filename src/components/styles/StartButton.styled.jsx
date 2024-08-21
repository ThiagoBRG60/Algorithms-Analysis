import styled from "styled-components";

const StyledButton = styled.button`
   position: absolute;
   transform: translate(-50%, -50%);
   left: 50%;
   top: 50%;
   padding: 5px 10px;
   color: ${({ theme }) => theme.highlight};
   border: 1px solid ${({ theme }) => theme.highlight};
   border-radius: 5px;
   font-size: 16px;
   transition: 0.4s;
   cursor: pointer;
   background-color: transparent;

   &:hover {
      background-color: ${({ theme }) => theme.highlight};
      color: #fff;
   }

   &:active {
      transform: scale(0.9) translate(-55%, -50%);
   }
`

export default StyledButton