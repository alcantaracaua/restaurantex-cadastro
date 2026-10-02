

"use client"

import { useEffect, useState } from "react"
import Swal from "sweetalert2"

interface Produto {
    id: number
    descricao: string
    categoria: string
    preco: number
    imagem: string
}

export default function CardapioAdmin() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const [carregando, setCarregando] = useState(true)

    async function carregarProdutos() {
        try {
            const response = await fetch("http://localhost:3001/produtos")

            if (!response.ok) {
                throw new Error("Erro ao buscar produtos")
            }

            const data = await response.json()
            setProdutos(data)

        } catch (error) {
            console.log(error)

        } finally {
            setCarregando(false)
        }
    }

    async function excluirProduto(id: number) {

        const resultado = await Swal.fire({
            title: "Excluir produto?",
            text: "Essa opção não poderá ser desfeita.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#24352b",
            cancelButtonColor: "#aaa59b",
            confirmButtonText: "Sim, excluir",
            cancelButtonText: "Cancelar",
        })

        if (!resultado.isConfirmed) {
            return
        }

        try {

            const response = await fetch(
                `${process.env.API_URL}/produtos/${id}`,
                {
                    method: "DELETE",
                }
            )

            if (!response.ok) {
                throw new Error("Erro ao excluir produto")
            }

            setProdutos(
                produtos.filter((produto) => produto.id !== id)
            )

            Swal.fire({
                title: "Produto excluído",
                text: "O produto foi removido com sucesso.",
                icon: "success",
                confirmButtonColor: "#24352b",
                confirmButtonText: "OK",
            })

        } catch (error) {

            console.error(error)

            Swal.fire({
                title: "Erro",
                text: "Não foi possível excluir o produto.",
                icon: "error",
                confirmButtonColor: "#24352b",
                confirmButtonText: "OK",
            })
        }
    }

    useEffect(() => {
        carregarProdutos()
    }, [])

    if (carregando) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#f5f3ee]">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-[#687c6b]">
                        NŌMA
                    </p>

                    <p className="mt-3 text-sm text-gray-400">
                        Carregando produtos...
                    </p>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#f5f3ee] px-6 py-10 md:px-12">

            {/* Cabeçalho */}
            <div className="mx-auto mb-10 max-w-6xl">

                <div className="flex items-center justify-between">

                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#687c6b]">
                            NŌMA
                        </p>

                        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight text-[#24352b]">
                            Gerenciar produtos
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Gerencie os produtos disponíveis no cardápio.
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

            {/* Linha */}
            <div className="mx-auto mb-8 max-w-6xl border-t border-[#ddd9d0]" />

            {/* Produtos */}
            <div className="mx-auto max-w-6xl">

                {produtos.length === 0 ? (

                    <div className="rounded-2xl bg-white p-10 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

                        <p className="font-serif text-xl text-[#24352b]">
                            Nenhum produto cadastrado
                        </p>

                        <p className="mt-2 text-sm text-gray-400">
                            Os produtos cadastrados aparecerão aqui.
                        </p>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

                        {produtos.map((produto) => (

                            <div
                                key={produto.id}
                                className="group overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]"
                            >

                                {/* Imagem */}
                                <div className="overflow-hidden bg-[#f8f7f3]">

                                    <img
                                        src={produto.imagem}
                                        alt={produto.descricao}
                                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                </div>

                                {/* Informações */}
                                <div className="p-5">

                                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#687c6b]">
                                        {produto.categoria}
                                    </p>

                                    <h2 className="mt-2 font-serif text-xl font-semibold text-[#24352b]">
                                        {produto.descricao}
                                    </h2>

                                    <p className="mt-3 text-lg font-medium text-[#687c6b]">
                                        R$ {Number(produto.preco)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </p>

                                    {/* Botão */}
                                    <button
                                        onClick={() =>
                                            excluirProduto(produto.id)
                                        }
                                        className="mt-5 w-full cursor-pointer rounded-xl border border-[#d8d4ca] py-3 text-sm font-medium text-[#8b4c45] transition hover:border-[#8b4c45] hover:bg-[#faf7f5] active:scale-[0.98]"
                                    >
                                        Excluir produto
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

            {/* Rodapé */}
            <div className="mx-auto mt-12 max-w-6xl border-t border-[#ddd9d0] pt-6 text-center">

                <p className="text-xs tracking-wide text-gray-400">
                    NŌMA — simples, sofisticado, memorável.
                </p>

            </div>

        </main>
    )
}

