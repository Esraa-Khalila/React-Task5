
import React  from 'react';
import {useState } from 'react';
export const context = React.createContext();
function Conte(children) {
  const [Flag, setflag] = useState(false);
  //    console.log(Flag);
  return <context.Provider value={ Flag }>{children}</context.Provider>;
}
export default Conte