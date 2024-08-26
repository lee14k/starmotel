import Image from "next/image";
import Hero from "../components/FrontEnd/Hero";
import TriplePhotoStarBackground from "../components/FrontEnd/TriplePhotoStarBackground";
import SideScrollerHero from "@/components/FrontEnd/SideScrollerHero";

export default function Home() {
  return (
   <div>
     <Hero/>
       <SideScrollerHero/>
     <TriplePhotoStarBackground/>
   </div>
  );
}
