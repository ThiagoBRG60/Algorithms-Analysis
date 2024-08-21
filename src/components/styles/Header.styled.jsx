import styled from "styled-components";

const StyledHeader = styled.header`
   width: 100%;
   height: 80px;
   padding: 20px;
   display: flex;
   align-items: center;
   gap: 20px;
   border-bottom: 1px solid ${({ theme }) => theme.border};
   position: relative;

   .logo-info {
      display: flex;
      align-items: center;
      gap: 20px;
      padding-right: 20px;
      border-right: 1px solid ${({ theme }) => theme.border};

      img {
         width: 40px;
         height: 40px;
      }

      h1 {
         font-size: 18px;
         color: ${({ theme }) => theme.primaryText};
         transition: 0.4s;
      }
   }

   ul {
      display: flex;
      align-items: center;
      gap: 20px;

      li {
         display: flex;
         align-items: center;
         gap: 5px;
         user-select: none;
         cursor: pointer;
         color: ${({ theme }) => theme.primaryText};
         font-weight: 500;
         position: relative;
         z-index: 1;

         &:hover {
            color: ${({ theme }) => theme.highlight};
         }

         p {
            transition: 0.4s;

            &.active {
               color: ${({ theme }) => theme.highlight};
            }
         }
         
         .arrow {
            transition: 0.2s;

            &.arrow-move {
               color: ${({ theme }) => theme.highlight};
               transform: rotate(180deg);
            }
         }

         div {
            justify-content: center;

            ul {
               display: flex;
               flex-direction: column;
               gap: 8px;
            }
         }
      }
   }

   @media (max-width: 932px) and (orientation: landscape) {
      height: 50px;

      .logo-info {
         img {
            width: 30px;
            height: 30px;
         }

         h1 {
            font-size: 14px;
         }
      }

      
      ul li p {
         font-size: 14px;
      }
   }

   @media (max-width: 768px) {
      .logo-info {
         h1 {
            font-size: 16px;
         }
      }
   }

   @media (max-width: 650px) {
      padding: 0 15px;
      gap: 10px;

      .logo-info {
         gap: 10px;
         padding-right: 10px;

         img {
            width: 35px;
            height: 35px;
         }

         h1 {
            font-size: 14px;
         }
      }

      ul li p {
         font-size: 14px;
      }
   }

   @media (max-width: 540px) {
      min-height: 150px;
      align-items: normal;
      padding: 15px 20px;
      z-index: 1;

      .logo-info, ul, ul li {
         border-right: 0;
         align-items: normal;
      }

      .logo-info {
         align-self: flex-start;
         align-items: center;
      }

      > ul {
         height: 300px;
         padding-top: 50px;
         flex-direction: column;
         align-items: center;
         position: absolute;
         transform: translateX(-50%);
         left: 50%;

         li {
            align-items: center;
         }
      }
   }
`

export default StyledHeader