import { Button, Container } from "react-bootstrap";
import styles from "../styles/pages/HomePage.module.css";

export const HomePage = () => {
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

      <div className={styles.sectionTwo}></div>

      {/* Section 3 */}

      <div></div>
    </div>
  );
};
