import { ServiceCard } from "./ServiceCard";

export function ServicesCards() {
  const cardcontent = [
    {
      title: "Networking",
      description:
        "PalC Networks provides expertise in networking protocols and services in developing control / data plane architecture for layer 2 , layer 3 etc.",
    },
    {
      title: "Cloud Native Application",
      description:
        "PalC Networks has great knowledge in converting monolithic application into cloud-native application by carefully developing cloud-native architecture.",
    },
    {
      title: "Security",
      description:
        "Secure end-to-end access for genuine users to your critical application and data.With PalC Networks identity and action management services. ",
    },
    {
      title: "Dev Ops and Application Development",
      description:
        "PalC Networks Custom Development Services offers extensive experience in the implementation of networking and developments tailored to the specific needs of its customers.",
    },
  ];
  return (
    <div className="services-cards">
      {cardcontent.map((item, index) => (
        <ServiceCard key={index} item={item} />
      ))}
    </div>
  );
}
