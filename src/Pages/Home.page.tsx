import { useState } from "react";
import styled from "styled-components";
import UserService from "@/Services/User.service";
import reactLogo from '../assets/react.svg';
import viteLogo from '/electron-vite.animate.svg';
import ViewUser from "@/Components/User.component";
import { UsersResponseDTO } from "@/Services/User";
import { useNavigate } from "react-router-dom";
import Toaster from "@/Utils/Notifications";
import { BsArrowDownLeftCircleFill } from "react-icons/bs";
export default function PageHome() {
    const [count, setCount] = useState(0);
    const [usersResponse, setUsersResponse] = useState<UsersResponseDTO | null | undefined>();
    const navigate = useNavigate();
    function fetchUsers() {
        UserService.getAll().then(response => {
            setUsersResponse(response);
        });
    }

    return (
        <PageContainer>
            <Links>
                <a href="https://electron-vite.github.io" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </Links>
            <h1>Electron + Vite + React</h1>
            <Example>
                <button onClick={() => setCount((count) => count + 1)}> count is {count}</button>
                <p> Edit <code>src/App.tsx</code> and save to test HMR</p>
            </Example>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <Library><a href="https://fkhadra.github.io/react-toastify/introduction/" target="_blank">React Toastify</a> <button onClick={() => Toaster.notify('Its working')}>Test ME</button></Library>
            <Library><a href="https://sweetalert2.github.io/" target="_blank">SweetAlert2</a> <button onClick={() => Toaster.alert('Its working')}>Test ME</button></Library>
            <Library><a href="https://styled-components.com/" target="_blank">styled-components</a></Library>
            <Library><a href="https://www.npmjs.com/package/react-router-dom" target="_blank">react-router-dom</a> <button onClick={() => navigate('/example')}>Test ME</button></Library>
            <Library><a href="https://axios-http.com/ptbr/docs/intro" target="_blank">axios</a> <button onClick={fetchUsers}>Test ME</button></Library>
            <Library><a href="https://react-icons.github.io/react-icons/" target="_blank"><BsArrowDownLeftCircleFill className="rotate white" /> react-icons <BsArrowDownLeftCircleFill className="rotate white" /></a></Library>
            <UsersContainer>
                {
                    usersResponse && usersResponse.data && usersResponse.data.map(user => <ViewUser key={user.id} {...user} />)
                }
            </UsersContainer>
        </PageContainer>
    );
}

const Library = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 5px; 
    font-size: 30px;
`;

const UsersContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
 `;


const PageContainer = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    
    button{
        width: 100px;
        max-width: 100px;
        height: 30px;
        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.gray};
        color: ${({ theme }) => theme.white};
        border: 1px solid ${({ theme }) => theme.background};
        &:hover{
            background-color: ${({ theme }) => theme.background};
            border: 1px solid ${({ theme }) => theme.gray};
        }
    }

    h1{
        font-size: 30px;
        color: ${({ theme }) => theme.white};
    }
    p{
        font-size: 20px;
        color: ${({ theme }) => theme.white};
    }
 `;


const Links = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 40px;
    img{
        width: 100px;
        height: 100px;
    }
 `;

const Example = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    height: 100px;
    padding: 10px;

 `;