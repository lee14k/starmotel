import Image from "next/image";
import Hero from "../components/FrontEnd/Hero";
import TriplePhotoStarBackground from "../components/FrontEnd/TriplePhotoStarBackground";


export default function Home() {
  return (
   <div>
     <Hero/>
     <TriplePhotoStarBackground/>
   </div>
  );
}
