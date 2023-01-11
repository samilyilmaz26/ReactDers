 
// export default function Personel(props) {
//     let renderList = props.plist.map(p=> {
//      return <li>{p.id} {p.ad} {p.maas} </li>
//     })
//   return (
//     <>
//     <h3>{props.baslik}</h3>
//     <hr /> 
//     <ul>
//         {renderList}
//     </ul>
//     </>
//   )
// }
export default function Personel({baslikx,plist}) {
  let renderList = plist.map(p=> {
   return <li>{p.id} {p.ad} {p.maas} </li>
  })
return (
  <>
  <h3>{baslikx}</h3>
  <hr /> 
  <ul>
      {renderList}
  </ul>
  </>
)
}

