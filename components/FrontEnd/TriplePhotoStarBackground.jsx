export default function TriplePhotoStarBackground() {
    const images=[
        {
            heading:'What’s Nearby',
            imageSrc:'./pic'
        },
        {
            heading:'Check out our rooms',
            imageSrc:'./pic'
        },
        {
            heading:'About the Star Motel',
            imageSrc:'./pic'
        },
    ]
    return (
        <div className="blue-star-background h-[20rem]">
            <h1>your home away
                from home in
                manistique!</h1>
            <p>Enjoy Michigan’s beautiful Upper Peninsula and Lake Michigan at the Star Motel! With 20 spacious, clean rooms, free wifi, and access to local attractions, Star Motel would love to have you for your stay!  </p>
            <div className="flex border-2 gap-6 justify-evenly items-center">
                {images.map((image,index) => (
                    <div className="flex flex-col justify-center items-center" key={index}>
                        <img src={image.src} width={200} height={200} alt=""/>
                        <div ><h1>{image.heading} </h1></div>

                    </div>
                ))}
            </div>
        </div>
    )
}