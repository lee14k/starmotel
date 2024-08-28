import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-between">
            <div>
                <div><h3>The Star Motel</h3></div>
                <div>
                    <ul>
                        <li>
                            1142 East Lakeshore Drive

                        </li>
                        <li>
                            East Highway US-2

                        </li>
                        <li> Manistique, MI 49854
                        </li>
                        <li>
                            (906) 341-5363
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Image src="/star-motel-logo.png" width={200} height={200} alt=""/>
            </div>
        </div>
    )
}