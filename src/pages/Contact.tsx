export default function Contact() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-8 md:px-12 py-32 md:py-48 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Section */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <h1 className="font-headline leading-none tracking-tighter border-b-[0.5px] border-outline-variant/15 pb-12 uppercase font-medium text-black mb-12" style={{ fontSize: "40.5px", letterSpacing: "0.216em" }}>
              Get in <br />Touch
            </h1>
            <p className="text-sm font-light tracking-wide max-w-sm mb-24 leading-[2] opacity-80">
              For inquiries regarding acquisitions, exhibition opportunities, or commissions, please reach out via the form or direct correspondence.
            </p>
          </div>
          
          <div className="space-y-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] opacity-50 mb-4 uppercase">Inquiries</p>
              <p className="text-2xl font-light italic opacity-80">studio@thesilentcurator.com</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] opacity-50 mb-4 uppercase">Office</p>
              <p className="text-sm font-light uppercase tracking-[0.2em] opacity-80">Berlin, Germany</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:col-span-6 md:col-start-7 bg-surface-low rounded-[3rem] p-8 md:p-16 flex flex-col justify-center shadow-sm">
          <form className="space-y-16">
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-[0.2em] opacity-50 mb-6 uppercase">Name</label>
              <input type="text" placeholder="ENTER YOUR FULL NAME" className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-xs font-light tracking-[0.2em] uppercase transition-all outline-none" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-[0.2em] opacity-50 mb-6 uppercase">Email Address</label>
              <input type="email" placeholder="EMAIL@EXAMPLE.COM" className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-xs font-light tracking-[0.2em] uppercase transition-all outline-none" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-[0.2em] opacity-50 mb-6 uppercase">Message</label>
              <textarea placeholder="DESCRIBE YOUR INQUIRY OR PROJECT..." rows={5} className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-xs font-light tracking-[0.2em] uppercase transition-all resize-none outline-none" />
            </div>
            <button type="button" className="w-full bg-primary text-on-primary py-6 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-primary-container">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Atmospheric Visual Anchor */}
      <section className="px-8 md:px-12 pb-32">
        <div className="w-full aspect-[21/9] overflow-hidden rounded-[3rem] bg-surface-low">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhE7A1GtdhFfs1xroplu61cBWjPeflHsfLje9XeYFTIa1rUNq4EeShCcbBoXJjd_xu1RWikbsJPyFydqIwgcyLojAxg5OuglAUG5150g-T_kV-yN5lgJ2zpfUhuptHEpgsrZtHfPRO9VJ0MtyKNTxu8HEg5mQ2c_pLNw47FyG22aikO2lFZFpeN1HWAzLxeqFE-zWGeTmm_8qJIhI2f9K88oYpcSlm8xTCZnDNowcZlLCscga-cidGhV_OcOg_VSEDumCHklT4zQ"
            alt="Studio window shadow"
            className="w-full h-full object-cover opacity-90 transition-transform duration-[2000ms] hover:scale-[1.03]"
          />
        </div>
      </section>
    </div>
  );
}
