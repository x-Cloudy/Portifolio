import { useState, createContext } from "react";

export const PageContext = createContext(null);

export const PageProvider = ({children}) => {
  const [page, setPage] = useState('Home');
  
  function setCurrentPage(value) {
    setPage((prev) => {
      prev = value;
      return prev
    })
  }
  return (
    <PageContext.Provider value={{page, setCurrentPage}}>
      {children}
    </PageContext.Provider>
  )
}
