import React, { useReducer, createContext } from "react";

const initialState = {
    brands: [
        {
            brand: 'Ayam Koplo',
            kind: 'Ayam Geprek',
            nav: 'ayam-koplo',
            brandImage: '/static/ayamkoplo.png',
            foodImage: '/static/ayamkoplofood.png',
            from: 'Indonesia'
        },
        {
            brand: 'San Gyu',
            kind: 'Beef Bowl',
            nav: 'san-gyu',
            brandImage: '/static/sangyu.png',
            foodImage: '/static/sangyufood.png',
            from: 'Jepang'
        },
        {
            brand: 'Bude Sari',
            kind: 'Nasi Ayam',
            nav: 'nasi-ayam-bude-sari',
            brandImage: '/static/budesari.png',
            foodImage: '/static/budesarifood.png',
            from: 'Indonesia'
        },
        {
            brand: 'Kopi Dari|Pada',
            kind: 'Minuman',
            nav: 'kopi-dari-pada',
            brandImage: '/static/daripada.png',
            foodImage: '/static/daripadafood.png',
            from: 'Indonesia'
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state] = useReducer(null, initialState);


    const valueVar = {
        //state
        state,
    }

    return <GlobalContext.Provider value={valueVar}>{children}</GlobalContext.Provider>
}

export default GlobalProvider;