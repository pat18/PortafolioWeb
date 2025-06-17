"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react"
import { Home, IconName, Stack } from "./Icons";
import GetResize from "./GetResize";
import { useState } from "react";


interface Infolink {
    url     : string;
    cont    : string;
    key     : number;
    icon    : IconName;
}

interface datos {
    items : Infolink[]
}


export const NavegacionDos = ( { items }: datos )=>{    

    const { width } = GetResize();
    const [ navActiva , setNavActiva] = useState(false);
    const nw = width >= 600 ? true : false ; 
    
    const datos = items.map( (item) =>{ 

        return <li key={item.key} className="font-bold whitespace-nowrap py-1">
                    <Link href={ item.url }>                        
                        <span>{item.cont}</span>
                    </Link>                
                </li>;
    });

    const contenido = ( ) =>{
        return ( 
            <ul className={`flex items-center ${ nw ? ' justify-evenly' : 'justify-center divide-[#005792] divide-x-2 divide-solid -skew-x-12'} py-1 mx-auto `}>
                { nw  ? datos : 
                    <> 
                        <Link href="./" className=" bg-[#e0ebeb] flex justify-evenly items-center p-2 "><Home />INICIO</Link>  
                        <button className=" bg-[#e0ebeb] p-2 "
                            onClick={() => setNavActiva(!navActiva)}
                        > 
                            <Stack />
                        </button>
                    </>
                }
            </ul>
        );
    }

    return(

        <div className={ `${ !nw ? 'w-5/6' : 'w-full'}` } >
            {contenido()}
             
                <AnimatePresence initial={false}>
                    {!nw && navActiva? (
                        <motion.div className="w-4/6 absolute left-1/2 transform -translate-x-1/2 mt-5 rounded-xl bg-[#e0ebeb]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            key="box"
                        >
                            <ul className=" px-auto flex flex-col items-center justify-start">{datos}</ul>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
        </div>

    );
}