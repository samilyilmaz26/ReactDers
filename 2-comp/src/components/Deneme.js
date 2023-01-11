
 const  Deneme=() => {
  let isim = "Şamil"
  let plist = [
    {"id": 1, "ad": "Şamil", "maas":3000},
    {"id": 2, "ad": "Selen", "maas":4000},
  ]
   
  let  html = plist.map(p=> {
    return (
      <li>{p.id} {p.ad} {p.maas}</li>
    )
})
   return (
    <>
    <p>Deneme Comp</p>
     <p> {isim}</p>
     <h4>Personel Listesi</h4>
     <ul>
      {html}
     </ul>
    </>
     
   )
 }
export default Deneme
 
