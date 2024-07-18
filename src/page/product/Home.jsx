import {useEffect, useState} from "react";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then((res)=> res.json())
      .then((res) => {
        console.log(1,res);
        setProducts(res);
      })
  }, []); // deps가 변경될때 실행

  return(
    <div className='Home'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Home;