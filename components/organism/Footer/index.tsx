import FooterItem from "./FooterItem";
import IllustrationFooter from "./IllustrationFooter";

export default function Footer() {
    return (
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <IllustrationFooter />
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Company</p>
                                    <ul className="list-unstyled">
                                        <FooterItem title="About Us" />
                                        <FooterItem title="Press Release" />
                                        <FooterItem title="Terms of Use" />
                                        <FooterItem title="Privacy & Policy" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Support</p>
                                    <ul className="list-unstyled">
                                        <FooterItem title="Refund Policy" />
                                        <FooterItem title="Unlock Rewards" />
                                        <FooterItem title="Live Chatting" />
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                    <p className="text-lg fw-semibold color-palette-1 mb-12">Connect</p>
                                    <ul className="list-unstyled">
                                        <FooterItem title="hi@store.gg" links="mailto: hi@store.gg" />
                                        <FooterItem title="team@store.gg" links="mailto: team@store.gg" />
                                        <FooterItem title="Pasific 12, Jakarta Selatan" links="http://maps.google.com/?q=Pasific 12, Jakarta Selatan" />
                                        <FooterItem title="021 - 1122 - 9090" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}
