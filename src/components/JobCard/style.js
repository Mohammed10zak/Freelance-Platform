import styled from "styled-components";

export const Cardjob = styled.div`
  padding: 20px 30px;
  margin-bottom: 50px;

  &:hover {
    background-color: #f5f5f5;
    & h3 {
      color: #3c8224;
    }
  }
`;

  export const JobTitle = styled.h3`
  margin-top: 50px;
  `;

export const Jobdetail = styled.div`
  font-size: 14px;
  display: flex;
  color: #888;
  gap: 2px;
`;

export const JobDescription = styled.p`
  line-height: 22px;
  letter-spacing: 2px;
`;
