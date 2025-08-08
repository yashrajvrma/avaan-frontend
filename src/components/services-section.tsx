import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import packageBag from "../../public/images/istockphoto-927771744-612x612.jpg";
import airportFamily from "../../public/images/family-photo.avif";
import packageStorage from "../../public/images/images.avif";
import deliveryPackag from "../../public/images/delivery.jpg";

const services = [
  {
    title: "Excess Baggage",
    desc: "Skip airline charges—send your extra luggage at a fraction of the cost.",
    img: packageBag,
    cta: "Explore",
  },
  {
    title: "Airport Transfers",
    desc: "Drop off or collect baggage at our airport kiosks—fast and hassle‑free.",
    img: airportFamily,
    cta: "Explore",
  },
  {
    title: "Storage",
    desc: "Secure, flexible short and long‑term options for your items.",
    img: packageStorage,
    cta: "Explore",
  },
  {
    title: "Package Delivery",
    desc: "From small to big parcels, timely doorstep deliveries.",
    img: deliveryPackag,
    cta: "Explore",
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Our
          <span className="text-yellow-500"> Services</span>
        </h2>
        <div className="w-full h-[2px] bg-neutral-300 relative rounded-sm mt-4">
          <div className="w-[5%] h-[4px] bg-yellow-500 absolute top-[-1.5px] left-0 rounded-sm"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden py-0">
            <CardHeader className="p-0">
              <div className="relative  w-full px-4 pt-4">
                <img
                  src={s.img}
                  alt={s.title}
                  //   fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardTitle className="text-xl ">{s.title}</CardTitle>
              <CardDescription className="mt-1 text-sm">
                {s.desc}
              </CardDescription>
            </CardContent>
            <CardFooter className="pb-4">
              <a className="flex items-center align-middle" href="/domestic">
                <Button
                  variant="secondary"
                  className="p-0 hover:text-yellow-400 hover:cursor-pointer"
                >
                  {s.cta} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Reference mosaic of your original "Our Services" screenshot */}
      <div className="sr-only">
        <img
          src="/images/services.png"
          alt="Services reference screenshot"
          width={1200}
          height={800}
        />
      </div>
    </section>
  );
}
