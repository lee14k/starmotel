import Image from "next/image";
import Hero from "../components/FrontEnd/Hero";
import TriplePhotoStarBackground from "../components/FrontEnd/TriplePhotoStarBackground";
import SideScrollerHero from "@/components/FrontEnd/SideScrollerHero";
import ReviewSlideshow from "@/components/FrontEnd/ReviewSlideshow";
import About from "@/components/FrontEnd/About";
import Footer from "@/components/FrontEnd/Footer";
import ListComponent from "@/components/FrontEnd/ListComponent";
import BookYourStayCTA from "@/components/FrontEnd/BookYourStayCTA";

export default function Home() {
    const listItems = [
        {text: "Fayette Historic Village", url: "https://www.michigan.gov/mhc/museums/fayette"},
        {text: "Kitch-iti-Kipi (Big Springs_", url: "http://www.visitmanistique.com/bigspring.shtml"},
        {text: "Seney National Wildlife Refuge", url: "https://www.fws.gov/refuge/seney"},
        {text: "Seul Choix Lighthouse", url: "https://www.greatlakelighthouse.com/"},
        {text: "Tahquamenon Falls", url: "https://www.michigan.org/property/tahquamenon-falls-state-park"},
        {text: "Whitefish Point Lighthouse", url: "https://shipwreckmuseum.com/visit/whitefish-point-light/},
        {text: "Great Lakes Shipwreck Museum", url: "https://shipwreckmuseum.com/"},
        {text: "Pictured Rocks", url: "https://www.munising.org/explore/pictured-rocks-national-lakeshore/"},
        {text: "Point Iroquois", url: "https://saultstemarie.com/attractions/point-iroquois-lighthouse/"},
        {text: "AuSable Lighthouses and Museum", url: "https://www.michigan.org/property/au-sable-light-station"},
        {
            text: "Hundreds of acres of public land in the Hiawatha National Forest for fishing, paddling, biking, hunting, and hiking!",
            url: ""
        },
    ]
    return (
        <div>
            <Hero/>
            <div>
                <SideScrollerHero/>
            </div>
            <TriplePhotoStarBackground/>
            <ReviewSlideshow/>
            <About
                idRelativeLinking="about"
                header="ABOUT THE STAR MOTEL"
                bodyText={<>
                    <div className="my-24 flex flex-col gap-12 mr-24 text-2xl text-starblue ">
                        <p>
                            The Star Motel has been a family-owned business since 1955, and we pride
                            ourselves on exceptional
                            hospitality, immaculate rooms, and that warm, welcoming feeling of staying at your grandma's
                            for
                            the weekend.
                        </p>
                        <p> Our motel features 20 spacious, meticulously cleaned and remodeled rooms, each
                            equipped with a tub/shower combination, color cable TV, refrigerator, and air conditioning.
                            Enjoy the convenience of free wireless internet access and complimentary morning coffee in
                            our
                            office. Our amenities also include direct beach access, making it easy for you to enjoy the
                            stunning shores of Lake Michigan.</p>
                        <p>
                            Our prime location provides easy access to local restaurants,
                            shopping, and the nearby casino, making it an ideal spot for both relaxation and adventure.
                            Whether you're here for summer activities like fishing and boating or winter sports such as
                            snowmobiling, or hunting, the Star Motel is the perfect base for your Upper Peninsula
                            adventures.
                        </p>
                        <p>
                            At the Star Motel, we ensure every guest feels welcome and at home. Our pet-friendly
                            policy means you can bring your furry friends along for the trip too! For reservations and
                            availability, please call us at 906-341-5363. We look forward to making your stay a
                            memorable
                            one!
                        </p>
                    </div>

                </>
                }
                photoURL=""
                buttonOne="Call to Book"
                buttonTwo="Local Attractions"
                buttonOneURL="tel:+9063415363"
                buttonTwoURL=""
                buttonBackgroundColor="bg-starorange"
                buttonBorderColor="border-2 border-starorange"
                photoURL="/Rocks-Sunrise-8901.jpg"
                backgroundColor="bg-white"
                headerColor="text-starorange"
                buttonTextColor="text-white"
            />
            <About
                idRelativeLinking="local-attractions"
                header="LOCAL ATTRACTIONS"
                bodyText={
                    <div className="my-24 flex flex-col gap-12 mr-32 text-2xl">
                        <p>There’s no shortage of things to do in and around Manistique, especially for the
                            outdoors-loving traveler! Check out this list of attractions and plan your visit today!
                            CLick each link and check out the adventures you can have during your stay with us </p>
                        <ListComponent items={listItems}/>
                    </div>
                } photoURL=""
                buttonOne="Call to Book"
                buttonTwo="Learn More About Manistique, MI"
                buttonOneURL="tel:+9063415363"
                buttonTwoURL="https://www.discovermanistique.com/"
                backgroundColor="bg-starblue "
                fontColor="white"
                buttonBackgroundColor="bg-white"
                buttonBorderColor="border-2 border-white text-black"
                headerColor="text-white"
                photoURL="/lh.jpg"
            />
            <BookYourStayCTA id="book"/>
            <Footer/>
        </div>
    );
}

