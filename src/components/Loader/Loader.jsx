import { BounceLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <BounceLoader color="#c54141" height={50} width={50} />
    </div>
  );
};

export default Loader;
