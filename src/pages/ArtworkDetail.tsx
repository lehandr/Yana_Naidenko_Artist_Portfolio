import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ARTWORKS } from '../lib/data';

export default function ArtworkDetail() {
  const { id } = useParams();
  const artwork = ARTWORKS.find(a => a.id === id) || ARTWORKS[3];
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const message = new FormData(form).get('message')?.toString().trim();
    if (!message) return;

    setStatus('sending');
    const formData = new FormData(form);
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY ?? '');
    formData.append('subject', `ARTIST PORTFOLIO - Request Information - ${artwork.title}`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
        <h1 className="font-headline leading-none tracking-tighter uppercase font-medium text-black mb-6 break-words" style={{ fontSize: "clamp(18px, 5vw, 40.5px)", letterSpacing: "0.216em" }}>{artwork.title}</h1>
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
            <button type="submit" disabled={status === 'sending'} className="w-full bg-primary text-on-primary py-6 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-primary-container disabled:opacity-50">
              {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
            </button>
            {status === 'success' && <p className="text-center text-xs tracking-[0.15em] text-green-700 mt-4">Inquiry sent successfully!</p>}
            {status === 'error' && <p className="text-center text-xs tracking-[0.15em] text-red-600 mt-4">Something went wrong. Please try again.</p>}
          </div>
        </form>
      </section>
    </div>
  );
}

