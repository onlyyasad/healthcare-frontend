import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import { Button } from "@mui/material";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors/>
    </>
  );
};

export default HomePage;
