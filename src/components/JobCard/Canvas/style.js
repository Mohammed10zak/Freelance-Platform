import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
text-decoration: none;
color: #108a00;

&:hover {
  text-decoration: underline;
}
`;

export const Openjob = styled.div`
display: flex;
justify-content: space-between;
`;


export const Div = styled.div`
  cursor: pointer;
`;