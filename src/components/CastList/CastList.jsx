import { Link } from "react-router-dom";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import css from "./CastList.module.css";

const CastList = ({ castList }) => {
  return (
    <Grid>
      {castList
        .filter((actor) => actor.profile_path !== null)
        .map((actor) => (
          <GridItem key={actor.id}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </GridItem>
        ))}
    </Grid>
  );
};

export default CastList;
