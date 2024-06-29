import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageHome from '@/Pages/Home.page';
import Header from '@/Components/Header.component';
import PageExample from '@/Pages/Example.page';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/example" element={<PageExample />} />
      </Routes>
    </BrowserRouter>
  );
}