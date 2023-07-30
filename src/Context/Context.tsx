import React, { useState, createContext, FC } from 'react';

interface ContextValue {
    // state: string;
    // setState: React.Dispatch<React.SetStateAction<string>>;
    cartData:Array<[]>
    setCartData:React.Dispatch<React.SetStateAction<[]>>
}
interface ContextProps {
    children: React.ReactNode;
}
export const MyContext = createContext<ContextValue | null>(null);
const Context: FC<ContextProps> = ({ children }) => {
    const [cartData, setCartData] = useState<[]>([]);
    const contextValue: ContextValue = {
        
        cartData, 
        setCartData
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export default Context;