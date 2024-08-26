export function TriplePhotoStarBackground() {
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
        <div>
            <h1>your home away
                from home in
                manistique!</h1>
            <p>Enjoy Michigan’s beautiful Upper Peninsula and Lake Michigan at the Star Motel! With 20 spacious, clean rooms, free wifi, and access to local attractions, Star Motel would love to have you for your stay!  </p>
            <div>
                {images.map((image,index) => (
                    <div>
                        <div>{images.heading}</div>
                        <div>{images.imageSrc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}