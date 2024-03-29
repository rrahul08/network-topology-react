import { ServiceCard } from "./ServiceCard";
import { ServicesCards } from "./ServicesCards";

export function Services() {
  const cardcontent = [
    {
      title: "Open Lab",
      description:
        "PalC Networks OpenLab is one of the leading Open Labs in the disaggregated Whitebox networking industry. The lab offers a wide range of Network Operating Systems (NOS) for testing and is available 24/7 with open and free access.",
    },
  ];

  const thirditem = cardcontent[0];
  return (
    <div className="services">
      <div className="services-header">
        <h1>Services</h1>
        <h1>Custom development Services </h1>
        <h4 style={{ lineHeight: "0.1", fontWeight: "normal" }}>
          PalC Networks Custom Development Services offers extensive experience
          in the implementation of networking{" "}
        </h4>
        <h4 style={{ lineHeight: "0.1", fontWeight: "normal" }}>
          and security-related developments tailored to the specific needs of
          its customers.
        </h4>
      </div>
      <ServicesCards />
      <div className="services-footer">
        <h1>Test and Validation</h1>
        <h4 style={{ lineHeight: "0.1", fontWeight: "normal" }}>
          PalC Networks test and validation service assists customers in testing
          and validating their networking solutions and services.
        </h4>
        <h4 style={{ lineHeight: "0.1", fontWeight: "normal" }}>
          This service ensures that the customers solution or Proof of Concept
          (POC) meets their specific requirements .
        </h4>
        <ServiceCard item={thirditem} />
      </div>
    </div>
  );
}
