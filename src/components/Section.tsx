// src/components/Section.tsx
import clsx from "clsx";
import SectionTitle from "./SectionTitle";

interface Props {
  id?: string;
  title: React.ReactNode;              // allow JSX or string
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;             // optional: extra classes for <h2>
  descriptionClassName?: string;       // optional: extra classes for <p>
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  id,
  title,
  description,
  children,
  className,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <section id={id} className={clsx("py-12 md:py-20", className)}>
      <SectionTitle>
        <h2
          className={clsx(
            "text-center mb-3 text-3xl md:text-5xl font-extrabold leading-tight",
            titleClassName
          )}
        >
          {title}
        </h2>
      </SectionTitle>

      {description ? (
        <p
          className={clsx(
            "mb-12 text-center text-base md:text-lg text-muted-foreground",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}

      {children}
    </section>
  );
};

export default Section;
