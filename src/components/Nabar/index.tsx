import { SlLogout } from "react-icons/sl";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteToken } from "../../redux/reducer/token";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #001529;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
`;

const MenuItem = styled.li`
  margin-left: 2rem;
  font-size: 18px;
  &:hover {
    color: #1890ff;
  }
`;

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cardSlice.items);
  const handleLogout = (): void => {
    localStorage.removeItem("token");
    dispatch(deleteToken(""));
  };
  return (
    <div>
      <NavbarContainer>
        <Logo>Shopping Cart</Logo>
        <Menu>
          <MenuItem>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "noAcitve"
              }
            >
              Productss
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : "noAcitve"
              }
            >
              Cart
              {products.length > 0 ? (
                <span
                  style={{
                    backgroundColor: "green",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "-12px",
                    right: "-4px",
                    fontSize: "14px",
                    fontWeight: 600,
                    width: "23px",
                    height: "23px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {products.length}
                </span>
              ) : null}
            </NavLink>
          </MenuItem>
        </Menu>
        <Button type="primary" onClick={handleLogout}>
          Logout <SlLogout size={20} />
        </Button>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
