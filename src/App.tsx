import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from '@/Pages/Home.page';
import Header from '@/Components/Header.component';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
    </BrowserRouter>
  );
}