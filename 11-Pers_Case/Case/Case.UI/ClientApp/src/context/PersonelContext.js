import { createContext, useReducer } from "react";


export const PersonelContext = createContext(
    {
        Personels: [],
        sortDesc: (Personels) => { },
        deletePersonel: (id) => { },
        addPersonel: ({ firstName, lastName, gender, phone, car, computer, graduation }) => { },
        updatePersonel: ({ id, firstName, lastName, gender, phone, car, computer, graduation }) => { },
    });

function PersonelReducer(state, action) {
    switch (action.type) {
        case "SORTD":
            const inverted = action.payload.reverse();
            return inverted;
        case 'DELETE':
            return state.filter((b) => b.id !== action.payload)
        case 'ADD':
            return [action.payload, ...state]
        case 'UPDATE':
            const index =state.findIndex(
                (Personel)=>Personel.id===action.payload.id
            );
            const updatablePersonel =state[index];
            const updatedItem ={...updatablePersonel,...action.payload.data};
            const updatedPersonels=[...state];
            updatedPersonels[index]=updatedItem;

            return updatedPersonels

        default:
            return state
    }
}
function PersonelProvider({ children }) {
    const [PersonelState, dispatch] = useReducer(PersonelReducer, [])
    function sortDesc(Personeldata) {
        console.log(Personeldata);
        dispatch({ type: 'SORTD', payload: Personeldata });
    }
    function deletePersonel(id) {
        dispatch({ type: "DELETE", payload: id });
    }
    function addPersonel(PersonelData) {
        dispatch({ type: 'ADD', payload: PersonelData })
    }
    function updatePersonel(id, PersonelData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: PersonelData } })
    }
    const value = {
        Personels: PersonelState,
        sortDesc: sortDesc,
        deletePersonel: deletePersonel,
        addPersonel: addPersonel,
        updatePersonel: updatePersonel

    };
    return (
        <PersonelContext.Provider value={value}>
            {children}
        </PersonelContext.Provider>
    );
}
export default PersonelProvider