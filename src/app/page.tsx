import NavBar from "@/componentes/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center "> 
    <NavBar active="dashboard"/>
      <h2>Dashboard</h2>

    </main>
  );
    }