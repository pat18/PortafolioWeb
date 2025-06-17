import { Header } from "@/components/Header";
import LastJob from "@/components/LastJob";
import { Resumen } from "@/components/Resumen";

export default function Home() {
  return (
    <>
      <Header />      
      <Resumen/>
      <LastJob />      
    </>
   );
}
