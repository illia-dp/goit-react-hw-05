import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import Section from "../../components/Section/Section";
import Container from "../../components/Container/Container";

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <h1 className={css.title}>404</h1>
        <p className={css.text}>Not Found</p>
        <Link className={css.button} to={"/"}>
          Go Home
        </Link>
      </Container>
    </Section>
  );
};

export default NotFoundPage;
