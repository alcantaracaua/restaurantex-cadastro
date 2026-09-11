"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface Produto {
  id: number
  descricao: string
  categoria: string
  preco: number
  imagem?: string
}

export default function CardapioPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/produtos")

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()

      setProdutos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

  return (
    <main className="min-h-screen bg-[#f5f3ee] px-6 py-10 md:px-12">

      {/* Cabeçalho */}
      <div className="mx-auto mb-10 max-w-6xl">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-[#687c6b] uppercase">
              NŌMA
            </p>

            <h1 className="mt-2 text-4xl font-serif font-semibold tracking-tight text-[#24352b]">
              Nosso cardápio
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Escolha seu prato e faça seu pedido.
            </p>
          </div>

          {/* Logo */}
          <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#24352b] sm:flex">
            <span className="font-serif text-2xl tracking-widest text-[#f5f3ee]">
              N
            </span>
          </div>

        </div>

      </div>

      {/* Carregando */}
      {loading ? (
        <p className="text-center text-gray-500">
          Carregando produtos...
        </p>
      ) : produtos.length === 0 ? (
        <p className="text-center text-gray-500">
          Nenhum produto encontrado.
        </p>
      ) : (

        /* Produtos */
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {produtos.map((produto) => (

            <div
              key={produto.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
            >

              {/* Imagem */}
              <div className="overflow-hidden bg-[#f8f7f3]">

                {produto.imagem ? (
                  <Image
                    src={produto.imagem}
                    alt={produto.descricao}
                    width={400}
                    height={250}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-52 items-center justify-center text-sm text-gray-400">
                    Sem imagem
                  </div>
                )}

              </div>

              {/* Informações */}
              <div className="p-5">

                <h2 className="text-xl font-serif font-semibold text-[#24352b]">
                  {produto.descricao}
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                  {produto.categoria}
                </p>

                <p className="mt-3 text-lg font-medium text-[#687c6b]">
                  R$ {Number(produto.preco).toFixed(2).replace(".", ",")}
                </p>

                <button
                  className="mt-5 w-full cursor-pointer rounded-xl bg-[#24352b] py-3 text-sm font-medium text-white transition hover:bg-[#344d3d] active:scale-[0.98]"
                >
                  Fazer pedido
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

      {/* Rodapé */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-[#ddd9d0] pt-6 text-center">

        <p className="text-xs tracking-wide text-gray-400">
          NŌMA — simples, sofisticado, memorável.
        </p>

      </div>

    </main>
  )
}





