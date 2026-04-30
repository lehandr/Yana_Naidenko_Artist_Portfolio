export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    let body = "";
    if (name) body += `Name: ${name}\n`;
    if (email) body += `Email: ${email}\n\n`;
    if (message) body += `${message}`;

    const subject = "ARTIST PORTFOLIO - Inquire";
    const mailtoUrl = `mailto:yana.naydenko@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="px-8 md:px-12 py-32 md:py-48 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Section */}
        <div className="md:col-span-5 flex flex-col justify-start">
          <div>
            <h1 className="font-headline leading-none tracking-tighter border-b-[0.5px] border-outline-variant/15 pb-12 uppercase font-medium text-black mb-12" style={{ fontSize: "31.6px", letterSpacing: "0.216em" }}>
              Get in <br />Touch
            </h1>
          </div>
          
          <div className="space-y-16">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] opacity-50 mb-4 uppercase">Inquiries</p>
              <p className="text-2xl font-light italic opacity-80">yana.naydenko@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="md:col-span-6 md:col-start-7 bg-surface-low p-8 md:p-16 flex flex-col justify-center shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-16">
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-[0.2em] opacity-50 mb-6 uppercase">Name</label>
              <input name="name" type="text" placeholder="ENTER YOUR FULL NAME" className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-xs font-light tracking-[0.2em] uppercase transition-all outline-none" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-[0.2em] opacity-50 mb-6 uppercase">Email Address</label>
              <input name="email" type="email" placeholder="EMAIL@EXAMPLE.COM" className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-xs font-light tracking-[0.2em] uppercase transition-all outline-none" />
            </div>
            <div className="relative">
              <label className="block text-[10px] font-bold tracking-[0.2em] opacity-50 mb-6 uppercase">Message</label>
              <textarea name="message" placeholder="DESCRIBE YOUR INQUIRY OR PROJECT..." rows={5} className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:ring-0 focus:border-primary px-0 py-3 text-xs font-light tracking-[0.2em] uppercase transition-all resize-none outline-none" />
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary py-6 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-primary-container">
              Send Message
            </button>
          </form>
        </div>
      </div>


    </div>
  );
}
