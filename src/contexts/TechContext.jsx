import { createContext } from "react";

export const TechContext = createContext({});

const teste = "TESTE PROV"



export function TechProviders ({children}) {
    return (
        <TechContext.Provider value={{teste}}>
            {children}
        </TechContext.Provider>
    )
}