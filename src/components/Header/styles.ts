import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  box-shadow: 5px 5px 10px gray, -5px 0 darkgreen;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Text = styled.text`
  color: #ffffff;
  margin-right: 15px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  position: relative;

  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff0000;
  color: #ffffff;
  width: 100%;
  max-width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: "translate(25%, 25%);
`;
