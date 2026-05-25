import './My.css'
import img1 from  './assets/hero.png'
function Myapp(){
    const name='reactVite'
    return(
        <>
        {/*inline css*/}
        <h1 style={{color:'blue',fontStyle:'italic',fontSize:'25px'}}>Welcome to {name}</h1>

        {/* External css using class name*/}
        <p className='para'>Jsx allow Writing html-Like Code INside js</p>

        {/*Orderd List */}
        <h3>List of fruit</h3>
        <ol type='a'>
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
        </ol>
        {/* image from accets folder */}
        <img src={img1} alt='fruit' width='200'/>
        {/* image from public folder */}
        <img src='./favicon.svg' alt='logo' width='200'/>
        
        </>
    )
}
export default Myapp






















// function Myapp() {
//     const n = "lju"; 
//     return (
//       <div>
//         <h1>{n}</h1>
//         <h1>'{n}'</h1>
//         <h1>{'{n}'}</h1>
//         <h1>{'{n}'}</h1>
//         <h1>{'n'}</h1>
//         <h1>{n + 'test'}</h1>
//         <h1>{n.toUpperCase()}</h1>
//         <h1>{5 + 5}</h1>
//         <h1>{[1, 2, 3]}</h1>
//         <h1>{[1, 2, 3].join(',')}</h1>
//       </div>
//     );
//   }
  
// export default Myapp;
  