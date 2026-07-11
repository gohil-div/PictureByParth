import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";
import { useParallax } from "@/hooks/use-parallax";

export function AboutBreak() {
  const { ref, offset } = useParallax(0.1);

  return (
    <section className="relative h-[70svh] w-full overflow-hidden">
      <div ref={ref} className="absolute -inset-y-1/4 inset-x-0">
        <img
          src={images.ceremony}
          alt="Guests gathered at golden hour"
          className="h-full w-full object-cover"
          style={{
            transform: `translateY(${offset}px)`,
            willChange: "transform",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-charcoal/25" />
      <Reveal className="relative z-10 flex h-full items-end justify-center px-6 pb-16 text-center md:pb-20">
        <p className="serif-display max-w-xl text-2xl italic leading-snug text-ivory md:text-3xl">
          Every wedding has one moment nobody else notices. We're there for it.
        </p>
      </Reveal>
    </section>
  );
}
