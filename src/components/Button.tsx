import { IButton } from "../interfaces/interfaces";

export const Button = ({ func, title }: IButton) => {
  return (
    <button className="control__btn" type="submit" onClick={func}>{title}</button>
  );
};
