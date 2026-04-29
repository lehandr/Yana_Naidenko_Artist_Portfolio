import { useParams } from 'react-router-dom';
import { ARTWORKS } from '../lib/data';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = ARTWORKS.find(a => a.id === id) || ARTWORKS[3];

  return (
    <div className="px-8 md:px-12 max-w-[1440px] mx-auto mt-16 md:mt-24">
      {/* Hero Section: Main Artwork */}
      <section className="w-full mb-24 overflow-hidden rounded-[3rem] bg-surface-low">
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          className="w-full aspect-[4/5] md:aspect-[16/9] object-cover transition-transform duration-1000 hover:scale-[1.02]"
        />
      </section>

      {/* Metadata Section */}
      <section className="mb-32 border-b border-outline-variant/15 pb-16">
        <h1 className="font-headline leading-none tracking-tighter uppercase font-medium text-black mb-6" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>{artwork.title}</h1>
        <div className="text-[10px] tracking-[0.2em] uppercase flex flex-wrap items-center gap-4 opacity-80 font-bold">
          <span>{artwork.dimensions}</span>
          <span className="opacity-30">|</span>
          <span>{artwork.medium}</span>
          <span className="opacity-30">|</span>
          <span>{artwork.price}</span>
        </div>
      </section>

      {/* Concept & Asymmetric Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-40 items-start">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Concept</h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          <p className="text-lg font-light leading-[2] tracking-wide max-w-2xl opacity-80">
            This piece explores the transient nature of memory and the physical manifestation of silence. Through layering multiple veils of thinned oil paint against heavy, structured impasto, "{artwork.title}" creates a dialogue between the seen and the felt. The composition is an exercise in restraint, allowing the canvas's raw texture to breathe through the indigo voids.
          </p>
          <p className="text-lg font-light leading-[2] tracking-wide max-w-2xl opacity-80">
            Inspired by the atmospheric shifts of the Atlantic coastline at dusk, the work serves as a silent curator of time—capturing the precise moment when the horizon line dissolves into the mist.
          </p>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="mb-40">
        <h2 className="text-2xl font-bold tracking-tight mb-16">Technical Specifications</h2>
        <div className="w-full space-y-2">
          <SpecRow label="YEAR" value="2023" />
          <SpecRow label="MEDIUM" value="Archival Oil on Italian Linen" />
          <SpecRow label="FRAME" value="Natural Oak Floating Frame (Included)" />
          <SpecRow label="CERTIFICATE" value="Signed and Dated COA provided" />
          <SpecRow label="INVENTORY ID" value="AP-2023-014" />
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-2xl mx-auto mb-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Request Information</h2>
          <p className="text-sm font-light leading-relaxed tracking-wide opacity-80">For acquisition inquiries or to schedule a private viewing.</p>
        </div>
        
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors" />
            </div>
            <div className="relative">
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors" />
            </div>
          </div>
          <div className="relative">
            <input type="text" placeholder="LOCATION (CITY, COUNTRY)" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors" />
          </div>
          <div className="relative pt-4">
            <textarea placeholder="YOUR MESSAGE" rows={4} className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors resize-none" />
          </div>
          <div className="flex justify-center pt-12">
            <button type="button" className="bg-primary text-on-primary px-16 py-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-primary-container transition-all active:scale-95">
              Submit Inquiry
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

function SpecRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-6 border-b border-outline-variant/15 gap-4">
      <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-bold">{label}</span>
      <span className="text-sm tracking-wide font-light">{value}</span>
    </div>
  );
}
