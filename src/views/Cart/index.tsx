import { Button, Col, Input, Row } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ShoppCart from "../../components/pages/ShoppCard";
import styled from "styled-components";
import { selectTotalPrice } from "../../redux/selectors";
import { clear } from "../../redux/reducer/cardSlice";
import { useState } from "react";

const Cardsend = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
`;

function Cart() {
  const products = useAppSelector((state) => state.cardSlice.items);
  const totalPrice = useAppSelector(selectTotalPrice);
  const [title, setTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleSend = (): void => {
    dispatch(clear());
    setTitle("");
  };
  return (
    <div style={{ padding: "50px 160px 40px 160px" }}>
      <h1>Cart page </h1> <br />
      <Row gutter={[16, 26]}>
        <Col span={19}>
          <Row gutter={[16, 26]}>
            {products.map((item) => (
              <Col span={12} key={item.id}>
                <ShoppCart
                  id={item.id}
                  totalPrice={item.totalPrice}
                  category={item.category}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  key={item.id}
                  title={item.title}
                  quantity={item.quantity}
                  rating={item.rating}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={5}>
          <Cardsend>
            <h2 style={{ textAlign: "center" }}>Buyurtmalaringiz</h2> <br />
            <h3>Mahsulotlar soni : ({products.length})</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h3>Jami: </h3>
              <h2>{totalPrice} $</h2>
            </div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="large"
              placeholder="Title"
            />
            <Button
              onClick={() => handleSend()}
              type="primary"
              style={{ marginTop: "20px", width: "100%" }}
              size="large"
            >
              Buyurtma berish
            </Button>
          </Cardsend>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
