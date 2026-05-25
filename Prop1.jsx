import Prop2 from './Prop2';
function Prop1(){
    var n='abc';
    return(
        <>
        <Prop2 name={n} rollnum='101' marks={20}/>
        <Prop2 name='def' rollnum='102' marks={16}/>
        <Prop2 name='Ghz' rollnum='103' marks='22'/>

        
        </>
    );

}
export default Prop1;