import Link from 'next/link';

export interface FooterLinkProps {
  title: string;
  url?: string;
}

export default function FooterLink(props: Partial<FooterLinkProps>) {
  const { title, url } = props;
  return (
    <li className="mb-6">
      <Link
        href={`${url}`}
        className="text-lg color-palette-1 text-decoration-none"
      >
        {title}
      </Link>
    </li>
  );
}
