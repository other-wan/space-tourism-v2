import { ReactNode } from "react";

interface IListManager<P> {
  data: P[];
  renderItem: (item: P, index?: number) => ReactNode;
  className?: { list: string; item: string };
}

const ListManager = <P,>({ data, renderItem, className }: IListManager<P>) => {
  return (
    <ul className={className?.list}>
      {data.map((item, index) => (
        <li key={index} className={className?.item}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default ListManager;
