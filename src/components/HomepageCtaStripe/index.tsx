import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.scss";
import SectionHeader from "@site/src/components/SectionHeader";
import RightArrow from "@site/static/img/right-arrow-icon.svg";
import { pushGtmEvent } from "@site/src/utils/pushGtmEvent";

export default function HomepageCtaStripe(): JSX.Element {
  const pageViewData = {
    event: "button_click",
    click_item: "home page cta",
    click_text: "Request Access",
    link_url: "/request-access",
  };
  return (
    <section
      className={clsx("bg-lemon text-11-o-clock", styles.homepageCtaStripe)}
    >
      <div className="container">
        <SectionHeader
          heading="Ready to get started with Unified ID 2.0?"
          subheading="Request access or a consultation with an expert, or visit our most up-to-date technical documentation."
          extraClass={styles.header}
        />
        <div className={styles.ctasWrapper}>
          <Link
            to="/request-access"
            className="button button--11-o-clock"
            onClick={() => pushGtmEvent(pageViewData)}
          >
            Request Access
          </Link>
          <Link
            to="/docs/intro"
            className={clsx("type-eta text-11-o-clock", styles.ctaArrow)}
          >
            <span>Browse the Docs</span>
            <RightArrow className={styles.ctaArrowIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
