import StarIcon from '@mui/icons-material/Star';
import {Montserrat} from 'next/font/google';

const montserrat = Montserrat({subsets: ['latin']});
export default function SideScrollerHero() {
    return (
        <div className={`scroll-container font-bold text-3xl bg-starorange text-white pb-36 ${montserrat.className}`}>
            <div className="carousel">
                <ul className="flex py-14">
                    <li><StarIcon/></li>
                    <li>Spacious rooms</li>
                    <li><StarIcon/></li>
                    <li>Open year round</li>
                    <li><StarIcon/></li>
                    <li>Easy access to the snowmobile trails</li>
                    <li><StarIcon/></li>
                    <li>Affordable rates</li>
                    <li><StarIcon/></li>
                    <li>Free WiFi</li>
                    <li><StarIcon/></li>
                    <li>Pet Friendly</li>
                </ul>
                <ul className="flex py-14">
                    <li><StarIcon/></li>
                    <li>Spacious rooms</li>
                    <li><StarIcon/></li>
                    <li>Open year round</li>
                    <li><StarIcon/></li>
                    <li>Easy access to the snowmobile trails</li>
                    <li><StarIcon/></li>
                    <li>Affordable rates</li>
                    <li><StarIcon/></li>
                    <li>Free WiFi</li>
                    <li><StarIcon/></li>
                    <li>Pet Friendly</li>
                    <li><StarIcon/></li>
                </ul>
            </div>
        </div>
    );
}