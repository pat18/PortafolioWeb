import Image from "next/image";
import Link from "next/link";

export const Resumen =(  )=> {    

    return(

        <section className="w-screen flex flex-col items-center gap-6 p-10 md:flex-row md:gap-8 ">

            <div className="md:w-3/5 mx-auto px-4">     
                <h2 className="font-mono text-xl">¡Hola! Soy Saúl Aguilar, desarrollador web e Ingeniero en Sistemas con base en México.</h2>
                <br />
                <p className="roboto-custom text-lg/6 text-justify">
                    Me especializo en crear soluciones digitales seguras, escalables y orientadas al rendimiento, adaptadas a las necesidades de cada proyecto. 
                    He trabajado en diversos entornos del mercado, desde sitios corporativos hasta aplicaciones web complejas.
                    <br/>
                    <br/>
                    Tengo experiencia con tecnologías modernas como JavaScript, TypeScript, React, Next.js, WordPress y Spring, lo que me permite participar en todas las etapas del desarrollo, tanto del lado del cliente como del servidor.
                    <br/>
                    <br/>
                    Soy una persona autodidacta y en constante evolución profesional. Esto me permite adaptarme rápidamente a nuevas tecnologías y contribuir de manera efectiva en equipos de trabajo, siempre enfocado en entregar resultados de calidad.
                    <br/>
                    <br/>
                    Estoy abierto a nuevas oportunidades laborales y a colaborar en proyectos freelance que busquen un enfoque profesional, eficiente y comprometido.
                    <br/>
                </p>
            </div>

            <div className="md:w-2/5 mx-auto py-3">

                <div className="w-auto mx-auto m-2">
                    <Image className="object-cover mx-auto shadow-xl rounded-3xl" src="/images/perfil.jpg" width={300} height={300} alt="Imagen perfil" />
                </div>

                <div className="text-center my-4 ">
                    <Link className="rounded-md bg-slate-400 p-3 hover:bg-blue-300" href="./cv">Ver resumen</Link>                    
                </div>
                
                <div className=" text-center">
                    <h5 className="roboto-custom font-extrabold text-lg">  Contacto : saul.ahp@gmail.com</h5>
                </div>
            </div>

        </section> 
    );
}