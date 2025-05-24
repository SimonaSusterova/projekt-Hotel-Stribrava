import { useState } from "react";
import { Banner } from "./Banner";
import { DarkSection } from "./DarkSection";
import { LightSection } from "./LightSection";
import { FinalSection } from "./FinalSection";

export const App = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <>
      <Banner />
      <DarkSection onSelectRoom={setSelectedRoom} />
      <LightSection selectedRoom={selectedRoom} />
      <FinalSection />
    </>
  );
};