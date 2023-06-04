interface FooterItemprops {
  category: string;
  children: React.ReactNode;
}

export default function FooterItem(props: FooterItemprops) {
  const { category, children } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{category}</p>
      <ul className="list-unstyled">{children}</ul>
    </div>
  );
}
