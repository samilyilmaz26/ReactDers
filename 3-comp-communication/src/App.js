import Personel from "./components/Personel";

function App() {
  let baslik = "Personel Listesi"
  let plist = [
    {"id": 1, "ad": "Şamil", "maas":3000},
    {"id": 2, "ad": "Selen", "maas":4000},
  ]
  return (
    <>
    <Personel baslikx = {baslik} plist = {plist}/>
    </>
  )
}

export default App;
