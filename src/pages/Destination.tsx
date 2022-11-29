import { FunctionComponent } from "react";

interface IDestinations {
  destinations: Array<{
    name: string;
    description: string;
    distance: string;
    travel: string;
    images: {
      png: string;
      webp: string;
    };
  }>;
}

const Destination: FunctionComponent<IDestinations> = ({ destinations }) => {
  return <div>Destination</div>;
};

export default Destination;
