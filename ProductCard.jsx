function ProductCard(props){
    return(
        <>
        {
            props.productList.map((product,index)=>(
                <div>
                    <img src={product.image} alt={product.title} width='40%'/>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>

                </div>
            ))
        }
        </>
    );
}
export default ProductCard