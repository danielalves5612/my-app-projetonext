import NavBar from "@/componentes/NavBar";
import Image from "next/image";

export default function Movimentacoes() {
  return (
    <main className="flex min-h-screen flex-col items-center "> 
    <NavBar active="movimentaçoes"/>
      <h2>Movimentações</h2>

    </main>
  );
    }