import * as React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export type GalleryImage = { src: string; alt: string };

type StoryLightboxProps = {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
};

export function StoryLightbox({ images, index, onClose }: StoryLightboxProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(index ?? 0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  if (index === null) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        key={index}
        className="max-w-6xl border-none bg-transparent p-0 shadow-none sm:rounded-none [&>button]:text-ivory [&>button]:opacity-80 [&>button]:hover:opacity-100"
      >
        <DialogTitle className="sr-only">Photo gallery</DialogTitle>
        <Carousel
          setApi={setApi}
          opts={{ startIndex: index, loop: true }}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {images.map((img, i) => (
              <CarouselItem
                key={i}
                className="flex items-center justify-center pl-0"
              >
                <div className="flex h-[80svh] w-full items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 border-ivory/40 bg-charcoal/60 text-ivory hover:bg-charcoal/80 hover:text-ivory" />
          <CarouselNext className="right-4 border-ivory/40 bg-charcoal/60 text-ivory hover:bg-charcoal/80 hover:text-ivory" />
        </Carousel>
        <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.32em] text-ivory/70">
          {current + 1} / {images.length}
        </p>
      </DialogContent>
    </Dialog>
  );
}
