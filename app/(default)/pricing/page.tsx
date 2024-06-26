export const metadata = {
  title: "Pricing - Smarty ERP",
  description: "Page description",
};

import PricingTables from "@/components/pricing-tables";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      <Faqs />
      <Testimonials />
      <Cta />
    </>
  );
}
