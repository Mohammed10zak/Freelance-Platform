import styled from "styled-components";

export const Styledul = styled.ul`
  display: flex;
  gap: 6px;
  margin-top: 27px;

  li {
    position: relative;
    cursor: pointer;
  }
  li > li {
    font-size: 14px;
  }

  li:hover {
    color: #3c8224;
  }
  li > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ccc;
    padding: 0.5rem;
  }

  li:hover > ul {
    display: block;
    border-radius: 6px;
    width: 200px;
    padding: 10px;
    background-color: #ffffff;
  }

  li:hover > ul::after {
    content: "";

    display: block;
    position: absolute;
    bottom: 100%;
    left: 20%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #ede8e8;
  }
`;

export const LiMsg = styled.li`
  margin-top: 3.7px;
  font-size: 14px;
`;
export const LiOptions = styled.li`
  &:hover {
    background-color: #e5f6d3;
    cursor: pointer;
  }
  padding: 10px;
  display: block;
`;
