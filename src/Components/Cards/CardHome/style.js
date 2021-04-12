import styled from "styled-components";

export const Container = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  /* box-shadow: 0 0 0.2rem 0.01rem #00000090; */
`;

export const Art = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  color: #c4fd2e;
  .ico {
    font-size: 8rem;
  }
  .checked {
    font-size: 4rem;
  }
  span {
    background: #0ec977;
    width: 6rem;
    height: 3px;
    margin: 0.3rem;
    border-radius: 2rem;
  }
`;

export const Msg = styled.p`
  width: 100%;
  height: auto;
  color: #f6f2f9;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: justify;
  margin-bottom: 1rem;
`;

export const ButtonClient = styled.button`
  width: 80%;
  height: 2.5rem;
  background: #c2f244;
  color: #7000ff;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  &&:hover {
    background: #f9f900;
    color: #000;
  }
`;

export const ButtonStore = styled.button`
  width: 80%;
  height: 2.5rem;
  background: #d6fa7a;
  color: #00710b;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 0.2rem 0.01rem #00000090;
  &&:hover {
    background: #f9f900;
    color: #000;
  }
`;
