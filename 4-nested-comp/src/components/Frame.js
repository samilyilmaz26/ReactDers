import React from 'react'

export default function Frame(props) {
  return (
    <div className="border border-danger rounded">
     <div>
        {props.children}
     </div>
     <hr />
     <input type="submit" className="btn btn-danger" value= "Sil" /> 
     <input type="submit" className="btn btn-warning" value= "İptal" /> 
     <hr></hr>
</div>
       
  )
}

