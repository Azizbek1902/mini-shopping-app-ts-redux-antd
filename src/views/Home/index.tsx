import { useEffect, useState } from "react";
import ShoppingCard from "../../components/pages/Card";
import { Product } from "../../interfaces";
import axios from "axios";
import styled from "styled-components";

function Home() {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const Grid = styled.div`
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    gap: 30px;
  `;
  return (
    <div style={{ width: "100%", padding: "50px 100px" }}>
      <h1>Mahsulotlar</h1> <br />
      <Grid>
        {products?.map((item) => (
          <ShoppingCard
            id={item.id}
            category={item.category}
            description={item.description}
            image={item.image}
            price={item.price}
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            rating={item.rating}
            totalPrice={item.totalPrice}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
