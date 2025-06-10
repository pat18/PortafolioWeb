
import Link from "next/link";

interface Infolink {
    url : string,
    cont : string,
    key : number
}

interface datos {
    items : Infolink[];
    estilos:string
}

export const Navegacion = ( { items, estilos }: datos )=>{

    const datos = items.map( (item) =>{
        return <li className="p-1 md:p-2 lg:p-3 hover:bg-blue-300" key={item.key}>  <Link href={ item.url }> {item.cont} </Link> </li>
    });

    return(
    
        <ul className={estilos}>
            {datos}
        </ul>
        
    );
}