export const getImagePath = (pathname: string, type: string) => {
  switch (pathname) {
    case "/":
      return `/images/home/background-home-${type}.jpg`;

    case "/destination":
      return `/images/destination/background-destination-${type}.jpg`;

    case "/crew":
      return `/images/crew/background-crew-${type}.jpg`;

    case "/technology":
      return `/images/technology/background-technology-${type}.jpg`;

    default:
      return `/images/home/background-home-${type}.jpg`;
  }
};
