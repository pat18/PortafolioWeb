import Link from "next/link";
import { Navegacion } from "./Navegacion";

export const Header = () =>{

    return(

        <div className="flex flex-col md:flex-row w-screen bg-slate-400 justify-evenly items-center py-2">

            <div className="hidden sm:block">
                <Link href="./">
                    <h3 className="overflow-hidden font-bold text-4xl">SAUL AGUILAR <span className="font-light text-[1.3rem]"> Desarrollador Web</span></h3>            
                </Link>
            </div>                    

            <Navegacion items={[
                {url:"./", cont:"Inicio"}, 
                {url:"./stack", cont:"Stack"},                 
                {url:"./experiencia", cont:"Experiencia"},
                {url:"./proyectos", cont:"Proyectos"},
                {url:"./cv", cont:"CV"},
                {url:"./about", cont:"Sobre mi"}]
            } estilos="flex flex-col min-[400px]:flex-row p-5 "/>

        </div>

    );
}