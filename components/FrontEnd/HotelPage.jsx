import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
const HotelPage = () => {
    // Sample room data - replace with your actual data
    const roomSlides = [
        {
            id: 1,
            title: "Single Room",
            image: "/0998-Single.jpg",
            description: "Modern comfort meets elegant design in our single rooms. Each room features a plush queen-size bed, dedicated workspace, and ensuite bathroom with rainfall shower.",
            amenities: ["Queen-size bed", "Television", "High-speed WiFi", "Mini fridge", "Coffee maker"]
        },
        {
            id: 2,
            title: "Double Room",
            image: "/4702-Double.jpg",
            description: "Spacious double rooms perfect for families or friends traveling together. Featuring two comfortable double beds and a cozy sitting area with ocean views.",
            amenities: ["Two double beds", "Sitting area", "High-speed WiFi", "Large wardrobe", "Tea/coffee station"]
        },
        {
            id: 3,
            title: "Clean Bathrooms",
            image: "/4702-Double.jpg",
            description: "Bathrooms are cleaned daily and are stocked with fresh towels and toiletries.",
        }
    ];
    return (
        <main className="min-h-screen">
            {/* Hero Section with Lobby Image */}
            <section className="relative h-96 w-full">
                <img
                    src="/1000-FrontDesk.jpg"
                    alt="Hotel Lobby"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className={`text-6xl font-bold mb-4 ${montserrat.className}`}>Welcome to the Star Motel</h1>
                        <p className="text-3xl">Experience the UP right in our backyard!</p>
                    </div>
                </div>
            </section>

            {/* Rooms Section with Image Slideshow */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Rooms</h2>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {roomSlides.map((room) => (
                                <CarouselItem key={room.id}>
                                    <div className="space-y-8">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="w-full h-[600px] object-cover rounded-lg"
                                        />
                                        <div className="max-w-3xl mx-auto text-center space-y-6">
                                            <h3 className="text-2xl font-semibold">{room.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {room.description}
                                            </p>
                                            <div className="border-t border-b border-gray-200 py-6">

                                                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                                                    {room.amenities ? (
                                                        room.amenities.map((amenity, index) => (
                                                            <span key={index} className="text-gray-600">
            • {amenity}
        </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-gray-600"></span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex"/>
                        <CarouselNext className="hidden md:flex"/>
                    </Carousel>
                </div>
            </section>

            {/* Beach Area Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className={`text-3xl font-bold mb-6 ${montserrat.className}`}>Lake views are just a step
                                away!</h2>
                            <p className="text-gray-600 mb-6">
                                Looking for lake views? We've got them! Just a short walk from your room will bring you
                                to the beach, where you can see incredible sunsets and sunrises.
                            </p>

                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="/0991-Beach-Back.jpg"
                                alt="Beach view 1"
                                className="w-full h-72 object-cover rounded-lg"
                            />
                            <img
                                src="/0995-Motel.jpg"
                                alt="Beach view 2"
                                className="w-full h-72 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default HotelPage;