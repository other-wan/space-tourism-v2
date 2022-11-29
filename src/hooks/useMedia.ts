import { useLayoutEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const useMedia = (query: string) => {
  const breakpoint = useMediaQuery(query);

  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    breakpoint ? setMatches(true) : setMatches(false);
  }, [breakpoint]);

  return matches;
};

export default useMedia;
