import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function SideBar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" hrefLink="/member" active={activeMenu === 'overview'} />
          <MenuItem title="Transactions" icon="ic-menu-transaction" hrefLink="/member/transactions" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="ic-menu-message" hrefLink="/member" />
          <MenuItem title="Card" icon="ic-menu-card" hrefLink="/member" />
          <MenuItem title="Rewards" icon="ic-menu-reward" hrefLink="/member" />
          <MenuItem title="Settings" icon="ic-menu-setting" hrefLink="/member/transactions/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem title="Log Out" icon="ic-menu-logout" hrefLink="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
