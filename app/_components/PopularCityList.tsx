"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full pt-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destination to Visit
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Paris, France",
    title: "The city of lights, home to the Eiffel Tower and Louvre Museum.",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "A bustling city blending tradition with futuristic technology.",
    src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "New York, USA",
    title: "The city that never sleeps, famous for Times Square and Central Park.",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Sydney, Australia",
    title: "Known for the Sydney Opera House and beautiful beaches.",
    src: "https://images.unsplash.com/photo-1506976785307-8732e854ad89?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "A modern desert city famous for Burj Khalifa and luxury shopping.",
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Rome, Italy",
    title: "The Eternal City, filled with ancient history like the Colosseum.",
    src: "https://images.unsplash.com/photo-1526481280691-9062fcf4720c?q=80&w=1200&auto=format&fit=crop",
    content: <DummyContent />,
  },
];

