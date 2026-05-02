import { useParams } from 'react-router-dom';
import { ARTWORKS } from '../lib/data';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = ARTWORKS.find(a => a.id === id) || ARTWORKS[3];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const location = formData.get('location');
    const message = formData.get('message');
    
    let body = "";
    if (name) body += `Name: ${name}\n`;
    if (email) body += `Email: ${email}\n`;
    if (location) body += `Location: ${location}\n\n`;
    if (message) body += `${message}`;

    const subject = `ARTIST PROTFOLIO - Request Information - ${artwork.title}`;
    const mailtoUrl = `mailto:yana.naydenko@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <div className="px-8 md:px-12 max-w-360 mx-auto mt-16 md:mt-24">
      {/* Hero Section: Main Artwork */}
      <section className="w-full mb-24 overflow-hidden bg-surface-low">
        <img 
          src={`${import.meta.env.BASE_URL}${artwork.image.replace(/^\//, '')}`} 
          alt={artwork.title} 
          className="w-full h-auto transition-transform duration-1000 hover:scale-[1.02]"
        />
      </section>

      {/* Metadata Section */}
      <section className="mb-32 border-b border-outline-variant/15 pb-16">
        <h1 className="font-headline leading-none tracking-tighter uppercase font-medium text-black mb-6" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>{artwork.title}</h1>
        <div className="text-[10px] tracking-[0.2em] uppercase flex flex-wrap items-center gap-4 opacity-80 font-bold">
          <span>{artwork.dimensions}</span>
          <span className="opacity-30">|</span>
          <span>{artwork.medium}</span>
          {(artwork as any).year && (
            <>
              <span className="opacity-30">|</span>
              <span>{(artwork as any).year}</span>
            </>
          )}
        </div>
      </section>

      {/* Concept & Asymmetric Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-40 items-start">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Concept</h2>
        </div>
        <div className="md:col-span-8 space-y-12">
          {(artwork as any).description ? (
            (artwork as any).description.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg font-light leading-loose tracking-wide max-w-2xl opacity-80">
                {paragraph}
              </p>
            ))
          ) : (
            <>
              <p className="text-lg font-light leading-loose tracking-wide max-w-2xl opacity-80">
                This piece explores the transient nature of memory and the physical manifestation of silence. Through layering multiple veils of thinned oil paint against heavy, structured impasto, "{artwork.title}" creates a dialogue between the seen and the felt. The composition is an exercise in restraint, allowing the canvas's raw texture to breathe through the indigo voids.
              </p>
              <p className="text-lg font-light leading-loose tracking-wide max-w-2xl opacity-80">
                Inspired by the atmospheric shifts of the Atlantic coastline at dusk, the work serves as a silent curator of time—capturing the precise moment when the horizon line dissolves into the mist.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="max-w-2xl mx-auto mb-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Request Information</h2>
          <p className="text-sm font-light leading-relaxed tracking-wide opacity-80">For acquisition inquiries or to schedule a private viewing.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <input name="name" type="text" placeholder="FULL NAME" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors" />
            </div>
            <div className="relative">
              <input name="email" type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors" />
            </div>
          </div>
          <div className="relative">
            <input name="location" type="text" placeholder="LOCATION (CITY, COUNTRY)" className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors" />
          </div>
          <div className="relative pt-4">
            <textarea name="message" placeholder="YOUR MESSAGE" rows={4} className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 px-0 focus:ring-0 focus:border-primary text-[10px] tracking-[0.2em] uppercase outline-none transition-colors resize-none" />
          </div>
          <div className="pt-12">
            <button type="submit" className="w-full bg-primary text-on-primary py-6 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-primary-container">
              Submit Inquiry
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

