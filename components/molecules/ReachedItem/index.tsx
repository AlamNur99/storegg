import VerticalLine from './VerticalLine';

interface ReachedItemProps {
  desc1: string;
  desc2: string;
  isLine?: boolean;
}

export default function ReachedItem(props: Partial<ReachedItemProps>) {
  const { desc1, desc2, isLine } = props;

  if (isLine) {
    return (
      <>
        <div className="me-lg-35">
          <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{desc1}</p>
          <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc2}</p>
        </div>
        <VerticalLine />
      </>
    );
  }

  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{desc1}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc2}</p>
    </div>
  );
}
