
"use client"

import { useState } from "react"
import Swal from "sweetalert2"

export default function Home() {

  const [imagem, setImagem] = useState("")

  async function cadastrar(e: any) {
    e.preventDefault()

    const form = e.target

    const descricao = form.descricao.value
    const preco = form.preco.value
    const categoria = form.categoria.value
    const disponibilidade = form.disponibilidade.value

    try {

      const response = await fetch("http://localhost:3001/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          descricao,
          preco,
          categoria,
          disponibilidade,
          imagem,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro ao cadastrar produto")
      }

      await Swal.fire({
        title: "Produto cadastrado!",
        text: "O produto foi cadastrado com sucesso.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#24352b",
      })

      form.reset()
      setImagem("")

    } catch (error) {

      console.error(error)

      Swal.fire({
        title: "Erro!",
        text: "Não foi possível cadastrar o produto.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#24352b",
      })
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-[#24352b] flex items-center justify-center shadow-sm">
            <span className="text-[#f5f3ee] text-3xl font-serif tracking-widest">
              N
            </span>
          </div>
        </div>

        {/* Nome */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-semibold tracking-[0.25em] text-[#24352b]">
            NŌMA
          </h1>

          <p className="text-sm text-gray-500 mt-2 tracking-wide">
            Restaurante & experiências
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={cadastrar} className="grid gap-4">

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-[#24352b] mb-1">
              Descrição
            </label>

            <input
              name="descricao"
              type="text"
              required
              placeholder="Ex: Hambúrguer artesanal"
              className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#687c6b] focus:ring-2 focus:ring-[#687c6b]/10"
            />
          </div>

          {/* Preço */}
          <div>
            <label className="block text-sm font-medium text-[#24352b] mb-1">
              Preço
            </label>

            <input
              name="preco"
              type="number"
              step="0.01"
              min="0"
              required
              placeholder="Ex: 29.90"
              className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#687c6b] focus:ring-2 focus:ring-[#687c6b]/10"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="block text-sm font-medium text-[#24352b] mb-1">
              Categoria
            </label>

            <input
              name="categoria"
              type="text"
              required
              placeholder="Ex: Hambúrgueres"
              className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#687c6b] focus:ring-2 focus:ring-[#687c6b]/10"
            />
          </div>

          {/* Disponibilidade */}
          <div>
            <label className="block text-sm font-medium text-[#24352b] mb-1">
              Disponibilidade
            </label>

            <select
              name="disponibilidade"
              className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#687c6b] focus:ring-2 focus:ring-[#687c6b]/10"
            >
              <option value="Disponível">
                Disponível
              </option>

              <option value="Indisponível">
                Indisponível
              </option>
            </select>
          </div>

          {/* Imagem */}
          <div>
            <label className="block text-sm font-medium text-[#24352b] mb-1">
              Link da imagem
            </label>

            <input
              name="imagem"
              type="url"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              required
              placeholder="https://exemplo.com/imagem.jpg"
              className="w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-[#687c6b] focus:ring-2 focus:ring-[#687c6b]/10"
            />

            {/* Prévia */}
            {imagem && (
              <div className="mt-3">
                <img
                  src={imagem}
                  alt="Prévia do produto"
                  className="w-full h-48 object-cover rounded-xl border border-gray-200"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#24352b] px-4 py-3 mt-2 text-sm font-medium text-white shadow-sm cursor-pointer transition hover:bg-[#344d3d] active:scale-[0.98]"
          >
            Cadastrar produto
          </button>

        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          NŌMA — simples, sofisticado, memorável.
        </p>

      </div>

    </main>
  )
}
