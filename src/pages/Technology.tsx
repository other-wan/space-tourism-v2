import classNames from "classnames";
import Button from "components/views/Button";
import useMedia from "hooks/useMedia";
import { FunctionComponent, useState } from "react";

interface ITechnologies {
  technologies: Array<{
    name: string;
    description: string;
    images: {
      portrait: string;
      landscape: string;
    };
  }>;
}

const Technology: FunctionComponent<ITechnologies> = ({ technologies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isLaptop = useMedia("(min-width: 1024px)");

  return (
    <div
      className="pb-10 lg:p-0 lg:w-[90%] lg:ml-auto lg:grid lg:auto-rows-auto lg:auto-cols-auto
      lg:gap-x-10 lg:h-full lg:pb-7"
    >
      <h5
        className="w-[90%] mx-auto text-center font-barlow-condensed
        tracking-space-2 text-fs-30 uppercase mb-8 md:mb-14 md:mt-10 md:text-fs-40 md:tracking-space-3
        md:text-left lg:text-fs-60 lg:m-0 lg:row-start-1 lg:row-end-2 lg:col-span-3 lg:mb-6"
      >
        <span className="font-bold text-gray-2 mr-2">03</span>&nbsp;Space Launch
        101
      </h5>

      <div
        className="w-full h-[30vh] mb-8 md:mb-14 md:min-h-[19.375rem] lg:row-start-2 lg:row-end-3 
        lg:col-start-3 lg:col-end-4 lg:m-0 lg:h-[55vh] lg:max-h-[32.9375rem] lg:ml-auto"
      >
        <img
          className="w-full h-full object-cover lg:w-auto lg:ml-auto"
          src={
            !isLaptop
              ? technologies[currentIndex].images.landscape
              : technologies[currentIndex].images.portrait
          }
          alt="Space Launch"
        />
      </div>

      <ul
        className="flex gap-4 justify-center items-center w-[90%] mx-auto mb-6 lg:m-0
        lg:items-start lg:flex-col lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2"
      >
        {technologies.map((_, index) => (
          <li key={_.name}>
            <Button
              className={classNames(
                "w-10 h-10 rounded-full text-fs-10 font-bellefair md:w-[3.75rem] md:h-[3.75rem] md:text-fs-40",
                {
                  ["ring-1 ring-white"]: currentIndex !== index,
                  ["text-main-1 bg-white"]: currentIndex === index,
                }
              )}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </Button>
          </li>
        ))}
      </ul>

      <article
        className="w-[90%] mx-auto text-center  md:max-w-[28.625rem] lg:m-0 lg:text-left lg:max-w-[29.375rem]
        lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:self-center"
      >
        <h4
          className="text-fs-10 uppercase tracking-space-1 text-accent font-barlow-condensed mb-2
        md:text-fs-30 md:tracking-space-2 md:mb-4 lg:mb-3"
        >
          THE TERMINOLOGY…
        </h4>
        <h3
          className="text-fs-50 uppercase font-bellefair font-normal md:mb-4 md:text-fs-80 lg:text-fs-90
          whitespace-nowrap"
        >
          {technologies[currentIndex].name}
        </h3>
        <p className="text-fs-20 text-accent font-barlow leading-6 md:text-fs-30 lg:text-fs-[18px]">
          {technologies[currentIndex].description}
        </p>
      </article>
    </div>
  );
};

export default Technology;
