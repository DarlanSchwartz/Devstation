import styled from "styled-components";
export default function PageHome() {
    return (
        <PageContainer>
            <h1>test</h1>
        </PageContainer>
    );
}

const PageContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
 `;