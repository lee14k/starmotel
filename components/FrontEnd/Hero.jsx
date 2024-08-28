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
                        <h1 className="text-4xl text-starblue font-bold">Welcome to the</h1>
                        <h1 className="text-8xl text-starred hertical ">Star Motel</h1>
                        <h1 className="text-4xl text-starblue mb-2 font-bold">on beautiful Lake Michigan</h1>
                        <a href="tel:+9063415363">
                            <button className="bg-starblue text-white py-8 px-4 text-3xl font-bold">Call Us to Book Your
                                Stay
                                Today!
                            </button>
                        </a>
                    </div>

                </div>
                <div>
                    <Image src="" alt=""/>
                </div>
            </div>
        </div>
    )
}