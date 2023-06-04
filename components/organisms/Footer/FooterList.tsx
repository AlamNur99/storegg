import React from 'react';
import FooterItem from '../../molecules/FooterItem';
import FooterLink from '../../atoms/FooterLink';

export default function FooterList() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <FooterItem category="Company">
          <FooterLink title="About Us" />
          <FooterLink title="Press Release" />
          <FooterLink title="Terms of Use" />
          <FooterLink title="Privacy & Policy" />
        </FooterItem>
        <FooterItem category="Support">
          <FooterLink title="Refund Policy" />
          <FooterLink title="Unlock Rewards" />
          <FooterLink title="Live Chatting" />
        </FooterItem>
        <FooterItem category="Connect">
          <FooterLink title="hi@store.gg" url="mailto: hi@store.gg" />
          <FooterLink title="team@store.gg" url="mailto: team@store.gg" />
          <FooterLink title="Pasific 12, Jakarta Selatan" url="http://maps.google.com/?q=Pasific 12, Jakarta Selatan" />
          <FooterLink title="021 - 1122 - 9090" url="tel: 02111229090" />
        </FooterItem>
      </div>
    </div>
  );
}
