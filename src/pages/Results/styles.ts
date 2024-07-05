import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem;
  padding: 1rem;  
    
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

  @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      margin: 0.5rem;

      button {
        width: 100%;
        margin-bottom: 1rem;
      }
  }
`;

export const Content = styled.div`
  flex-direction: column;
  background-color: var(--white);
  margin: 0 2rem;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 480px;
  width: 100%;
    
  @media (max-width: 600px) {
    max-width: initial;
  }
`;

export const UserInfoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
    
    img {
    height: 100%;
    width: 150px;
    border-radius: 0.5rem;
    margin-right: 0.5rem;

    @media (max-width: 600px) {
      width: 115px;
    }
  }
`;

export const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
`;

export const UserStatistics = styled.div`
    display: flex;
    gap: 1rem;
    background-color: var(--main);
    color: var(--white);
    border-radius: 0.5rem;
    padding: 1rem;
    justify-content: space-between;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }
`
