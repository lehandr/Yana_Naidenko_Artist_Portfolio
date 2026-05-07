export default function Footer() {
  return (
    <footer className="w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-zinc-50 dark:bg-zinc-950 border-t border-outline-variant/10 mt-auto">
      <div className="font-sans text-[10px] font-light tracking-[0.2rem] uppercase text-zinc-400 dark:text-zinc-600">
        © 2026 YANA NAIDENKO
      </div>
      
      <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 text-center text-wrap">
        <a href="https://www.instagram.com/iananai.art/" className="text-zinc-400 dark:text-zinc-600 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 dark:hover:text-zinc-50 hover:underline underline-offset-8 transition-opacity opacity-100 hover:opacity-70">
          INSTAGRAM
        </a>
        <a href="https://www.artmajeur.com/yana-naidenko" className="text-zinc-400 dark:text-zinc-600 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 dark:hover:text-zinc-50 hover:underline underline-offset-8 transition-opacity opacity-100 hover:opacity-70">
          ARTMAJEUR
        </a>
        <a href="https://www.pinterest.com/yananaydenko/" className="text-zinc-400 dark:text-zinc-600 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 dark:hover:text-zinc-50 hover:underline underline-offset-8 transition-opacity opacity-100 hover:opacity-70">
          PINTEREST
        </a>
        <a href="https://www.artfinder.com/artist/yana-naidenko/" className="text-zinc-400 dark:text-zinc-600 font-sans text-[10px] font-light tracking-[0.2rem] uppercase hover:text-zinc-950 dark:hover:text-zinc-50 hover:underline underline-offset-8 transition-opacity opacity-100 hover:opacity-70">
          ARTFINDER
        </a>
      </div>
    </footer>
  );
}
