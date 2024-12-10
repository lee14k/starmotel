import Image from "next/image";
import Navbar from "@/components/FrontEnd/Navbar";
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
export default function Hero() {
    return (
        <div>
            <Navbar/>

            <div className="flex justify-center items-center flex-col hero-image-cover">

                <div className="flex flex-col justify-center items-center text-center bg-white my-8 px-48 ">
                    <Image src="/star-motel-logo.png" width={400} height={400} alt=""/>
                    <div className="flex flex-col justify-center items-center gap-6 pb-12">
                        <h1 className="text-4xl text-starblue font-bold">Welcome to the</h1>
                        <h1 className={`text-8xl text-starred font-bold ${montserrat.className}`}>Star Motel</h1>
                        <h1 className="text-4xl text-starblue mb-2 font-bold">Located on beautiful Lake Michigan </h1>
                        <a href="tel:+9063415363">
                            <button
                                className={`bg-starblue text-white py-8 px-4 text-3xl font-bold ${montserrat.className}`}>Call
                                Us to Book Your
                                Stay
                                Today!
                            </button>
                        </a>
                    </div>

                </div>

            </div>
            <div className="grid lg:grid-cols-2">
                <div><Image src="/star-shot-out-2.jpg" width={800} height={800} alt="" className="py-12 mx-10"/>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-6 mx-8"><h2
                    className={`text-5xl font-bold ${montserrat.className}`}>Big adventures with
                    small-town comfort</h2>
                    <p className="text-2xl">Enjoy the beauty of the Upper Peninsula, right from rustic Manistique, MI.
                        Comfortable, cozy
                        rooms await after a day of adventuring in the Upper Peninsula. </p>
                    <a href="tel:+9063415363">
                        <button
                            className={`bg-starorange border-2 border-starorange text-white py-8 px-4 text-3xl font-bold ${montserrat.className}`}
                        >Call to Book
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}