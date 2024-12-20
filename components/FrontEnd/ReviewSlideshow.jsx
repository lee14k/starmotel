import {useState} from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
export default function ReviewSlideshow() {
    const [activeIndex, setActiveIndex] = useState(0);
    const previousSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex == 0 ? reviews.length - 1 : prevIndex - 1
        )
    }
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex == reviews.length - 1 ? 0 : prevIndex + 1
        )
    }
    const reviews = [
        {
            name: "Grace",
            content: "I am both touched and impressed by the owner of this motel. I was already going to leave a review because of how spacious and clean the room we stayed in was, but I have to say how kind the owner is as well."
        },
        {
            name: "Liz",
            content: "Don’t pass by this little gem of a motel. The roms have plenty of space and amenities like a small fridge with freezer. The king sized mattress is extremely comfortable and despite being off the highway is very quiet. All this for a very reasonable price."
        },
        {
            name: "Randy",
            content: "The Star Motel has very clean and simple rooms, decent beds, and wonderful service and ownership who are extremely friendly and relaxed. With their rates being near the best in the UP, and their location a short hike away from a gorgeous view of lake Michigan, you really can't beat the Star. It's the only place we stay in the UP that isn't camping! "
        },
        {
            name: "James",
            content: "The Star Motel is exceptional. I have come here yearly on my trips to Marquette. The motel is super clean and is a pleasure to stay in. I consider it my rental \"lodge room\" when I am in the UP. The owners have been very kind and friendly. Plus.........the tap water is good and cold! I look forward to pulling into the parking lot as soon as I cross the bridge."
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center review-star-background h-[40rem] text-center">
            <h1 className={`bg-inherit text-starblue text-5xl font-bold ${montserrat.className}`}>GUEST REVIEWS</h1>
            <div className="flex justify-center lg:gap-24 ">

                <button className="arrow left-arrow" onClick={previousSlide} className="text-starorange ">
                    <ArrowBackIosIcon className="text-xs lg:text-7xl"/>

                </button>
                <div className="w-[24rem] lg:w-[30rem] h-[28rem] flex relative justify-center items-center">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`slide flex flex-col justify-center items-center transition-opacity duration-0 gap-6 ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                            style={{position: index === activeIndex ? 'relative' : 'absolute'}}
                        >
                            <p className="pb-6 mx-12 lg:mx-0 text-2xl lg:text-3xl tracking-wide text-center py-16">{review.content}</p>
                            <h3 className={`text-starblue text-3xl font-bold ${montserrat.className}`}>{review.name}</h3>
                        </div>
                    ))}
                </div>
                <button className="arrow right-arrow" onClick={nextSlide} className="text-starorange ">
                    <ArrowForwardIosIcon className="lg:text-7xl"/>
                </button>
            </div>
        </div>
    )
}