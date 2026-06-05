function ProductCard(props) {
  return (
    <>
      {
        props.productList.map((product) =>(
          <div>
            <img src={product.image} alt={product.title} width="100%" />
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
          </div>
        ))
      }
    </>
  );
}
export default ProductCard;
