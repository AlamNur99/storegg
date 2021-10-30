import Link from 'next/link';

interface FooterItemProps {
    title: string;
    links?: string
}

export default function FooterItem(props: Partial<FooterItemProps>) {
    const { title, links } = props;
    return (
        <li className="mb-6">
            <Link href={`${links}`}>
                <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
            </Link>
        </li>
    )
}
