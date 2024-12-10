import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
export default function BookYourStayCTA() {
    return (
        <div className="book-your-stay-cta py-24 " id="book">
            <div className="bg-white lg:mx-24 flex flex-col justify-center items-center gap-6 text-starblue py-10">
                <h1 className={`text-6xl font-bold  text-center lg:mx-96 lg:px-24 ${montserrat.className}`}>CALL NOW TO
                    BOOK YOUR
                    STAY!</h1>
                <div className="flex flex-col justify-center items-center text-4xl lg:mx-48 text-center gap-10">
                    <p>The Star Motel is the perfect base for your next Upper Peninsula
                        adventure.</p>

                    <p>At the Star Motel, we ensure every guest feels welcome and at home. Click the button below to
                        call us
                        and book your stay today. We would be so happy to have you!</p>
                </div>
                <a href="tel:+9063415363">
                    <button
                        className={` py-8 px-4 text-3xl font-bold text-white bg-starblue ${montserrat.className}`}>Book
                        your stay now!
                    </button>
                </a>
            </div>
        </div>
    )
}