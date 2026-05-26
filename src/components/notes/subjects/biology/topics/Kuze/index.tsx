import List from "@/components/elements/List";
import L from "@/components/shorts/L";

export default function Kuze() {
  return (
    <div>
      <List label="Funkce">
        <L>Ochrana (bariera mezi vnitrnim a vnejsim prostredim)</L>
        <L>Termoregulace</L>
        <L>Vylucovani</L>
        <L>Vstrebavani leciv</L>
        <L>Metabolismus (vitamin D)</L>
        <L>Smyslová</L>
      </List>
      <List label="Casti">
        <L l label="Pokožka">
          <L>Mnohovrstevnatý dláždicový epitel</L>
          <L>rohovatějící vrstva (bunky se plni keratinem)</L>
          <L>Hlubsi vrstvy se stale deli</L>
          <L>Regeneracni schopnost</L>
          <L>Melanocyty - kozni barvivo (Melanin)</L>
          <L>Merkelovy bunky</L>
        </L>
        <L label="Škára" l>
          <L>Obsahuje krevní, mízní cévy a nervová zakončení</L>
          <L>
            Různé kožní žlázy (zejmna potní žlázy, apokrinní žlázy a mazové
            žlázy)
          </L>
          <L>Tvořena vazivem</L>
          <L>Do pokožky vysílá výběžky = papily</L>
          <L l label="V hlubší vrstvě:">
            <L>Zakořeněny vlasy a chlupy</L>
            <L l label="Nervová zakončení">
              <L>termoreceptory</L>
              <L>Monoreceptory</L>
            </L>
          </L>
        </L>
        <L l label="Podkoží"></L>
        <L l label="Kožní deriváty">
          <L label="Chlupy" l>
            <L>
              vyrůstají z chlupových váčků, do nichž ústí mazové žlázy, každý
              chlup spojen se svalem
            </L>
            <L>Chlupový váček</L>
            <L>Chlupový kořen</L>
            <L>Chlupový stvol</L>
            <L l label="Ochlupení">
              <L>Lanugo: první generace</L>
              <L>
                Druhá generace ochlupení: chlupy na většině povrchu těla +
                lokální ochlpení (vlasy, řasy, obočé)
              </L>
              <L>
                Terciární ochlupení: tvorba od pubery (např. pubické ochlupení)
              </L>
            </L>
          </L>
          <L l label="Nehty">
            <L>Fce: Zlepšení hmatu</L>
          </L>
          <L l label="Mazové žlázy">
            <L>Chybi na dlani</L>
          </L>
          <L l label="Potni zlazy">
            <L>Nerovnomerne, pot-NACL, mocovina, ...</L>
            <L>velké potní žlázy - apokrinní</L>
          </L>
          <L l label="Apokrinni zlazy"></L>
          <L l label="Mlecna zlaza">
            <L>Nejvetsi kozni zlaza</L>
            <L>Mlezivo - prvotni mleko</L>
          </L>
        </L>
        <L l label="termoregulace">
            <L>Rizeni vnitřní teploty těla</L>
            <L>Poikilotermie</L>
            <L>Homoitermie</L>
            <L>Heterotermie</L>
            <L>Endotermie - vznik tepla uvnitř organismu</L>
            <L>Regulační centrum - hypotalamus</L>
        </L>
      </List>
    </div>
  );
}
