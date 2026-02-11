import { antic } from "@/fonts";

export default function Headline({
  h2,
  title,
  description,
  className,
  h2Ash1: h2AsH1 = false,
}: HeadlineProps) {
  const commonStyles = "-mb-2 text-base text-neutral-400";

  return (
    <div className={`text-center ${className} flex flex-col gap-5`}>
      {h2 &&
        (h2AsH1 ? (
          <h1 className={commonStyles}>{h2}</h1>
        ) : (
          <h2 className={commonStyles}>{h2}</h2>
        ))}

      <p
        className={`font-mono text-5xl tracking-tighter text-neutral-600 md:text-6xl ${antic.variable}`}
      >
        {title}
      </p>

      {typeof description === "string" ? <p>{description}</p> : description}
    </div>
  );
}
