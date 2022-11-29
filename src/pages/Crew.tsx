import classNames from "classnames";
import Button from "components/views/Button";
import { FunctionComponent, useState } from "react";

interface ICrews {
  crews: Array<{
    name: string;
    role: string;
    bio: string;
    images: {
      png: string;
      webp: string;
    };
  }>;
}

const Crew: FunctionComponent<ICrews> = ({ crews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className="pb-10 md:grid md:auto-rows-auto md:p-0 md:h-full lg:w-[90%] lg:ml-auto lg:grid 
      lg:auto-rows-auto lg:auto-cols-auto lg:gap-x-20 lg:gap-y-8 lg:p-0"
    >
      <h5
        className="w-[90%] mx-auto text-center font-barlow-condensed
        tracking-space-2 text-fs-30 uppercase mb-8 md:mb-14 md:mt-10 md:text-fs-40 md:tracking-space-3
        md:text-left md:row-start-1 md:row-end-2 lg:m-0 lg:text-fs-60"
      >
        <span className="font-bold text-gray-2 mr-2">02</span>&nbsp;Meet your
        crew
      </h5>

      <div
        className="w-[60vw] mx-auto mb-8 border-b border-gray-3 
        md:row-start-4 md:row-end-5 md:w-full md:h-full md:m-0 md:border-0
        lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 lg:h-[70vh] lg:mt-auto"
      >
        <img
          className="w-full h-full object-cover mx-auto md:w-auto"
          src={crews[currentIndex].images.png}
          alt={crews[currentIndex].name}
        />
      </div>

      <ul
        className="flex gap-4 justify-center items-center w-[90%] mx-auto mb-6 
        md:row-start-3 md:row-end-4 md:mb-10 lg:w-full lg:mx-0 lg:justify-start lg:gap-6"
      >
        {crews.map((_, index) => (
          <li key={_.name}>
            <Button
              className={classNames("w-3 h-3 rounded-full lg:w-4 lg:h-4", {
                ["bg-gray-2"]: currentIndex !== index,
                [" bg-white"]: currentIndex === index,
              })}
              onClick={() => setCurrentIndex(index)}
            ></Button>
          </li>
        ))}
      </ul>

      <article
        className="w-[90%] mx-auto text-center md:max-w-[28.625rem] md:row-start-2 md:row-end-3
        md:mb-10 lg:text-left lg:m-0 lg:self-center lg:w-full"
      >
        <h4
          className="text-fs-30 uppercase text-gray-2 font-bellefair mb-2
        md:text-fs-30 md:tracking-space-2 md:mb-4 lg:mb-3"
        >
          {crews[currentIndex].role}
        </h4>
        <h3
          className="text-fs-50 uppercase font-bellefair font-normal md:mb-4 md:text-fs-80 lg:text-fs-90
          whitespace-nowrap"
        >
          {crews[currentIndex].name}
        </h3>
        <p className="text-fs-20 text-accent font-barlow leading-6 md:text-fs-30 lg:text-fs-[18px]">
          {crews[currentIndex].bio}
        </p>
      </article>
    </div>
  );
};

export default Crew;
