import { FunctionComponent, MouseEventHandler, ReactNode } from "react";

interface ITechButton {
  children?: ReactNode;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<ITechButton> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
