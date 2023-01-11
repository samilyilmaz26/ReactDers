import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonelList from "./components/PersonelList";
import PersonelCreate from "./components/PersonelCreate";
import PersonelUpdate from "./components/PersonelUpdate";

function App() {
  return (
    <div className="container-fluid">
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<PersonelList />} />
        <Route path="/Personel/all" element={<PersonelList />} />
        <Route path="/Personel/create" element={<PersonelCreate />} />
        <Route path="/Personel/update/:id" element={<PersonelUpdate />} />
        <Route path="/Personel/update/" element={<PersonelUpdate />} />
      </Routes>
    </BrowserRouter>

  </div>
  );
}
export default App;
