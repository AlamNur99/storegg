import SideBar from '../../../../components/organisms/Sidebar';
import TransactionsContent from '../../../../components/organisms/TransactionsContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionsContent />
    </section>
  );
}
