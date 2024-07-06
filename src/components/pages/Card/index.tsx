import { HiShoppingCart } from "react-icons/hi";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Product } from "../../../interfaces";
import { useAppDispatch } from "../../../redux/hooks";
import { addItem } from "../../../redux/reducer/cardSlice";
// Styled-components for custom styling
const Card = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0 0px 10px #e5e0e0;
  border-radius: 20px;
  .texts {
    padding: 20px;
  }
  .img {
    overflow: hidden;
    border-radius: 20px;
  }
  .img img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: 0.4s all;
  }
  .img img:hover {
    transform: scale(1.2);
  }
`;

const ShoppingCard: React.FC<Product> = (props) => {
  const dispatch = useAppDispatch();
  const handleAdd = (data: Product): void => {
    dispatch(addItem(data));
  };
  return (
    <>
      <Card>
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="texts">
          <h2>{props.title.slice(0, 20)}</h2>
          <h3 style={{ padding: "10px 0" }}>{props.category}</h3>
          <p>{props.description.slice(0, 60) + "..."}</p>
          <h3>{props.price} $</h3> <br />
          <Button type="primary" size="large" onClick={() => handleAdd(props)}>
            Add to Cart <HiShoppingCart size={22} />
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ShoppingCard;
