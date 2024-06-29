import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PageExample() {
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Example page</h1>
            <button onClick={() => navigate('/')}>Back to Home page</button>
        </Container>
    );
}

const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80svh;
    gap: 30px;
    h1{
        font-size: 30px;
        color: ${({ theme }) => theme.white};
    }
    p{
        font-size: 20px;
        color: ${({ theme }) => theme.white};
    }
 `;