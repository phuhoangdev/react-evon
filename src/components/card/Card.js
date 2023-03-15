import styled, { css } from "styled-components";

const StyledCard = styled.div`
   position: relative;
`;
const CardImage = styled.div`
   height: 400px;
   width: 100%;
   border-radius: 8px;
`;
const CardImg = styled.img`
   display: block;
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: inherit;
`;
const CardContent = styled.div`
   position: absolute;
   left: 50%;
   bottom: 0;
   width: calc(100% - 80px);
   transform: translate(-50%, 50%);
   background: #ffffff;
   z-index: 10;
   border-radius: 20px;
   padding: 20px;
`;
const CardTop = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 30px;
`;
const CardUser = styled.div`
   display: flex;
   align-items: center;
   column-gap: 12px;
`;
const UserAvatar = styled.img`
   width: 30px;
   height: 30px;
   border-radius: 100rem;
   object-fit: cover;
   flex-shrink: 0;
`;
const UserName = styled.span`
   font-weight: 300;
   font-size: 16px;
   color: #333333;
`;
const CardFooter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const CardTitle = styled.div`
   font-size: 18px;
   font-weight: 500;
   color: #000000;
`;
const CardAmount = styled.span`
   font-size: ${(props) => props.fontSize || "18px"};
   font-weight: bold;

   ${(props) =>
      props.secondary &&
      css`
         background: linear-gradient(
            86.88deg,
            #f01d1d 1.38%,
            #f01d1d 64.35%,
            #666666 119.91%
         );
      `};
   ${(props) =>
      !props.secondary &&
      css`
         background: linear-gradient(
            86.88deg,
            #7d6aff 1.38%,
            #ffb86c 64.35%,
            #fc2872 119.91%
         );
      `};
   color: transparent;
   background-clip: text;
`;
const CardMeta = styled.div`
   display: flex;
   align-items: center;
   column-gap: 12px;
`;

const Card = (props) => {
   return (
      <StyledCard>
         <CardImage>
            <CardImg
               src="https://cdn.dribbble.com/users/2400293/screenshots/20320748/media/0ce30d2aa1222c487426145c6d46b821.png?compress=1&resize=768x576&vertical=top"
               alt=""
            />
         </CardImage>
         <CardContent>
            <CardTop>
               <CardUser>
                  <UserAvatar
                     src="https://cdn.dribbble.com/users/2400293/avatars/small/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144"
                     alt=""
                  />
                  <UserName>Racheliz</UserName>
               </CardUser>
               <CardMeta>
                  <svg
                     fill="#f01d1d"
                     height="20px"
                     width="20px"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"
                  >
                     <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>{" "}
                  <span>256</span>
               </CardMeta>
            </CardTop>
            <CardFooter>
               <CardTitle>Cosmic Perspective</CardTitle>
               <CardAmount fontSize="28px" secondary={props.secondary}>
                  12,000 PSL
               </CardAmount>
            </CardFooter>
         </CardContent>
      </StyledCard>
   );
};
export default Card;
