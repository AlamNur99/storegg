import Image from 'next/image';
import cx from 'classnames';

interface MenuItemProps {
  title: string;
  icon: 'ic-menu-overview' | 'ic-menu-card' | 'ic-menu-logout' | 'ic-menu-message' | 'ic-menu-reward' | 'ic-menu-setting' | 'ic-menu-transaction';
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active: active,
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="icon" />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}