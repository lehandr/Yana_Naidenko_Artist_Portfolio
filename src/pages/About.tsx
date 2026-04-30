export default function About() {
  return (
    <div className="px-8 md:px-12 max-w-[1440px] mx-auto mt-16 md:mt-32">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 items-start">
        <div className="md:col-span-7 bg-surface-low overflow-hidden">
          <img 
            src="images/artist-portrait/yana-naidenko.webp"
            alt="Artist Portrait - Yana Naidenko"
            className="w-full h-auto transition-transform duration-1000 hover:scale-[1.02]"
          />
        </div>
        <div className="md:col-span-5 flex flex-col justify-center h-full">
          <h1 className="font-headline leading-none uppercase font-medium text-black mb-8" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>ARTIST STATEMENENT</h1>
          <div className="space-y-8 text-sm leading-[2] tracking-wide opacity-80">
            <p>My name is Yana Naidenko. I am an artist from Ukraine. I was born, studied painting, and worked in the city of Kharkiv. In 2022, due to the war in Ukraine, my family and I were forced to move to Slovenia, where I live and work now.</p>
            <p>The tragic events connected with the war in my country, as well as the forced move, influenced my creative work. The landscape became my main theme.</p>
            <p>I have always found inspiration in nature, but especially during this time of grief and loss, I felt and realised anew how communication with Nature helps me preserve myself and not lose my footing.</p>
            <p>At first, my landscapes were connected with memories of my home – this helped me maintain a connection with myself. I painted them using old photos or photos sent to me by my friends. When enlarged, the photo blurred and lost its clarity, so soon my landscapes became abstract.</p>
            <p>Over time, painting landscapes became something like meditation and communication with Nature. When I paint, I immerse myself in the contemplation of something greater than flowers and grasses. It is as if I am weaving a pattern, catching familiar outlines and leaving imprints of Nature. I do not transfer the drawing from a photo onto the canvas; these landscapes do not have a specific terrain. They are born from memory and the depth of consciousness, transferring a state of inner silence onto the canvas.</p>
            <p>In ancient yogic texts, it is said that Man can know the Truth through the contemplation of Nature. This is close to me, and I would like to show this through my creative work.</p>
            <p>My series of works are about this. To "hear" the silence within oneself, one needs to stop, slow down, and contemplate...</p>
            <p>Many of my works are monochrome, because colour distracts and conveys additional emotions. Alongside oil paint, I also use natural pigments made by me by hand. Mostly – this is charcoal. I like its texture, depth, and a certain meaning. In most works, I do not use white paint to convey a feeling of lightness and transparency.</p>
            <p>Creating my landscapes, I immerse myself deeply within myself, where there is silence, love, and truth. And this is the state I would like to convey to the viewer.</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-24">
        <div className="md:col-span-4">
          <h2 className="font-headline leading-none uppercase font-medium text-black sticky top-32" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>CV</h2>
        </div>
        
        <div className="md:col-span-8 space-y-32">
          <div className="space-y-6 text-sm leading-[2] tracking-wide opacity-80">
            <div>
              <p className="font-bold text-black opacity-100">Yana Naidenko</p>
              <p>Born in 1980</p>
            </div>
            
            <p>
              I was born in Kharkiv, Ukraine. From 2010 to 2022, I worked as a graphic designer. I studied painting and drawing in private art schools and through individual tuition.
            </p>
            
            <p>
              Since 2022, I have been living and working in Maribor, Slovenia, developing my artistic practice in painting and mixed media.
            </p>
            
            <div className="pt-2">
              <p className="font-bold text-black opacity-100">Contact:</p>
              <p>Maribor, Slovenia</p>
              <p>Email: <a href="mailto:yana.naydenko@gmail.com" className="hover:opacity-70 transition-opacity underline underline-offset-4 decoration-outline-variant/50">yana.naydenko@gmail.com</a></p>
            </div>
          </div>

          <CVSection 
            title="EXHIBITIONS" 
            items={[
              { title: "Iz skice (Solo)", location: "UGM Gallery, Maribor, Slovenia", curator: "Živa Kleindienst", year: "2025" },
              { title: "ART Expo Graz", location: "Graz, Austria", curator: "", year: "2026" },
              { title: "ART Expo Ljubljana", location: "Ljubljana, Slovenia", curator: "", year: "2025" },
              { title: "Trava (Group)", location: "Kharkiv, Ukraine", curator: "Polina Kuznetsova", year: "2022" }
            ]} 
          />
          <CVSection 
            title="MEDIA" 
            items={[
              { title: "Yana Naidenko: v Barvah Narave Najti Mir, Ko Svet Sesuje", location: "\"Reporter\", Ljubljana", year: "2026", link: "https://medias.artmajeur.com/achievement/685240/achifile_685240_achievementFile_photo-2026-04-28-17-47-21.jpg?v=1777391310" }
            ]} 
          />
        </div>
      </section>
    </div>
  );
}

function CVSection({ title, items }: { title: string, items: { title: string, location: string, year: string, curator?: string, link?: string }[] }) {
  return (
    <div className="space-y-12">
      <h3 className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-bold mb-8">{title}</h3>
      <div className="space-y-8">
        {items.map((item, index) => {
          const content = (
            <div className={`flex flex-col md:flex-row md:justify-between border-b border-outline-variant/15 pb-6 gap-4 ${item.link ? 'hover:opacity-60 transition-opacity' : ''}`}>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide flex items-center gap-2">
                  {item.title}
                  {item.link && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  )}
                </span>
                {item.curator && (
                  <span className="text-sm tracking-wide opacity-60 mt-1 italic">Curated by {item.curator}</span>
                )}
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0">
                <span className="text-sm tracking-wide opacity-80">{item.location}</span>
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 mt-2">{item.year}</span>
              </div>
            </div>
          );

          if (item.link) {
            return (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block outline-none">
                {content}
              </a>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </div>
  );
}
