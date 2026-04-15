import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

export interface FeatureCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  imageDarkSrc?: string;
  imageLightSrc?: string;
  imageAlt?: string;
}

export interface Features10Props {
  cards: FeatureCardData[];
  bottomText?: string;
  bottomItems?: { label: string; pattern: "none" | "border" | "primary" | "blue" }[][];
}

export function Features10({
  cards,
  bottomText,
  bottomItems,
}: Features10Props) {
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          {cards.map((card, i) => (
            <FeatureCard key={i}>
              <CardHeader className="pb-3">
                <CardHeading
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </CardHeader>
              {(card.imageLightSrc || card.imageDarkSrc) && (
                <div className="relative mb-6 border-t border-dashed sm:mb-0">
                  <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,hsl(var(--muted)),white_125%)]" />
                  <div className="aspect-[76/59] p-1 px-6">
                    <DualModeImage
                      darkSrc={card.imageDarkSrc}
                      lightSrc={card.imageLightSrc || ""}
                      alt={card.imageAlt || card.title}
                      width={1207}
                      height={929}
                    />
                  </div>
                </div>
              )}
            </FeatureCard>
          ))}

          {bottomText && (
            <FeatureCard className="p-6 lg:col-span-2">
              <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
                {bottomText}
              </p>
              {bottomItems && (
                <div className="flex justify-center gap-6 overflow-hidden">
                  {bottomItems.map((circles, i) => (
                    <CircularUI
                      key={i}
                      label=""
                      circles={circles.map((c) => ({ pattern: c.pattern }))}
                      className={i > 2 ? "hidden sm:block" : undefined}
                    />
                  ))}
                </div>
              )}
            </FeatureCard>
          )}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-none shadow-zinc-950/5",
      className
    )}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2" />
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2" />
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2" />
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2" />
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

interface DualModeImageProps {
  darkSrc?: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const DualModeImage = ({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className,
}: DualModeImageProps) => (
  <>
    {darkSrc && (
      <img
        src={darkSrc}
        className={cn("hidden dark:block", className)}
        alt={`${alt} dark`}
        width={width}
        height={height}
      />
    )}
    <img
      src={lightSrc}
      className={cn("shadow dark:hidden", className)}
      alt={`${alt} light`}
      width={width}
      height={height}
    />
  </>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          />
        ))}
      </div>
    </div>
    {label && (
      <span className="text-muted-foreground mt-1.5 block text-center text-sm">
        {label}
      </span>
    )}
  </div>
);
