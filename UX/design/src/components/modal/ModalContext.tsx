import {createContext, ReactNode, useState} from "react";


interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}


interface ModalProviderProps {
  children: React.ReactNode;
}


export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
})

export const ModalContextProvider = ({children} : ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)


  return (
    <ModalContext.Provider value={{isOpen: isOpen, open: open, close: close}}>
      {children}
    </ModalContext.Provider>
  )
}