"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselControls/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "./EmblaCarouselControls/EmblaCarouselDotButton";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    callout: "HUMANITY",
    title: "Reach People 2025",
    url: "/carousel/group-happy-diverse-volunteers.webp",
    alt: "Group of happy diverse volunteers",
  },
  {
    callout: "EARTH",
    title: "Save Earth 2025",
    url: "/carousel/planet-earth-surrounded-by-nature-vegetation.webp",
    alt: "Planet earth surrounded by nature vegetation",
  },
  {
    callout: "PEACE",
    title: "Find Peace 2025",
    url: "/carousel/pleased-calm-nature-lover-meditating-top-mountain-range.webp",
    alt: "Pleased calm nature lover meditating at the top mountain range",
  },
];

type Item = (typeof carouselItems)[0];

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla p-4">
      <div className="embla__viewport mb-4 overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-10">
          {carouselItems.map(({ callout, title, url, alt }, idx) => (
            <Item
              key={idx}
              callout={callout}
              title={title}
              url={url}
              alt={alt}
            />
          ))}
        </div>
      </div>
      <div className="embla__controls flex items-center justify-between">
        <div className="embla__dots space-x-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "size-3 rounded-full bg-[#e0e0e0]",
                index === selectedIndex ? "bg-blue-500" : "",
              )}
            />
          ))}
        </div>
        <div className="embla__buttons flex items-center gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

function Item({ callout, title, url, alt }: Item) {
  return (
    <div className="embla__slide relative w-fit shrink-0 basis-4xl overflow-hidden rounded-2xl">
      <Image
        src={url}
        className="aspect-video object-cover"
        width={896}
        height={504}
        alt={alt}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[rgba(0,_0,_0,_0.3)] from-20% to-[rgba(166,_166,_166,_0.1)]"
      ></div>
      <div className="absolute inset-0 z-10 p-4">
        <div className="flex h-full flex-col justify-between">
          <p className="text-sm text-white">NEW IMAGE MODEL</p>
          <div>
            <div className="mb-8 text-center text-7xl font-bold text-white text-shadow-2xs">
              {callout}
            </div>
            <div className="flex items-end justify-between">
              <div className="basis-sm text-white">
                <h2 className="mb-4 text-3xl font-semibold">{title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Reprehenderit, dolor repudiandae, nesciunt obcaecati saepe,
                  quia fugiat illum enim.
                </p>
              </div>
              <button className="shrink-0 basis-[100px] rounded-full bg-white px-2.5 py-1.5 dark:text-black">
                Try Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
