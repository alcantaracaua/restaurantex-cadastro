
"use client"

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Swal from "sweetalert2"

export default function Cadastro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const router = useRouter()

  async function cadastrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!nome || !email || !senha) {
      Swal.fire({
        title: "Atenção!",
        text: "Preencha todos os campos",
        icon: "warning"
      })

      return
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          nome,
          email,
          senha
        }
      )

      console.log("Cadastro realizado com sucesso!")
      console.log(response.data)

      await Swal.fire({
        title: "Sucesso!",
        text: "Administrador cadastrado com sucesso!",
        icon: "success"
      })

      router.push("/login")

    } catch (error) {
      console.log(error)

      Swal.fire({
        title: "Erro!",
        text: "Falha ao cadastrar administrador.",
        icon: "error"
      })
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1">

        <h1 className="text-2xl font-bold mb-5">
          Cadastro do Administrador
        </h1>

        <form
          onSubmit={cadastrar}
          className="flex flex-col gap-3"
        >

          <label>Nome</label>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />

          <label>E-mail</label>

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />

          <label>Senha</label>

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border border-gray-300 rounded p-2"
          />

          <button
            type="submit"
            className="bg-lime-300 p-3 text-white rounded hover:bg-lime-400 cursor-pointer"
          >
            Cadastrar
          </button>

        </form>

      </div>
    </main>
  )
}
