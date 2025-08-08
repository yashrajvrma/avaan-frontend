import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-6 px-4 py-10 md:py-14">
        <div className="relative flex flex-col justify-center">
          <Badge className="w-fit bg-yellow-50 text-yellow-500 hover:bg-yellow-50">
            Excess Baggage
          </Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Door to Door Excess Baggage Delivery
          </h1>
          <p className="mt-4 text-muted-foreground max-w-prose">
            Skip airline charges—save up to 80% on excess luggage delivery.
            Real-time tracking and doorstep pickup.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Button className="bg-yellow-500 hover:bg-yellow-600">
              Book Now
            </Button>
            {/* <Button
              variant="link"
              className="text-rose-600 hover:text-rose-700 px-0"
            >
              Learn More…
            </Button> */}
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden h-[420px] md:h-[520px]">
          {/* Right image from your screenshot */}
          <img
            src="/images/hero.png"
            alt="Courier delivering baggage at doorstep"
            // fill
            // priority
            className="object-cover"
          />
          {/* Gradient overlay to improve text contrast on small screens */}
          <div className="absolute inset-0 lg:hidden bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
