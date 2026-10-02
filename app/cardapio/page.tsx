
"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"

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
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos")
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)

  async function carregarProdutos() {
    try {
      const response = await fetch(
           `${process.env.API_URL}/produtos`,
      )

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()

      setProdutos(data)
    } catch (error) {
      console.error("Erro ao carregar produtos:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    carregarProdutos()

    const carrinhoSalvo = localStorage.getItem("carrinho")

    if (carrinhoSalvo) {
      try {
        const carrinho = JSON.parse(carrinhoSalvo)

        const quantidade = carrinho.reduce(
          (total: number, item: { quantidade: number }) =>
            total + item.quantidade,
          0
        )

        setQuantidadeCarrinho(quantidade)
      } catch {
        setQuantidadeCarrinho(0)
      }
    }
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    const carrinhoSalvo = localStorage.getItem("carrinho")

    let carrinho: {
      produto: Produto
      quantidade: number
    }[] = []

    if (carrinhoSalvo) {
      try {
        carrinho = JSON.parse(carrinhoSalvo)
      } catch {
        carrinho = []
      }
    }

    const produtoExistente = carrinho.find(
      (item) => item.produto.id === produto.id
    )

    if (produtoExistente) {
      produtoExistente.quantidade += 1
    } else {
      carrinho.push({
        produto,
        quantidade: 1,
      })
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    const novaQuantidade = carrinho.reduce(
      (total, item) => total + item.quantidade,
      0
    )

    setQuantidadeCarrinho(novaQuantidade)
  }

  const categorias = [
    "Todos",
    ...Array.from(
      new Set(produtos.map((produto) => produto.categoria))
    ),
  ]

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaSelecionada
        )

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#24352b]">

      <Navbar />

      {/* =====================================================
          CABEÇALHO
      ====================================================== */}

      <section className="px-6 pb-10 pt-36 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <div className="h-px w-10 bg-[#687c6b]" />

                <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#687c6b]">
                  NŌMA
                </span>

              </div>

              <h1 className="font-serif text-5xl font-semibold sm:text-6xl">
                Cardápio
              </h1>

              <p className="mt-4 max-w-lg text-base leading-7 text-gray-500">
                Escolha seus favoritos e monte seu pedido.
              </p>

            </div>


            {/* CARRINHO */}

            <Link
              href="/pedidos"
              className="group flex w-fit items-center gap-4 rounded-full bg-[#24352b] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#18261e] hover:shadow-lg"
            >

              <span>Meu pedido</span>

              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white px-2 text-xs font-bold text-[#24352b]">
                {quantidadeCarrinho}
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIAS
      ====================================================== */}

      {!loading && produtos.length > 0 && (

        <section className="px-6 pb-12 md:px-12">

          <div className="mx-auto max-w-7xl">

            <div className="flex gap-3 overflow-x-auto pb-2">

              {categorias.map((categoria) => (

                <button
                  key={categoria}
                  onClick={() =>
                    setCategoriaSelecionada(categoria)
                  }
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    transition
                    ${
                      categoriaSelecionada === categoria
                        ? "bg-[#24352b] text-white shadow-md"
                        : "bg-white text-gray-500 hover:bg-[#24352b]/5 hover:text-[#24352b]"
                    }
                  `}
                >
                  {categoria}
                </button>

              ))}

            </div>

          </div>

        </section>

      )}


      {/* =====================================================
          PRODUTOS
      ====================================================== */}

      <section className="px-6 pb-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          {loading ? (

            <div className="flex min-h-[400px] items-center justify-center">

              <div className="text-center">

                <div className="mx-auto h-9 w-9 animate-spin rounded-full border-2 border-[#24352b]/20 border-t-[#24352b]" />

                <p className="mt-4 text-sm text-gray-400">
                  Preparando o cardápio...
                </p>

              </div>

            </div>

          ) : produtosFiltrados.length === 0 ? (

            <div className="rounded-3xl bg-white px-6 py-20 text-center">

              <p className="font-serif text-2xl">
                Nenhum prato encontrado.
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Tente escolher outra categoria.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {produtosFiltrados.map((produto) => (

                <article
                  key={produto.id}
                  className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_8px_30px_rgba(36,53,43,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(36,53,43,0.12)]"
                >

                  {/* FOTO */}

                  <div className="relative overflow-hidden bg-[#ece9e1]">

                    {produto.imagem ? (

                      <Image
                        src={produto.imagem}
                        alt={produto.descricao}
                        width={600}
                        height={450}
                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                    ) : (

                      <div className="flex h-64 items-center justify-center">

                        <span className="font-serif text-2xl text-[#24352b]/20">
                          NŌMA
                        </span>

                      </div>

                    )}

                    {/* CATEGORIA */}

                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#24352b] shadow-sm backdrop-blur">
                      {produto.categoria}
                    </span>

                  </div>


                  {/* INFORMAÇÕES */}

                  <div className="p-6">

                    <h2 className="font-serif text-2xl font-semibold">
                      {produto.descricao}
                    </h2>

                    <div className="mt-6 flex items-center justify-between gap-4">

                      <p className="font-serif text-xl font-semibold text-[#687c6b]">
                        R$ {Number(produto.preco)
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>

                      <button
                        onClick={() =>
                          adicionarAoCarrinho(produto)
                        }
                        className="rounded-full bg-[#24352b] px-5 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#18261e] hover:shadow-lg active:scale-95"
                      >
                        + Adicionar
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CHAMADA FINAL
      ====================================================== */}

      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#24352b] px-8 py-16 text-center text-white">

          <p className="text-xs uppercase tracking-[0.35em] text-white/50">
            NŌMA
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
            Já sabe o que vai pedir?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/60">
            Confira seu pedido e continue para a finalização.
          </p>

          <Link
            href="/pedidos"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#24352b] transition hover:-translate-y-1 hover:shadow-xl"
          >
            Ver meu pedido
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-[#24352b]/10 px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

          <div>

            <p className="font-serif text-2xl tracking-[0.15em]">
              NŌMA
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Simples. Sofisticado. Memorável.
            </p>

          </div>

          <p className="text-xs text-gray-400">
            © 2026 NŌMA Restaurante
          </p>

        </div>

      </footer>

    </main>
  )
}
