import { createContext, useContext, useState } from 'react';

//creating the global context
const GlobalContext = createContext();
//setting the app context provider
export const useGlobalContext = () => useContext(GlobalContext);
const AppContext = props => {
  //set the value
  const [name, setName] = useState('kanadika');
  //give the value to the context provider
  return <GlobalContext.Provider value={{ name, setName }}>{props.children}</GlobalContext.Provider>;
};

export default AppContext;
