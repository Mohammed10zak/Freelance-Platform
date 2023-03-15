import styled from "styled-components";

export const Box = styled.div`
  width: 1100px;
  margin: 40px auto;
  border-radius: 10px;
  border: 1px solid #d5e0d5;
  padding: 20px;
`;

export const Name = styled.div`
  display: flex;
  position: relative;
  & h2 {
    margin-left: 14px;
  }
`;

export const InfoBox = styled.div`
  width: 1110px;
  display: flex;

  & p {
    width: 500px;
    text-align: justify;
    line-height: 22px;
    font-size: 14px;
    color: #001e00;
  }
`;

export const RightBox = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  border-right: 1px solid #d5e0d5;
  width: 30%;
`;
export const Div = styled.div`
  display: flex;
  gap: 150px;
  align-items: center;
`;
export const LeftBox = styled.div`
  width: 70%;
  margin-top: 40px;
  margin-left: 20px;
  position: relative;
  & h2 {
    position: relative;
    width: 380px;
  }
`;
export const Span = styled.p`
  color: #999;
`;


export const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Skills = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
`;

export const AccountIMg = styled.div`

  width: 100px;
  height: 100px;

  margin-left: 6px;

  & img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`