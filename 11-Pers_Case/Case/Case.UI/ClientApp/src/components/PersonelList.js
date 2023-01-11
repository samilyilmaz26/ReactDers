import { getPersonels } from '../functions/http'
import PersonelTable from './PersonelTable';
import { PersonelContext } from '../context/PersonelContext';
import { useContext, useEffect } from 'react'

export default function PersonelList() {
  const PersonelCtx = useContext(PersonelContext)
  useEffect(() => {
    async function getAllPersonels() {
      try {
        const Personels = await getPersonels()
        PersonelCtx.sortDesc(Personels)
      } catch (error) {
        console.log(error);
      }
    }
    getAllPersonels()
  }, [])
  return(
    <>
    <PersonelTable heading={"All Personels"} Personels={PersonelCtx.Personels}/>
    </>
  )

}
