import Image from "next/image";

type Props = {
  leftUrl:      string;
  leftAlt:      string;
  leftCaption?: string;
  rightUrl:     string;
  rightAlt:     string;
  rightCaption?: string;
};

export default function HomepageImagePair({
  leftUrl, leftAlt, leftCaption,
  rightUrl, rightAlt, rightCaption,
}: Props) {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          { url: leftUrl,  alt: leftAlt,  caption: leftCaption  },
          { url: rightUrl, alt: rightAlt, caption: rightCaption },
        ].map((img, i) => (
          <figure key={i} className="flex flex-col gap-3">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "4/3" }}>
              <Image
                src={img.url}
                alt={img.alt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            {img.caption && (
              <figcaption className="text-sm text-center" style={{ color: "#888888" }}>
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
