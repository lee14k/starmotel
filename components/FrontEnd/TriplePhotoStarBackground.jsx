import Link from 'next/link'

export default function TriplePhotoStarBackground() {
    const images = [
        {
            heading: 'What’s Nearby',
            imageSrc: './pic',
            link: '#local-attractions'
        },
        {
            heading: 'Check out our rooms',
            imageSrc: './pic',
            link: '/our-rooms'
        },
        {
            heading: 'About the Star Motel',
            imageSrc: './pic',
            link: '#about'
        },
    ]
    return (
        <div className="blue-star-background h-full py-12 flex flex-col gap-12">
            <div className="flex my-6 mx-6 text-white ">
                <h1 className=" font-bold text-6xl">YOUR HOME AWAY
                    FROM HOME IN
                    MANISTIQUE, MI!</h1>
                <p className="mx-424 ml-64 text-3xl">Enjoy Michigan’s beautiful Upper Peninsula and Lake Michigan at the
                    Star
                    Motel!
                    With 20 spacious,
                    clean
                    rooms, free wifi, and access to local attractions, the Star Motel would love to have you for your
                    stay! </p>
            </div>

            <div className="flex gap-6 justify-evenly items-center">
                {images.map((image, index) => (
                    <Link href={`${image.link}`} key={index}>
                        <div className="container mx-auto flex flex-col justify-center items-center bg-white px-12 py-6"
                        >
                            <img src={image.src} width={300} height={300} alt=""/>
                            <div><h1 className="text-starblue text-3xl">{image.heading} </h1></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}