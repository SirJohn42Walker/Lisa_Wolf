import styled from "styled-components";

export default function PageHeader() {
  return <LisaHeader>Lisa Maria Wolf</LisaHeader>;
}

const LisaHeader = styled.h1`
  font-style: italic;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-align: center;
  margin-top: 2rem;
`;
