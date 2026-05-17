export default function RideAndGoWebsite() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-2xl font-black tracking-tight">
            Ride<span className="text-yellow-400">&</span>Go
          </div>
          <div className="hidden gap-8 text-sm text-zinc-300 md:flex">
            <a href="#flotta" className="hover:text-white">Flotta</a>
            <a href="#vantaggi" className="hover:text-white">Perché noi</a>
            <a href="#contatti" className="hover:text-white">Contatti</a>
          </div>
          <a
            href="https://wa.me/393517769766"
            className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-black transition hover:bg-yellow-300"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.22),transparent_35%),linear-gradient(180deg,#0B0B0B_0%,#111_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
              Noleggio scooter a Marano di Napoli
            </p>
            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Muoviti veloce. <br />
              <span className="text-yellow-400">Senza stress.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
              Ride&Go Rental offre scooter pratici, affidabili e pronti per spostamenti quotidiani, lavoro, commissioni e mobilità urbana.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/393517769766"
                className="rounded-2xl bg-yellow-400 px-8 py-4 text-center font-black text-black shadow-xl shadow-yellow-400/20 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Richiedi disponibilità
              </a>
              <a
                href="tel:+393517769766"
                className="rounded-2xl border border-white/20 px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-black"
              >
                Chiama ora
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-zinc-950 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-400">Flotta iniziale</p>
                    <h2 className="text-3xl font-black">Honda SH125</h2>
                  </div>
                  <div className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-black text-black">
                    125cc
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white/5 p-5">
                    <p className="font-bold">Ritiro semplice</p>
                    <p className="mt-1 text-sm text-zinc-400">Gestione veloce e supporto diretto.</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-5">
                    <p className="font-bold">Scooter controllati</p>
                    <p className="mt-1 text-sm text-zinc-400">Mezzi mantenuti e preparati per uso urbano.</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-5">
                    <p className="font-bold">Prenotazione rapida</p>
                    <p className="mt-1 text-sm text-zinc-400">Contatto immediato via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="flotta" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">La flotta</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Scooter pensati per la città</h2>
          </div>
          <p className="max-w-xl text-zinc-400">
            Perfetti per chi vuole evitare traffico, parcheggio e tempi morti negli spostamenti quotidiani.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Honda SH125", "Agile, affidabile e comodo per uso quotidiano."],
            ["Casco incluso", "Soluzione pratica per partire subito."],
            ["Sicurezza", "Antifurto e gestione attenta dei mezzi."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="vantaggi" className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Perché Ride&Go</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Un noleggio semplice, veloce, locale.</h2>
            </div>
            <div className="grid gap-4">
              {[
                "Prenotazione rapida via WhatsApp",
                "Posizione operativa a Marano di Napoli",
                "Soluzioni per giornate, commissioni e mobilità urbana",
                "Assistenza diretta e rapporto umano"
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-yellow-400 p-8 text-black md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-4xl font-black md:text-5xl">Vuoi disponibilità e prezzi?</h2>
              <p className="mt-4 text-lg text-black/70">
                Scrivici su WhatsApp o chiamaci. Ti rispondiamo in modo diretto e veloce.
              </p>
            </div>
            <div className="grid gap-4">
              <a href="https://wa.me/393517769766" className="rounded-2xl bg-black px-6 py-4 text-center font-black text-white transition hover:bg-zinc-800">
                Scrivi su WhatsApp
              </a>
              <a href="mailto:rideandgo.rental@gmail.com" className="rounded-2xl border border-black/20 px-6 py-4 text-center font-bold transition hover:bg-black hover:text-white">
                rideandgo.rental@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        Ride&Go Rental · Marano di Napoli · 351 776 9766
      </footer>
    </main>
  )
}
