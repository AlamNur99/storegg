import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface SiderBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SiderBarProps) {
    const { activeMenu } = props;
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="overview" active={activeMenu === 'overview'} href="/member" />
                    <MenuItem title="Transaction" icon="transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
                    <MenuItem title="Messages" icon="messages" href="/member" />
                    <MenuItem title="Card" icon="card" href="/member" />
                    <MenuItem title="Rewards" icon="reward" href="/member" />
                    <MenuItem title="Settings" icon="settings" active={activeMenu === 'settings'} href="/member/edit-profile" />
                    <MenuItem title="Log out" icon="logout" href="/sign-in" />
                </div>
                <Footer />
            </div>
        </section>
    )
}
