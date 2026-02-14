import LayoutVermelho from "./LayoutVermelho"
import LayoutAmarelo from "./LayoutAmarelo"
import LayoutAzul from "./LayoutAzul";

export default function Cards({
    noticias
}) {
    let tipoCor = noticias.tipo;

    if (tipoCor === "vermelha") {
        return(
        <LayoutVermelho  noticias={noticias}/>)
    }
    else if (tipoCor === "amarela") {
        return(
            <LayoutAmarelo noticias={noticias}/>
        )
    }
    else{
        return(
        <LayoutAzul noticias={noticias}/>)
    }
}