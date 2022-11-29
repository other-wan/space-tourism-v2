import classNames from "classnames";
import Button from "components/views/Button";
import { FunctionComponent, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="pb-10 lg:w-[90%] lg:ml-auto lg:h-full lg:pb-20 lg:grid lg:auto-cols-auto lg:auto-rows-auto
      lg:gap-x-20 lg:gap-y-8"
    >
      <h5
        className="w-[90%] mx-auto text-center font-barlow-condensed
        tracking-space-2 text-fs-30 uppercase mb-8 md:mb-14 md:mt-10 md:text-fs-40 md:tracking-space-3
        md:text-left lg:row-start-1 lg:row-end-2 lg:text-fs-60 lg:m-0 lg:w-full"
      >
        <span className="font-bold text-gray-2 mr-2">01</span>&nbsp;Pick your
        destination
      </h5>

      <div
        className="w-[60vw] mx-auto mb-8 md:w-[40vw] lg:m-0 lg:place-self-center
        lg:row-start-2 lg:row-end-4 lg:col-start-1 lg:col-end-2 lg:w-[25vw]"
      >
        <img
          className="w-full h-full object-cover"
          src={destinations[currentIndex].images.png}
          alt={destinations[currentIndex].name}
        />
      </div>

      <ul
        className="flex gap-4 justify-center items-center w-[90%] mx-auto mb-6 md:mb-10
        lg:justify-start lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:m-0
        lg:max-w-[27.8125rem] lg:w-full"
      >
        {destinations.map((_, index) => (
          <li key={_.name}>
            <Button
              className={classNames(
                "text-accent text-fs-10 font-barlow-condensed tracking-space-1 uppercase py-2 border-b-2 border-transparent \
                md:text-fs-30 md:tracking-space-2",
                { ["!border-white !text-white"]: currentIndex === index }
              )}
              onClick={() => setCurrentIndex(index)}
            >
              {_.name}
            </Button>
          </li>
        ))}
      </ul>

      <article
        className="w-[90%] mx-auto text-center md:max-w-[38.8125rem] md:mb-0
        lg:text-left lg:m-0 lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3
        lg:max-w-[27.8125rem] lg:w-full"
      >
        <h3
          className="text-fs-90 uppercase font-bellefair font-normal md:mb-4 md:text-fs-100 lg:text-fs-90
          whitespace-nowrap"
        >
          {destinations[currentIndex].name}
        </h3>
        <p className="text-fs-20 text-accent font-barlow leading-6 mb-8 md:text-fs-30 lg:text-fs-[18px]">
          {destinations[currentIndex].description}
        </p>

        <div
          className="pt-8 border-t border-gray-3 flex flex-col gap-8 md:flex-row md:justify-center md:gap-16
          lg:justify-start"
        >
          <div className="">
            <span className="block text-accent text-fs-10 tracking-space-1 font-barlow-condensed uppercase mb-3">
              AVG. DISTANCE
            </span>
            <span className="block text-fs-60 font-bellefair uppercase">
              {destinations[currentIndex].distance}
            </span>
          </div>

          <div>
            <span className="block text-accent text-fs-10 tracking-space-1 font-barlow-condensed uppercase mb-3">
              Est. travel time
            </span>
            <span className="block text-fs-60 font-bellefair uppercase">
              {destinations[currentIndex].travel}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Destination;
