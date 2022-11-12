import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import styles from "../styles/pages/HomePage.module.css";

const baseUrl = "https://dummyapi.io/data/v1/";

export const HomePage = () => {
  const [pos, setPos] = useState(0);
  const [data, setData] = useState(null);

  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  useEffect(() => {
    axios
      .get(baseUrl + "user", {
        headers: {
          "app-id": "636f2f24e8d0ffd9c83fc52f",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* Section 1 */}

      <div className={styles.sectionOne}>
        <Container>
          <div className={styles.card}>
            <h1>Non nostrud non non tempor proident ut pariatur dolor.</h1>
            <p>
              Adipisicing eiusmod laborum nulla quis do. Id ad dolor laboris
              aliqua cupidatat commodo consequat irure sit enim. Cillum deserunt
              nostrud elit anim dolore duis id anim tempor. Minim Lorem
              reprehenderit proident cillum deserunt occaecat dolor nostrud
              sunt.
            </p>
            <div>
              <input />
              <Button></Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Section 2 */}

      <div className={styles.sectionTwo}>
        <Container>
          <div className={styles.cards}>
            <div
              style={{
                transform: `translateX(${-10 * pos}%)`,
                transition: "300ms",
              }}
            >
              {new Array(10).fill(0).map((_, index) => (
                <Item index={index} />
              ))}
            </div>
          </div>
          <Button onClick={goLeft}>Left</Button>
          <Button onClick={goRight}>Right</Button>
        </Container>
      </div>

      {/* Section 3 */}

      <div>
        {!data && <Spinner />}
        {data && data.data.map((item) => <Item {...item} />)}
      </div>
    </div>
  );
};

const Item = (props) => {
  return (
    <Card style={{ width: 300, marginRight: 16 }}>
      <Card.Body>
        <Card.Title>{props.firstName}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
};
