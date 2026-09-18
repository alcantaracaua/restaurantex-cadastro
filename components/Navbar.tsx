
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
  const [menuAberto, setMenuAberto] = useState(false)

  function atualizarCarrinho() {
    const carrinhoSalvo = localStorage.getItem("carrinho")

    if (!carrinhoSalvo) {
      setQuantidadeCarrinho(0)
      return
    }

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

  useEffect(() => {
    atualizarCarrinho()

    window.addEventListener("storage", atualizarCarrinho)

    return () => {
      window.removeEventListener("storage", atualizarCarrinho)
    }
  }, [])

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#ddd9d0] bg-[#f5f3ee]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* LOGO */}
        <Link
          href="/"
          onClick={fecharMenu}
          className="group flex flex-col leading-none"
        >
          <span className="font-serif text-3xl font-semibold tracking-[0.12em] text-[#24352b] transition group-hover:opacity-80">
            NŌMA
          </span>

          <span className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#687c6b]">
            pedidos online
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="relative text-sm font-medium text-[#24352b] transition hover:text-[#687c6b]"
          >
            Início
          </Link>

          <Link
            href="/cardapio"
            className="relative text-sm font-medium text-[#24352b] transition hover:text-[#687c6b]"
          >
            Cardápio
          </Link>

          <Link
            href="/sobre"
            className="relative text-sm font-medium text-[#24352b] transition hover:text-[#687c6b]"
          >
            Sobre nós
          </Link>

          {/* CARRINHO */}
          <Link
            href="/pedidos"
            className="group flex items-center gap-2 rounded-full border border-[#cfcac0] bg-white px-4 py-2.5 text-sm font-medium text-[#24352b] shadow-sm transition hover:border-[#24352b] hover:bg-[#24352b] hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.387 1.45m0 0L6.75 15.75a2.25 2.25 0 002.25 1.75h8.25a2.25 2.25 0 002.18-1.7l1.25-5.25a1.125 1.125 0 00-1.093-1.385H5.11m0 0L4.5 6.75m3 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <span>Meu pedido</span>

            {quantidadeCarrinho > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#687c6b] px-1.5 text-[10px] font-bold text-white">
                {quantidadeCarrinho}
              </span>
            )}
          </Link>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4d0c7] bg-white text-[#24352b] transition hover:bg-[#24352b] hover:text-white md:hidden"
          aria-label="Abrir menu"
        >
          {menuAberto ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {menuAberto && (
        <div className="border-t border-[#ddd9d0] bg-[#f5f3ee] px-6 pb-6 pt-4 md:hidden">

          <div className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={fecharMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24352b] transition hover:bg-white"
            >
              Início
            </Link>

            <Link
              href="/cardapio"
              onClick={fecharMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24352b] transition hover:bg-white"
            >
              Cardápio
            </Link>

            <Link
              href="/sobre"
              onClick={fecharMenu}
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#24352b] transition hover:bg-white"
            >
              Sobre nós
            </Link>

            <Link
              href="/pedidos"
              onClick={fecharMenu}
              className="mt-2 flex items-center justify-between rounded-xl bg-[#24352b] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#344d3d]"
            >
              <span className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.387 1.45m0 0L6.75 15.75a2.25 2.25 0 002.25 1.75h8.25a2.25 2.25 0 002.18-1.7l1.25-5.25a1.125 1.125 0 00-1.093-1.385H5.11m0 0L4.5 6.75m3 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                Meu pedido
              </span>

              {quantidadeCarrinho > 0 && (
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#687c6b] px-2 text-xs font-bold">
                  {quantidadeCarrinho}
                </span>
              )}
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}
