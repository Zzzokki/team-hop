import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import styles from "../styles/pages/HomePage.module.css";

const baseUrl = "https://dummyapi.io/data/v1/";

export const HomePage = () => {
  const [pos, setPos] = useState(0);
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  const nextPage = () => {
    setData(null);
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setData(null);
    setPage((prev) => {
      if (prev > 0) return prev - 1;
    });
  };

  useEffect(() => {
    axios
      .get(baseUrl + `user?limit=${limit}&page=${page}`, {
        headers: {
          "app-id": "636f2f24e8d0ffd9c83fc52f",
        },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, limit]);

  return (
    <div style={{ padding: "80px 0px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
      >
        {!data && <Spinner />}
        {data && data.map((item) => <Item key={item.id} {...item} />)}
      </div>

      <Button onClick={prevPage}>prev</Button>
      <Button onClick={nextPage}>next</Button>
    </div>
  );
};

const Item = (props) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Card style={{ width: 300, marginRight: 16 }}>
        <Card.Body>
          <Card.Title>{props.firstName}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">{props.buttonText}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
