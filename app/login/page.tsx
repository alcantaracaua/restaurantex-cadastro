
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

export default function Login() {
  const router = useRouter()

  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  function entrar() {
    if (usuario === "admin" && senha === "123456") {
      localStorage.setItem("admin_logado", "true")

      router.push("/admin")
      return
    }

    Swal.fire({
      title: "Login inválido",
      text: "Usuário ou senha incorretos.",
      icon: "error",
      confirmButtonText: "Tentar novamente",
      confirmButtonColor: "#24352b",
    })
  }

  return (
    <main className="min-h-screen bg-[#f5f3ee] flex items-center justify-center px-4">

      {/* Decoração de fundo */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#24352b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#24352b]/5 rounded-full blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(36,53,43,0.12)] p-8 sm:p-10">

          {/* Logo */}
          <div className="text-center mb-9">
            <h1 className="text-5xl font-light tracking-[0.25em] text-[#24352b]">
              NŌMA
            </h1>

            <div className="w-10 h-[1px] bg-[#24352b]/40 mx-auto mt-4 mb-5" />

            <h2 className="text-xl font-semibold text-[#24352b]">
              Área Administrativa
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Entre para acessar o painel do restaurante
            </p>
          </div>

          {/* Usuário */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#24352b] mb-2">
              Usuário
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                👤
              </span>

              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Digite seu usuário"
                className="
                  w-full
                  rounded-xl
                  border border-gray-200
                  bg-[#fafafa]
                  py-3.5
                  pl-11
                  pr-4
                  text-gray-800
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:border-[#24352b]
                  focus:ring-2
                  focus:ring-[#24352b]/10
                "
              />
            </div>
          </div>

          {/* Senha */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-[#24352b]">
                Senha
              </label>

              <button
                type="button"
                className="text-xs text-[#24352b] hover:underline"
              >
            
              </button>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔒
              </span>

              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    entrar()
                  }
                }}
                className="
                  w-full
                  rounded-xl
                  border border-gray-200
                  bg-[#fafafa]
                  py-3.5
                  pl-11
                  pr-4
                  text-gray-800
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:border-[#24352b]
                  focus:ring-2
                  focus:ring-[#24352b]/10
                "
              />
            </div>
          </div>

          {/* Botão */}
          <button
            onClick={entrar}
            className="
              w-full
              mt-7
              rounded-xl
              bg-[#24352b]
              py-3.5
              font-semibold
              text-white
              tracking-wide
              transition-all
              duration-300
              hover:bg-[#18261e]
              hover:shadow-lg
              hover:-translate-y-0.5
              active:translate-y-0
              cursor-pointer
            "
          >
            Entrar
          </button>

          {/* Rodapé */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-400">
              Sistema administrativo
            </p>

            <p className="text-xs text-gray-400 mt-1">
              © 2026 NŌMA Restaurante
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}
