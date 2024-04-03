import NavBar from "@/componentes/NavBar";
import Image from "next/image";

export default function Categorias() {
  return (
    <main className="flex min-h-screen flex-col items-center "> 
    <NavBar active="categorias"/>
      <h2>Categorias</h2>
    </main>
  );
    }