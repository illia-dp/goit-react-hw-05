import css from "./Heading.module.css";
import clsx from "clsx";
const Heading = ({ title, bottom, top, variant, tag: Tag = "h2" }) => {
  return (
    <Tag
      className={clsx(css.title, {
        [css.bottom]: bottom,
        [css.top]: top,
        [css[variant]]: variant,
      })}
    >
      {title}
    </Tag>
  );
};

export default Heading;
