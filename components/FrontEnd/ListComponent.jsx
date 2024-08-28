import Link from "next/link";

export default function ListComponent({items}) {
    return (
        <ul className="flex flex-col gap-6">
            {items.map((item, index) => (
                <li className="flex gap-2" key={index}>
                    {index % 1 === 0 && <div className="star">★</div>}
                    <Link href={item.url}>
                        {item.text}
                    </Link>

                </li>
            ))}
        </ul>
    );
}