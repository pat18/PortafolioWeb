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
                {url:"./", cont:"Inicio",key:1}, 
                {url:"./stack", cont:"Stack",key:2},                 
                {url:"./experiencia", cont:"Experiencia",key:3},
                {url:"./proyectos", cont:"Proyectos",key:4},
                {url:"./cv", cont:"CV",key:5},
                {url:"./about", cont:"Sobre mi",key:6}]
            } estilos="flex flex-col min-[400px]:flex-row p-5 "/>

        </div>

    );
}