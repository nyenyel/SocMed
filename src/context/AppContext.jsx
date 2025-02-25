import React, { createContext, useContext, useState } from 'react'

export const AppContext = createContext();

export default function AppProvider({children}) {
    const [data, setData] = useState([
        {id: 1, name: "John", post: "First Post"},
        {id: 2, name: "Ken", post: "Second Post"},
        {id: 3, name: "Kikyam", post: "Third Post"},
        {id: 4, name: "Jean", post: "Fourth  Post"},
        {id: 5, name: "Cath", post: "Fifth  Post"},
        {id: 6, name: "Aaron", post: "Sixth Post"},
        {id: 7, name: "Joe", post: "Seventh Post"},
        {id: 8, name: "Diddy", post: "Eight  Post"},
        {id: 9, name: "West", post: "Nineth  Post"},
    ])

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)