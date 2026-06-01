import react ,{createContext} from 'react';
import Comp from './Comp';
const Fname=createContext();
function Main1(){
    return(
        <>
        <Fname.Provider value='Ram'>
            <Comp/>
        </Fname.Provider>
        </>
    )
}
export default Main1;
export {Fname}
