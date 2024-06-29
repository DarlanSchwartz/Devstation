import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '@/Contexts/Theme.context';
import { FaMoon, FaSun } from 'react-icons/fa';
import Toaster from '@/Utils/Notifications';

export default function Header() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        Toaster.notify(`Dark mode ${darkMode ? 'disabled' : 'enabled'}`, 'info', { autoClose: 2000, position: 'top-center' });
    };
    return (
        <SCHeader>
            <Title>Darlan Schwartz Boilerplate</Title>
            <DarkModeToggle onClick={toggleDarkMode}>
                {darkMode ? <FaMoon /> : <FaSun className='rotate' />}
            </DarkModeToggle>
        </SCHeader>
    );
}

const SCHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.background};
    width: 100%;
    height: 100px;
    padding: 10px;
    background-color: ${({ theme }) => theme.background};
    border-bottom: 1px solid ${({ theme }) => theme.gray};
 `;


const Title = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.white};
 `;

const DarkModeToggle = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 30px;
    color: #7ed0ff;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
`;