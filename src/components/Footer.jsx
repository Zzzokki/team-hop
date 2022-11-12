import { Button, Container } from "react-bootstrap";
import styles from "../styles/components/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.flexContainer}>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            <h4>Subscribe to our newsletter</h4>
            <Button
              style={{
                width: "100%",
                borderRadius: 0,
                marginTop: 24,
                textAlign: "left",
              }}
              size="lg"
              variant="light"
            >
              Email
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
