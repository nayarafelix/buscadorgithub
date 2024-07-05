import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 480px;
    height: 95vh;
    margin: 10px auto;
    gap: 10px;

    @media (max-width: 600px) {
        max-width: 360px;
    }
`

export const SearchArea = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff9;
    padding: 1rem;
    border-radius: 4px;
    width: 100%;
    max-height: 250px;
    
    button {
        width: 100%;
        background-color: var(--white);
        border: 1px solid var(--main);
        color: var(--main);
        font-weight: bold;
        height: 40px;

        &:hover {
            background-color: var(--main);
            color: var(--white);
        }
    }
`

export const SearchInput = styled.input`
    border: 0;
    margin: 1rem;
    padding: 0.5rem;
    width: 100%;
    border-radius: 4px;
`
