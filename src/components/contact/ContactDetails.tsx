import { useState, type FormEvent } from "react";
import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CONTACT_EMAIL = "hello@picturebyparth.com";

const fieldClassName =
  "mt-2 rounded-none border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-base shadow-none focus-visible:border-charcoal focus-visible:ring-0";

const labelClassName =
  "text-[0.65rem] uppercase tracking-[0.28em] text-charcoal-soft";

export function ContactDetails() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Enquiry from ${name || "your website"}`;
    const body = `Name: ${name}\nWedding date: ${date}\n\n${message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <Reveal className="hover-zoom aspect-[4/5] w-full">
          <img
            src={images.bouquet}
            alt="Bridal bouquet on antique linen"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal delayMs={100}>
          <p className="editorial-eyebrow">Send a Note</p>
          <h2 className="serif-display-roman mt-4 text-3xl md:text-4xl">
            Tell us about your day.
          </h2>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <Label htmlFor="contact-name" className={labelClassName}>
                Name
              </Label>
              <Input
                id="contact-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={fieldClassName}
              />
            </div>
            <div>
              <Label htmlFor="contact-date" className={labelClassName}>
                Wedding Date
              </Label>
              <Input
                id="contact-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={fieldClassName}
              />
            </div>
            <div>
              <Label htmlFor="contact-message" className={labelClassName}>
                Your Story
              </Label>
              <Textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
                className={fieldClassName}
              />
            </div>

            <Button
              type="submit"
              className="group mt-4 inline-flex items-center gap-5 rounded-none border border-charcoal/30 bg-transparent px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal shadow-none transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              <span>Send Enquiry</span>
              <span className="h-px w-8 bg-current transition-all duration-700 group-hover:w-12" />
            </Button>
          </form>

          <div className="mt-10 flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
            <p>
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="link-underline text-charcoal"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/000000000"
                className="link-underline text-charcoal"
              >
                Message the Studio
              </a>
            </p>
            <p>Studio: Florence, Italy</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
