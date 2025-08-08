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

const services = [
  {
    title: "Excess Baggage",
    desc: "Skip airline charges—send your extra luggage at a fraction of the cost.",
    img: "/placeholder.svg?height=320&width=520",
    cta: "Explore",
  },
  {
    title: "Airport Transfers",
    desc: "Drop off or collect baggage at our airport kiosks—fast and hassle‑free.",
    img: "/placeholder.svg?height=320&width=520",
    cta: "Explore",
  },
  {
    title: "Storage",
    desc: "Secure, flexible short and long‑term options for your items.",
    img: "/placeholder.svg?height=320&width=520",
    cta: "Explore",
  },
  {
    title: "Package Delivery",
    desc: "From small to big parcels, timely doorstep deliveries.",
    img: "/placeholder.svg?height=320&width=520",
    cta: "Explore",
  },
];

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Our Services
        </h2>
        <div className="mt-2 h-1 w-24 bg-yellow-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-56 w-full">
                <img
                  src={s.img || "/placeholder.svg"}
                  alt={s.title}
                  //   fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <CardTitle>{s.title}</CardTitle>
              <CardDescription className="mt-1">{s.desc}</CardDescription>
            </CardContent>
            <CardFooter className="pt-2">
              <Button
                variant="link"
                className="p-0 text-yellow-500 hover:text-yellow-500"
              >
                {s.cta} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
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
