import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}

body {
    font-family: 'Arial';
}

ul {
    list-style: none;
}

.active {
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}
`;

export const Container = styled.div`
  display: flex;
  gap: 6px;
  justify-content: space-around;
  padding: 0 1%;
  margin: 30px auto;
  transition: all 0.5s;
  width: 1200px;
`;
