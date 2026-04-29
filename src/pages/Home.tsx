import { Link } from 'react-router-dom';
import { ARTWORKS } from '../lib/data';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="pt-48 pb-32 px-12">
      <section className="mb-32">
        <h2 
          className="font-headline leading-none tracking-tighter border-b-[0.5px] border-outline-variant/15 pb-12 uppercase font-medium text-black"
          style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}
        >
          Yana Naidenko
        </h2>
        <div className="mt-8 flex justify-end">
          <p className="max-w-md font-body text-sm font-light leading-relaxed text-on-surface-variant tracking-wide">
            Contemporary visual artist exploring the intersection of organic textures and minimalist geometry through oil on linen.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {ARTWORKS.map((artwork) => (
          <Link
            key={artwork.id}
            to={`/artwork/${artwork.id}`}
            className={cn("group cursor-pointer block", artwork.marginTop)}
          >
            <div className="overflow-hidden bg-surface-container-low mb-6">
              <img
                src={artwork.image}
                alt={artwork.title}
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                  artwork.aspectRatio
                )}
              />
            </div>
            <div className="font-body text-[10px] font-light tracking-[0.15rem] text-on-surface-variant uppercase flex flex-wrap items-center gap-2 mt-4">
              {artwork.title} <span className="opacity-30 mx-1">|</span> {artwork.dimensions} <span className="opacity-30 mx-1">|</span> {artwork.medium} <span className="opacity-30 mx-1">|</span> {artwork.price}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
