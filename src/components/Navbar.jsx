import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../providers/ThemeProvider";
import styles from "../styles/components/Navbar.module.css";

const routes = [
  { name: "Products", to: "/" },
  { name: "Services", to: "blog" },
  { name: "Contacts", to: "post" },
];

export const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);

  return (
    <div
      className={styles.container}
      style={isDark ? { background: "#000", color: "#fff" } : {}}
    >
      <Container>
        <div className={styles.innerContainer}>
          {/* Logo */}

          <Button onClick={toggleTheme}>Logo</Button>

          {/* Routes */}

          <div>
            {routes.map(({ name, to }) => (
              <Link key={name} to={to}>
                {name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
