import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

export interface FeaturesProps {
  title: ReactNode;
  description?: string;
  listItems: { icon: LucideIcon; label: string }[];
  imageDarkSrc?: string;
  imageLightSrc: string;
  imageAlt?: string;
}

export function Features({
  title,
  description,
  listItems,
  imageDarkSrc,
  imageLightSrc,
  imageAlt = "Feature illustration",
}: FeaturesProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-xl md:max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">{title}</h2>
              {description && <p className="mt-6">{description}</p>}
            </div>
            <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
              {listItems.map((item, i) => (
                <li key={i}>
                  <item.icon className="size-5" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="bg-gradient-to-b aspect-[76/59] relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              {imageDarkSrc && (
                <img
                  src={imageDarkSrc}
                  className="hidden rounded-[15px] dark:block"
                  alt={`${imageAlt} dark`}
                  width={1207}
                  height={929}
                />
              )}
              <img
                src={imageLightSrc}
                className="rounded-[15px] shadow dark:hidden"
                alt={`${imageAlt} light`}
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
