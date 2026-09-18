
"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function SobrePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f5f3ee] text-[#24352b]">

        {/* =====================================================
            CABEÇALHO
        ====================================================== */}

        <section className="px-6 pb-20 pt-20 md:px-12">

          <div className="mx-auto max-w-6xl text-center">

            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#687c6b]">
              NŌMA
            </p>

            <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight md:text-7xl">
              Sobre nós
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-500">
              Uma experiência de pedidos online pensada para tornar
              cada escolha mais simples, intuitiva e especial.
            </p>

          </div>

        </section>


        {/* =====================================================
            NOSSA HISTÓRIA
        ====================================================== */}

        <section className="border-y border-[#24352b]/10 bg-white">

          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center lg:px-10">

            {/* IMAGEM */}

            <div className="group relative overflow-hidden rounded-[2rem] bg-[#24352b]">

              <Image
                src="/logo.jpg"
                alt="NŌMA"
                width={700}
                height={500}
                className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#162219]/50 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  NŌMA
                </p>

                <p className="mt-2 font-serif text-3xl text-white">
                  Feito para chegar até você.
                </p>

              </div>

            </div>


            {/* TEXTO */}

            <div>

              <div className="mb-6 h-px w-12 bg-[#687c6b]" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#687c6b]">
                Nossa proposta
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#24352b] md:text-5xl">
                Pedir também pode ser uma experiência.
              </h2>

              <p className="mt-7 text-base leading-8 text-gray-600">
                O NŌMA nasceu com uma ideia simples: tornar o processo
                de pedir comida mais agradável, organizado e intuitivo.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Em vez de complicar, queremos facilitar. Você encontra
                o que procura, escolhe seus favoritos, monta seu pedido
                e acompanha tudo de forma simples.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600">
                Cada detalhe da plataforma foi pensado para que você
                tenha menos etapas entre a vontade de comer e o seu
                próximo pedido.
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            NOSSA FILOSOFIA
        ====================================================== */}

        <section className="bg-[#24352b] px-6 py-28 text-white">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl">

              <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                Nossa filosofia
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
                Menos complicação.
                <br />
                Mais experiência.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
                Acreditamos que uma boa experiência começa antes
                mesmo do pedido chegar. Ela começa na facilidade
                de encontrar, escolher e decidir.
              </p>

            </div>


            <div className="mt-16 grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl bg-white/5 p-8">

                <span className="font-serif text-5xl text-white/20">
                  01
                </span>

                <h3 className="mt-8 font-serif text-2xl">
                  Simplicidade
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  Tudo deve ser fácil de entender e rápido de usar.
                  Sem etapas desnecessárias.
                </p>

              </div>


              <div className="rounded-2xl bg-[#687c6b] p-8">

                <span className="font-serif text-5xl text-white/30">
                  02
                </span>

                <h3 className="mt-8 font-serif text-2xl">
                  Intenção
                </h3>

                <p className="mt-4 leading-7 text-white/70">
                  Cada elemento existe para tornar sua experiência
                  melhor, mais clara e mais agradável.
                </p>

              </div>


              <div className="rounded-2xl bg-white/5 p-8">

                <span className="font-serif text-5xl text-white/20">
                  03
                </span>

                <h3 className="mt-8 font-serif text-2xl">
                  Cuidado
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  Acreditamos que os pequenos detalhes são capazes
                  de transformar uma experiência comum.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            O QUE NOS MOVE
        ====================================================== */}

        <section className="px-6 py-28 md:px-12">

          <div className="mx-auto max-w-6xl">

            <div className="grid gap-16 md:grid-cols-2 md:items-center">

              <div>

                <p className="text-xs uppercase tracking-[0.35em] text-[#687c6b]">
                  O que nos move
                </p>

                <h2 className="mt-5 font-serif text-5xl leading-tight text-[#24352b]">
                  Criar uma experiência que você queira repetir.
                </h2>

              </div>


              <div>

                <p className="text-base leading-8 text-gray-500">
                  Para nós, o pedido não termina no botão
                  <span className="font-medium text-[#24352b]">
                    {" "}“finalizar”.
                  </span>
                  {" "}A experiência está em cada escolha feita
                  durante o caminho.
                </p>

                <p className="mt-5 text-base leading-8 text-gray-500">
                  Por isso, buscamos unir tecnologia, organização
                  e uma identidade própria para criar uma forma
                  diferente de pedir online.
                </p>

              </div>

            </div>


            {/* FRASE */}

            <div className="mt-20 border-t border-[#24352b]/10 pt-10 text-center">

              <p className="font-serif text-2xl italic text-[#687c6b] md:text-3xl">
                “Simples. Intencional. Memorável.”
              </p>

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="px-6 pb-28">

          <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#687c6b] px-8 py-20 text-center text-white md:px-16">

            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Agora que você conhece o NŌMA
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-5xl leading-tight md:text-6xl">
              Que tal fazer seu próximo pedido?
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-7 text-white/70">
              Explore nosso cardápio, escolha seus favoritos
              e monte seu pedido.
            </p>

            <Link
              href="/cardapio"
              className="mt-9 inline-block rounded-full bg-white px-9 py-4 text-sm font-semibold text-[#24352b] transition hover:-translate-y-1 hover:shadow-xl"
            >
              Ver cardápio
            </Link>

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

              <Link
                href="/"
                className="transition hover:text-[#24352b]"
              >
                Início
              </Link>

              <Link
                href="/cardapio"
                className="transition hover:text-[#24352b]"
              >
                Cardápio
              </Link>

              <Link
                href="/sobre"
                className="transition hover:text-[#24352b]"
              >
                Sobre nós
              </Link>

              <Link
                href="/pedidos"
                className="transition hover:text-[#24352b]"
              >
                Meu pedido
              </Link>

            </div>

          </div>


          <div className="mx-auto mt-10 max-w-7xl border-t border-[#24352b]/10 pt-6 text-center text-xs text-gray-400">
            © 2026 NŌMA. Todos os direitos reservados.
          </div>

        </footer>

      </main>
    </>
  )
}