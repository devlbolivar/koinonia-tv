import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div``;

export default Recommends;
