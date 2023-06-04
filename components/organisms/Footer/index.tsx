import CopyWrite from './CopyWrite';
import FooterList from './FooterList';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <CopyWrite />
            <FooterList />
          </div>
        </div>
      </footer>
    </section>
  );
}
