import Image from "next/image";
import Navbar from "@/components/FrontEnd/Navbar";

export default function Hero() {
    return (
        <div>
            <Navbar/>
            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center">
                    <Image src="/star-motel-logo.png" width={200} height={200} alt=""/>
                    <h1>Welcome to the</h1>
                    <h1>Star Motel</h1>
                    <h1>on beautiful Lake Michigan</h1>
                    <button>Call Us to Book Your Stay Today!</button>
                </div>
                <div>
                    <Image src="" alt=""/>
                </div>
            </div>
        </div>
    )
}