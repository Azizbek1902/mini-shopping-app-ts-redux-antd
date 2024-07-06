import { MdOutlineDeleteSweep } from "react-icons/md";
import styled from "styled-components";
import { Product } from "../../../interfaces";
import { useAppDispatch } from "../../../redux/hooks";
import {
  minusQuantity,
  plusQuantity,
  removeItem,
} from "../../../redux/reducer/cardSlice";
import { Button } from "antd";

const CardWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  border: 1px solid gray;
  padding: 15px;
  gap: 20px;
  position: relative;
  height: 200px;
  .texts {
    width: 70%;
  }
  .img {
    width: 30%;
    border-radius: 10px;
    object-fit: contain;
  }
  .price {
    align-items: center;
    gap: 20px;
    display: flex;
    right: 0px;
    position: absolute;
    bottom: 10px;
  }
  .price h2 {
    max-width: 100%;
    width: 110px;
    text-align: center;
  }
  .price h4 {
    width: 25px;
    text-align: center;
  }
  .qunatity {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .btn {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #191765;
    color: white;
    cursor: pointer;
    font-size: 25px;
  }
`;

const ShoppCart: React.FC<Product> = (props) => {
  const dispatch = useAppDispatch();
  const handleMinus = (data: Product): void => {
    dispatch(minusQuantity(data));
  };
  const handlePlus = (data: Product): void => {
    dispatch(plusQuantity(data));
  };
  const handleRemove = (id: number): void => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <CardWrap>
        <Button
          type="default"
          style={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={() => handleRemove(props.id)}
        >
          <MdOutlineDeleteSweep size={22} />
        </Button>
        <img src={props.image} className="img" alt="" />
        <div className="texts">
          <h3 style={{ marginRight: "42px" }}>{props.title.slice(0, 60)}</h3>
          <h5>{props.category}</h5>
          <p>{props.description.slice(0, 180)}</p>
          <div className="price">
            <h2>{props.price} $</h2>
            <div className="qunatity">
              <button className="btn" onClick={() => handleMinus(props)}>
                -
              </button>{" "}
              <h4>{props.quantity}</h4>
              <button onClick={() => handlePlus(props)} className="btn">
                +
              </button>
            </div>
            <h2>{props.totalPrice} $</h2>
          </div>
        </div>
      </CardWrap>
    </div>
  );
};

export default ShoppCart;
