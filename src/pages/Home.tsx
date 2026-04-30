import { Link } from 'react-router-dom';
import { ARTWORKS } from '../lib/data';

export default function Home() {
  return (
    <div className="pt-48 pb-32 px-12">
      <section className="mb-32">
        <h1 
          className="font-headline leading-none tracking-tighter border-b-[0.5px] border-outline-variant/15 pb-12 uppercase font-medium text-black"
          style={{ fontSize: "31.6px", letterSpacing: "0.216em" }}
        >
          Yana Naidenko
        </h1>
        <div className="mt-8 flex justify-end">
          <p className="max-w-md font-body text-sm font-light leading-relaxed text-on-surface-variant tracking-wide">
            My work is a reflection of an interaction with nature, where nature helps us find an anchor within ourselves and attain a state of inner silence and tranquility.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {ARTWORKS.map((artwork) => (
          <Link
            key={artwork.id}
            to={`/artwork/${artwork.id}`}
            className="group cursor-pointer block"
          >
            <div className="overflow-hidden bg-surface-container-low mb-6 aspect-square">
              <img
                src={`${import.meta.env.BASE_URL}${artwork.image.replace(/^\//, '')}`}
                alt={artwork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="font-body text-[10px] font-light tracking-[0.15rem] text-on-surface-variant uppercase flex flex-wrap items-center gap-2 mt-4">
              {artwork.title} <span className="opacity-30 mx-1">|</span> {artwork.dimensions} <span className="opacity-30 mx-1">|</span> {artwork.medium}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
