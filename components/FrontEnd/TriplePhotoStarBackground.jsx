import Link from 'next/link'
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
export default function TriplePhotoStarBackground() {
    const images = [
        {
            heading: 'What’s Nearby',
            imageSrc: '/falls.jpg',
            link: '#local-attractions'
        },
        {
            heading: 'Check out our rooms',
            imageSrc: '/our-rooms.jpg',
            link: '/our-rooms'
        },
        {
            heading: 'About the Star Motel',
            imageSrc: '/star-shot-out-2.jpg',
            link: '#about'
        },
    ]
    return (
        <div className="blue-star-background h-full py-12 flex flex-col gap-12 lg:mt-0 mt-10">
            <div
                className="flex lg:flex-row flex-col my-6 mx-6 text-white justify-center items-center text-center lg:text-left ">
                <h1 className={`text-5xl font-bold ${montserrat.className}`}>YOUR HOME AWAY
                    FROM HOME IN
                    MANISTIQUE, MI!</h1>
                <p className="mx-42 lg:ml-64 text-3xl">Enjoy Michigan’s beautiful Upper Peninsula and Lake Michigan at
                    the
                    Star
                    Motel!
                    With 20 spacious,
                    clean
                    rooms, free wifi, and access to local attractions, the Star Motel would love to have you for your
                    stay! </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-evenly items-center">
                {images.map((image, index) => (
                    <Link href={`${image.link}`} key={index}>
                        <div className="container mx-auto flex flex-col justify-center items-center bg-white px-12 py-8"
                        >
                            <img src={image.imageSrc} width={400} height={400} alt=""/>
                            <div><h1
                                className={`text-starblue text-5xl font-bold ${montserrat.className}`}>{image.heading} </h1>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}