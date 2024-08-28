import Image from "next/image";
import Navbar from "@/components/FrontEnd/Navbar";

export default function Hero() {
    return (
        <div>

            <div className="grid lg:grid-cols-2">
                <div className="flex flex-col justify-center items-center">
                    <Navbar/>
                    <Image src="/star-motel-logo.png" width={400} height={400} alt=""/>
                    <div className="flex flex-col justify-center items-center gap-6 pb-12">
                        <h1 className="text-4xl text-starblue">Welcome to the</h1>
                        <h1 className="text-8xl text-starred">Star Motel</h1>
                        <h1 className="text-4xl text-starblue">on beautiful Lake Michigan</h1>
                        <button className="bg-starblue text-white">Call Us to Book Your Stay Today!</button>
                    </div>

                </div>
                <div>
                    <Image src="" alt=""/>
                </div>
            </div>
        </div>
    )
}