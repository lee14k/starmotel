import Link from "next/link";

export default function ListComponent({items}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item.url ? (
                        <Link href={item.url}>
                            {item.text}
                        </Link>
                    ) : (
                        item.text
                    )}
                </li>
            ))}
        </ul>
    );
}