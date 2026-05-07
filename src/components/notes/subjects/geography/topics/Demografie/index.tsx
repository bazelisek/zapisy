import List from "@/components/elements/List";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";

export default function Demografie() {
    return (
        <div>
            <Typography level="h3">Demografická charakteristika populace ČR</Typography>
            <List label='počet občanů území k datu'>
                <L l label="priroz.">
                    <L>Natalita</L>
                    <L>Mortalita</L>
                </L>
                <L l label="migrace">
                    <L>Imigrace</L>
                    <L>Emigrace</L>
                </L>
            </List>
            <List label='demografické ukazatele'>
                <L>Střední délka života - naděje dožití</L>
                <L>77000 narozenych dětí za minulej rok</L>
                <L>1,3 dítěte</L>
                <L>10,9 M obyvatel</L>
                <L>+6000 O kolik vzrostl počet obyvatel v roce 25</L>
                <L>-36000 přirozený ubytek</L>
            </List>
            <List label="Národnostní menšiny" variant="ol">
                <L>Slováci</L>
                <L>Poláci</L>
                <L>Rumuni</L>
                <L>Bulhaři</L>
                <L>10% cizinců</L>
            </List>
        </div>
    )
}