import React from "react";

import Header from "./_components/Header";
import Carousel from "./_components/Carousel";
import Operations from "./_components/Operations";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl space-y-12">
      <Header />
      <Carousel />
      <Operations />
    </div>
  );
}
