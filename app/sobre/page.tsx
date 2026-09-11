
import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] px-6 py-12 md:px-12">


      <Navbar />                                                                                                                                                                                qq

      <div className="mx-auto max-w-6xl">

        {/* Cabeçalho */}
        <div className="mb-14 text-center">

          <p className="text-sm font-medium tracking-[0.3em] text-[#687c6b] uppercase">
            NŌMA
          </p>

          <h1 className="mt-3 text-4xl font-serif font-semibold text-[#24352b] md:text-5xl">
            Sobre nós
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500">
            Uma experiência pensada para transformar bons ingredientes
            em momentos especiais.
          </p>

        </div>

        {/* Conteúdo */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Imagem */}
          <div className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)]">

            <Image
              src="/logo.jpg"
              alt="NŌMA Restaurante"
              width={600}
              height={400}
              className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

          </div>

          {/* Texto */}
          <div>

            <div className="mb-6 h-px w-12 bg-[#687c6b]" />

            <h2 className="mb-5 text-3xl font-serif font-semibold leading-tight text-[#24352b]">
              Mais do que uma refeição,
              <br />
              uma experiência.
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-600">
              No NŌMA, acreditamos que uma boa refeição começa com
              ingredientes selecionados e termina com uma experiência
              que merece ser lembrada.
            </p>

            <p className="mb-8 text-base leading-8 text-gray-600">
              Unimos sabor, qualidade e cuidado em cada detalhe para
              criar um ambiente acolhedor, simples e especial para
              nossos clientes.
            </p>

            {/* Destaques */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">

              <div className="rounded-xl bg-white p-4 text-center shadow-[0_5px_20px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-1">
                <span className="text-3xl">𓎩</span>

                <p className="mt-2 text-sm font-semibold text-[#24352b]">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-[0_5px_20px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-1">
                <span className="text-2xl">✦</span>

                <p className="mt-2 text-sm font-semibold text-[#24352b]">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 text-center shadow-[0_5px_20px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-1">
                <span className="text-2xl">♡</span>

                <p className="mt-2 text-sm font-semibold text-[#24352b]">
                  Carinho
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Frase final */}
        <div className="mt-16 border-t border-[#ddd9d0] pt-8 text-center">

          <p className="font-serif text-lg italic text-[#687c6b]">
            "Simples, sofisticado, memorável."
          </p>

        </div>

      </div>

    </main>
  )
}
