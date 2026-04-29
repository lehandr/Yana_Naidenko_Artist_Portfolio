export default function About() {
  return (
    <div className="px-8 md:px-12 max-w-[1440px] mx-auto mt-16 md:mt-32">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-32 items-start">
        <div className="md:col-span-7 bg-surface-low overflow-hidden rounded-[3rem]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1TWSLuxxE6LXigxCxLN0q1tirwpE0tgQMkBWWLDHhkqiStpWc_L3AMW1axSNNqWJSbFjkHgYaP27IdVsOIJvDS-aNwcJ2TP5V5VYVGWzOKU6QeButYFFwoR5d80d3eIiolxdf52YT5ErDlpa3Ag-dxMMo5OaKaNngV9ZgWsh-bF7ARxUGJ-02k-Xsl4GLppqo6QdMXhRbAZTChVRAzDv-pNcGB2d-r0pi4xNJsSk5cNVfp3MwoREN2BRw65Nw2Ms_408rijjL_w"
            alt="Artist Portrait"
            className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms]"
          />
        </div>
        <div className="md:col-span-5 flex flex-col justify-center h-full">
          <h1 className="font-headline leading-none uppercase font-medium text-black mb-8" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>ABOUT</h1>
          <div className="space-y-8 text-sm leading-[2] tracking-wide opacity-80">
            <p>Based in Berlin, my work explores the intersection of organic forms and digital fragmentation. Through a multidisciplinary approach encompassing photography and sculpture, I seek to capture the ephemeral nature of the modern experience.</p>
            <p>Since 2015, I have been investigating how light interacts with physical textures, creating immersive installations that challenge the viewer's perception of space and time. My practice is deeply rooted in the belief that art should serve as a silent curator of the human condition.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/15 py-32 px-4 md:px-24 mb-40">
        <blockquote className="text-3xl md:text-5xl text-center leading-tight tracking-wide font-light italic opacity-80">
          "The canvas is not a space to fill, but a void to inhabit. I do not create art; I simply frame the silence that already exists."
        </blockquote>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-24">
        <div className="md:col-span-4">
          <h2 className="font-headline leading-none uppercase font-medium text-black sticky top-32" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>CV</h2>
        </div>
        
        <div className="md:col-span-8 space-y-32">
          <CVSection 
            title="EDUCATION" 
            items={[
              { title: "Master of Fine Arts", location: "Royal College of Art, London", year: "2012 — 2014" },
              { title: "Bachelor of Arts in Photography", location: "Parsons School of Design, New York", year: "2008 — 2012" }
            ]} 
          />
          <CVSection 
            title="EXHIBITIONS" 
            items={[
              { title: "The Silent Room (Solo)", location: "Gallery Nord, Berlin", year: "2023" },
              { title: "Fragmented Realities (Group)", location: "Tate Modern, London", year: "2022" },
              { title: "Light & Void (Solo)", location: "MoMA PS1, New York", year: "2021" },
              { title: "Biennale of Contemporary Art", location: "Venice, Italy", year: "2019" }
            ]} 
          />
          <CVSection 
            title="AWARDS" 
            items={[
              { title: "Emerging Artist Grant", location: "Guggenheim Foundation", year: "2022" },
              { title: "Photography Innovation Prize", location: "Aperture Foundation", year: "2020" }
            ]} 
          />
        </div>
      </section>
    </div>
  );
}

function CVSection({ title, items }: { title: string, items: { title: string, location: string, year: string }[] }) {
  return (
    <div className="space-y-12">
      <h3 className="text-[10px] tracking-[0.2em] uppercase opacity-50 font-bold mb-8">{title}</h3>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between border-b border-outline-variant/15 pb-6">
            <span className="font-bold text-sm tracking-wide">{item.title}</span>
            <div className="flex flex-col md:items-end mt-2 md:mt-0">
              <span className="text-sm tracking-wide opacity-80">{item.location}</span>
              <span className="text-[10px] tracking-[0.2em] uppercase opacity-50 mt-2">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
