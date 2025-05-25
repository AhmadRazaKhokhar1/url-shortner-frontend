"use client";

import { HomeHeader, HomeMain } from "../../screen-components";

export default function HomeScreen() {


  return <div className="flex flex-col h-full w-full">
    <HomeHeader/>
    <HomeMain/>
  </div>;
}
