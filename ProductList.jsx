import ProductCard from './ProductCard.jsx'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'

function ProductList(){
    const product=[
        {
            title:"iphone17pro",
            price:'99999',
            rating:4.8,
            image:img1

        },
        {
            title:"vivo y58",
            price:'20000',
            rating:4.9,
            image:img2

        }
    ]
    return(
        <>
        <h1 > Our Product</h1>
        <ProductCard productList={product} />

        </>
    );

}
export default ProductList