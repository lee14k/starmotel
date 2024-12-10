import Image from "next/image";
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
export default function Footer() {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center">
            <div className="mx-8 text-center">
                <h3 className={`text-starblue text-4xl font-bold my-6 ${montserrat.className}`}>The Star Motel</h3>
                <div className="text-3xl ">
                    <ul className="flex flex-col gap-2 ">
                        <li>
                            1142 East Lakeshore Drive

                        </li>
                        <li>
                            East Highway US-2

                        </li>
                        <li> Manistique, MI 49854
                        </li>
                        <a href="tel:+9063415363">
                            <li className="bg-starblue font-bold text-white py-2 px-2 flex flex-col justify-center items-center gap-4 ">

                                <span
                                    className={`text-4xl font-bold  ${montserrat.className}`}>Call to book your stay!</span>
                                (906) 341-5363
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div>
                <Image src="/star-motel-logo.png" width={500} height={500} alt=""/>
            </div>
        </div>
    )
}