
export const Button = ({ func, title }) => {
  return (
    <button className="control__btn" type="submit" onClick={func}>{title}</button>
  );
};
