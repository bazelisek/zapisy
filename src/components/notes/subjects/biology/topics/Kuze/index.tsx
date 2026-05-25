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
          <L>Různé kožní žlázy (zejmna potní žlázy, apokrinní žlázy a mazové žlázy)</L>
          <L>Tvořena vazivem</L>
          <L>Do pokožky vysílá výběžky = papily</L>
          <L l label="V hlubší vrstvě:"><L>Zakořeněny vlasy a chlupy</L><L l label="Nervová zakončení"><L>termoreceptory</L><L>Monoreceptory</L></L></L>

        </L>
        <L l label="Podkoží"></L>
      </List>
    </div>
  );
}
