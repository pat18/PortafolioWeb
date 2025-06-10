
import Link from "next/link";

interface Infolink {
    url : string,
    cont : string
}

interface datos {
    items : Infolink[];
    estilos:string
}

export const Navegacion = ( { items, estilos }: datos )=>{

    const datos = items.map( (item) =>{
        return <li className="p-1 md:p-2 lg:p-3 hover:bg-blue-300">  <Link href={ item.url }> {item.cont} </Link> </li>
    });

    return(
    
        <ul  className={estilos}>
            {datos}
        </ul>
        
    );
}