
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] flex items-center justify-center px-6">

      <div className="text-center max-w-3xl">

        <p className="text-sm font-medium tracking-[0.4em] text-[#687c6b] uppercase">
          Restaurante
        </p>

        <h1 className="mt-4 text-7xl font-serif font-semibold tracking-tight text-[#24352b]">
          NŌMA
        </h1>

        <div className="mx-auto mt-6 h-px w-16 bg-[#687c6b]" />

        <p className="mt-7 text-lg leading-8 text-gray-500">
          Uma experiência gastronômica que valoriza o simples,
          o sofisticado e o memorável.
        </p>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400">
          No NŌMA, cada prato é pensado para transformar ingredientes
          selecionados em momentos especiais. Sabor, qualidade e
          elegância em cada detalhe.
        </p>

        <div className="mt-10">
          <span className="text-xs tracking-[0.25em] uppercase text-[#687c6b]">
            Simples. Sofisticado. Memorável.
          </span>
        </div>

      </div>

    </main>
  )
}
