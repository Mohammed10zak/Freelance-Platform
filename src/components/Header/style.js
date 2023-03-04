import styled from "styled-components";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

export const Styledul = styled.ul`
  display: flex;
  gap: 6px;
  margin-top: 27px;

  li {
    position: relative;
    cursor: pointer;
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

  & img {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
`;

export const LiOptions = styled.li`
  &:hover {
    background-color: #e5f6d3;
    cursor: pointer;
  }
  padding: 10px;
  display: block;
`;

export const Stylednav = styled.nav`
  display: flex;
`;

export const Head = styled.h1`
  letter-spacing: 4px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande";
  color: #3c8224;
  margin-left: 1rem;

  @media (min-width: 300px) and (max-width: 1190px) {
    margin: 10px auto;
  }
`;

export const Stylednotifecation = styled.div`
  display: flex;
`;
