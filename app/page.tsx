
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#24352b]">

      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">

        {/* Detalhes verdes */}
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#24352b]/5 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#687c6b]/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-10">

          {/* TEXTO */}
          <div className="max-w-xl">

            <div className="mb-7 flex items-center gap-4">
              <div className="h-px w-12 bg-[#687c6b]" />

              <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#687c6b]">
                NŌMA • Pedidos Online
              </span>
            </div>

            <h1 className="font-serif text-7xl font-semibold leading-none tracking-tight text-[#24352b] sm:text-8xl">
              NŌMA
            </h1>

            <h2 className="mt-7 max-w-lg font-serif text-3xl leading-tight text-[#24352b] sm:text-4xl">
              Seu próximo sabor favorito está a poucos cliques.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-gray-500">
              Escolha seus pratos favoritos, monte seu pedido e
              receba uma experiência NŌMA onde você estiver.
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="/cardapio"
                className="rounded-full bg-[#24352b] px-8 py-4 text-sm font-medium tracking-wide text-white transition duration-300 hover:-translate-y-1 hover:bg-[#18261e] hover:shadow-xl"
              >
                Fazer meu pedido
              </a>

              <a
                href="/cardapio"
                className="rounded-full border border-[#24352b]/20 px-8 py-4 text-sm font-medium tracking-wide text-[#24352b] transition duration-300 hover:border-[#24352b] hover:bg-white"
              >
                Ver cardápio
              </a>

            </div>

            {/* BENEFÍCIOS */}
            <div className="mt-14 grid grid-cols-3 border-t border-[#24352b]/10 pt-7">

              <div>
                <p className="text-xl font-serif">01</p>

                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Fácil
                </p>
              </div>

              <div>
                <p className="text-xl font-serif">02</p>

                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Rápido
                </p>
              </div>

              <div>
                <p className="text-xl font-serif">03</p>

                <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                  Saboroso
                </p>
              </div>

            </div>

          </div>


          {/* IMAGEM */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#24352b] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85"
                alt="Prato NŌMA"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#162219]/80 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">

                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  NŌMA
                </p>

                <p className="mt-3 font-serif text-3xl">
                  Feito para chegar até você.
                </p>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =====================================================
          COMO FUNCIONA
      ====================================================== */}
      <section className="border-y border-[#24352b]/10 bg-white">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="text-center">

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#687c6b]">
              Simples assim
            </p>

            <h2 className="mt-4 font-serif text-5xl text-[#24352b]">
              Seu pedido em poucos passos.
            </h2>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* PASSO 1 */}
            <div className="rounded-2xl bg-[#f5f3ee] p-8">

              <span className="font-serif text-5xl text-[#24352b]/20">
                01
              </span>

              <h3 className="mt-8 font-serif text-2xl text-[#24352b]">
                Escolha
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Explore nosso cardápio e encontre os pratos que
                combinam com você.
              </p>

            </div>


            {/* PASSO 2 */}
            <div className="rounded-2xl bg-[#24352b] p-8 text-white">

              <span className="font-serif text-5xl text-white/20">
                02
              </span>

              <h3 className="mt-8 font-serif text-2xl">
                Monte seu pedido
              </h3>

              <p className="mt-3 leading-7 text-white/60">
                Adicione seus favoritos ao pedido e confira tudo
                antes de finalizar.
              </p>

            </div>


            {/* PASSO 3 */}
            <div className="rounded-2xl bg-[#f5f3ee] p-8">

              <span className="font-serif text-5xl text-[#24352b]/20">
                03
              </span>

              <h3 className="mt-8 font-serif text-2xl text-[#24352b]">
                Receba
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                Finalize seu pedido e aguarde. O NŌMA cuida do
                resto.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DESTAQUES
      ====================================================== */}
      <section className="bg-[#24352b] px-6 py-28 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Mais pedidos
              </p>

              <h2 className="mt-4 font-serif text-5xl sm:text-6xl">
                Favoritos do NŌMA.
              </h2>

            </div>

            <a
              href="/cardapio"
              className="text-sm text-white/70 underline underline-offset-8 transition hover:text-white"
            >
              Ver cardápio completo →
            </a>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {/* PRATO 1 */}
            <div className="group overflow-hidden rounded-2xl bg-white/5">

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
                  alt="Prato NŌMA"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Destaque
                  </p>

                  <span className="text-sm text-white/60">
                    apartir de R$ 20,00
                  </span>

                </div>

                <h3 className="mt-3 font-serif text-2xl">
                  Sabores da estação
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Uma combinação preparada para surpreender
                  em cada pedido.
                </p>

              </div>

            </div>


            {/* PRATO 2 */}
            <div className="group overflow-hidden rounded-2xl bg-white/5">

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
                  alt="Prato principal NŌMA"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Mais pedido
                  </p>

                  <span className="text-sm text-white/60">
                    apartir de R$ 30,00
                  </span>

                </div>

                <h3 className="mt-3 font-serif text-2xl">
                  Essência NŌMA
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Um dos favoritos para quem está conhecendo
                  o nosso cardápio.
                </p>

              </div>

            </div>


            {/* PRATO 3 */}
            <div className="group overflow-hidden rounded-2xl bg-white/5">

              <div className="aspect-[4/3] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80"
                  alt="Sobremesa NŌMA"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Sobremesa
                  </p>

                  <span className="text-sm text-white/60">
                    apartir de R$ 20,00
                  </span>

                </div>

                <h3 className="mt-3 font-serif text-2xl">
                  Final perfeito
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  Para fechar o pedido com aquele toque especial.
                </p>

              </div>

            </div>

          </div>


          <div className="mt-14 text-center">

            <a
              href="/cardapio"
              className="inline-block rounded-full bg-white px-9 py-4 text-sm font-semibold text-[#24352b] transition hover:-translate-y-1 hover:shadow-xl"
            >
              Quero pedir agora
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          POR QUE NŌMA
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#687c6b]">
              Por que NŌMA?
            </p>

            <h2 className="mt-5 max-w-lg font-serif text-5xl leading-tight text-[#24352b] sm:text-6xl">
              Pensado para deixar seu pedido mais simples.
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-gray-500">
              Do momento em que você escolhe seu prato até a hora
              em que ele chega, queremos que tudo seja fácil,
              intuitivo e especial.
            </p>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-[#24352b]/10 p-7">

              <div className="text-2xl">✦</div>

              <h3 className="mt-5 font-serif text-xl">
                Cardápio selecionado
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Pratos escolhidos para oferecer qualidade e variedade.
              </p>

            </div>


            <div className="rounded-2xl bg-[#24352b] p-7 text-white">

              <div className="text-2xl">✦</div>

              <h3 className="mt-5 font-serif text-xl">
                Pedido fácil
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Tudo organizado para você pedir sem complicação.
              </p>

            </div>


            <div className="rounded-2xl bg-[#687c6b] p-7 text-white">

              <div className="text-2xl">✦</div>

              <h3 className="mt-5 font-serif text-xl">
                Feito com cuidado
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Cada pedido merece atenção aos detalhes.
              </p>

            </div>


            <div className="rounded-2xl border border-[#24352b]/10 p-7">

              <div className="text-2xl">✦</div>

              <h3 className="mt-5 font-serif text-xl">
                Do seu jeito
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Escolha seus favoritos e monte o pedido perfeito.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA FINAL
      ====================================================== */}
      <section className="px-6 pb-28">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#687c6b] px-8 py-20 text-center text-white sm:px-16">

          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Seu próximo pedido
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-5xl leading-tight sm:text-6xl">
            O que vai ser hoje?
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/70">
            Explore nosso cardápio, escolha seus favoritos e faça
            seu pedido online.
          </p>

          <a
            href="/cardapio"
            className="mt-9 inline-block rounded-full bg-white px-9 py-4 text-sm font-semibold text-[#24352b] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Fazer meu pedido
          </a>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-[#24352b]/10 px-6 py-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="font-serif text-3xl tracking-wide text-[#24352b]">
              NŌMA
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Simples. Sofisticado. Memorável.
            </p>

          </div>


          <div className="flex flex-wrap gap-7 text-sm text-gray-500">

            <a
              href="/"
              className="transition hover:text-[#24352b]"
            >
              Início
            </a>

            <a
              href="/cardapio"
              className="transition hover:text-[#24352b]"
            >
              Cardápio
            </a>

            <a
              href="/sobre"
              className="transition hover:text-[#24352b]"
            >
              Sobre nós
            </a>

            <a
              href="/pedidos"
              className="transition hover:text-[#24352b]"
            >
              Meus pedidos
            </a>

          </div>

        </div>


        <div className="mx-auto mt-10 max-w-7xl border-t border-[#24352b]/10 pt-6 text-center text-xs text-gray-400">
          © 2026 NŌMA Restaurante. Todos os direitos reservados.
        </div>

      </footer>

    </main>
  )
}
