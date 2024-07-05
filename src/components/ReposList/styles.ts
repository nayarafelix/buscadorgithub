import styled from "styled-components";

export const Container = styled.div`
  color: var(--black);
  display: flex;
  flex-wrap: wrap;
  
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #0006;

  button {
      background-color: var(--white);
      border: 1px solid var(--main);
      color: var(--main);
      font-weight: bold;
      height: 40px;
      padding: 0 1rem;

      &:hover {
          background-color: var(--main);
          color: var(--white);
      }
  }
`;

export const SelectOrder = styled.select`
  padding: 0.5rem;
  border: 1px solid var(--main);
  border-radius: 4px;
  background-color: var(--white);
  color: var(--main);
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: var(--main);
    color: var(--white);
  }
`;

export const Repos = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 500px;
  overflow: scroll;
  overflow-x: hidden;
    
  @media (max-width: 600px) {
      max-height: calc(100vh - 440px);
  }
`;

export const Repo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #0006;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    a {
        margin-top: 0.5rem;
    }
`;

export const LanguageTag = styled.span`
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  background-color: var(--main);
  color: var(--white);
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
