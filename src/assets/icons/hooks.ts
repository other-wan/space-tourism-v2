import useMedia from "hooks/useMedia";
import { useLayoutEffect, useState } from "react";

interface ISize {
  width: string;
  height: string;
}

export const useSize = (mobile: ISize, laptop: ISize) => {
  const matches = useMedia("(max-width: 1024px)");

  const [size, setSize] = useState<ISize>(mobile);

  useLayoutEffect(() => {
    matches ? setSize(mobile) : setSize(laptop);
  }, [matches]);

  return size;
};
