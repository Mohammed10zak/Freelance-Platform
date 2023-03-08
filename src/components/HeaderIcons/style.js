import styled from "styled-components";

export const IconContainer = styled.span`
  position: relative;

  svg {
    margin: 24px 0 0 10px;
    width: 24px;
  }

  &:hover:before {
    content: attr(data-text);
    position: absolute;
    bottom: -12px;
    white-space: nowrap;
    background-color: #efefef;
    color: #111;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
  }
`;
