import Image from 'next/image';

export default function CopyWrite() {
  return (
    <div className="col-lg-4 text-lg-start text-center">
      <a href="" className="mb-30">
        <Image src="/icon/icon-footer.svg" width={60} height={60} alt="" />
      </a>
      <p className="mt-30 text-lg color-palette-1 mb-30">
        StoreGG membantu gamers
        <br /> untuk menjadi pemenang sejati
      </p>
      <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
    </div>
  );
}
