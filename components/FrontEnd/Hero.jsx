import Image from "next/image";

export function Hero() {
    return (
        <div>
            <Navbar/>
            <div className="grid grid-cols-2">
                <div>
                    <Image src="" alt=""/>
                    <h1>Welcome to the</h1>
                    <h1>Star Motel</h1>
                    <h1>on beautiful Lake Michigan</h1>
                    <button>Call Us to Book Your Stay Today!</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}