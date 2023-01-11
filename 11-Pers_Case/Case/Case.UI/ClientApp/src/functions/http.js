import axios from 'axios';

const url ='https://localhost:7097/';

export async function getPersonels() {
    const response = await axios.get(url + 'Personel/GetPersonels');
  
    const Personels = [];
    for (const key in response.data) {
      const PersonelObj = {
          id: key,
          id: response.data[key].id,
        firstName: response.data[key].firstName,
        lastName: response.data[key].lastName,
        gender: response.data[key].gender,
          phone: response.data[key].phone,
          car: response.data[key].car,
          computer: response.data[key].computer,
        graduation: response.data[key].graduation

        };
        
      Personels.push(PersonelObj);
    }
    return Personels;
  }
  export async function addSelectedPersonel(Personel){
      const response = await axios.post(url + `Personel/CreatePersonel`, Personel);
    const id =response.data.name;
    return id;
  }
export function updateSelectedPersonel(PersonelData) {
    return axios.put(url + `Personel/Update/`, PersonelData);
  }
  export function getPersonel(id){
    return axios.get(url+`Personel/GetPersonelById/${id}`)
  }
  export function deleteSelectedPersonel(id){
    return axios.delete(url+`Personel/Delete/${id}`)
  }
