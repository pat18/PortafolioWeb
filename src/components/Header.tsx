import Link from "next/link";
import { Navegacion } from "./Navegacion";

export const Header = () =>{

    return(

        <section className="sticky top-0 w-auto flex justify-evenly items-center min-[600px]:bg-slate-400 py-2 px-5 sm:flex-col lg:flex-row">
            <div className="hidden ">
                <Link href="./">
                    <h3 className="overflow-hidden font-bold text-4xl">SAUL AGUILAR <span className="font-light text-[1.3rem]"> Desarrollador Web</span></h3>            
                </Link>
            </div>                    

            <Navegacion items={[
                {url:"./", cont:"INICIO",key:1,icon:"home"}, 
                {url:"./stack", cont:"STACK",key:2,icon:"stack" },                 
                {url:"./experiencia", cont:"EXPERIENCIA",key:3,icon:"maletin"},
                {url:"./proyectos", cont:"PROYECTOS",key:4,icon:"docs"},
                {url:"./cv", cont:"CV",key:5,icon:"boxdoc"},
                {url:"./about", cont:"SOBRE MI",key:6,icon:"fire"}]
            }/>

        </section>

    );
}