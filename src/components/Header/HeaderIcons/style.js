import styled from "styled-components";

export const Icons = styled.div``;

export const IconContainer = styled.span`
  svg {
    margin: 10px 0 0 10px;
    width: 24px;
  }

  &:hover:before {
    content: attr(data-text);
    position: absolute;
    top: 100%;
    color: #111;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  }
`;
