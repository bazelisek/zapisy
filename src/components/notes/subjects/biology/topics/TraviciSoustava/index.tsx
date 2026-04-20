import List from "@/components/elements/List";
import ListItem from "@/components/elements/ListItem";
import Typography from "@/components/elements/Typography";
import { Separator, Tooltip } from "@heroui/react";

export default function TraviciSoustava() {
  return (
    <div>
      <h2>Funkce</h2>
      <List label="Funkce" variant="ol">
        <ListItem>Příjem a zpracování potravy (chemické a mechanické)</ListItem>
        <ListItem>Vstřebávání živin a jejich přeměna v játrech</ListItem>
        <ListItem>Odstranění odpadních látek v játrech</ListItem>
        <ListItem>Vylučování nestravitelných zbytků</ListItem>
      </List>
      <Separator />
      <h2>Části trávící soustavy</h2>
      <List label="Části trávící soustavy">
        <ListItem>
          <List label="Ústní dutina">
            <ListItem>Zezadu hltanová úžina</ListItem>
            <ListItem>
              <List label="Zepředu vlastní dutina ústní">
                <ListItem>
                  Vystlána mnohovrstevnatým plochým nerohovatějícím epitelem.
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <List label="Části">
                <ListItem>
                  <List label="rty">
                    <ListItem>
                      Horní a dolní ret se stýkají v śtním koutku
                    </ListItem>
                    <ListItem>Obsahují mimické svaly</ListItem>
                    <ListItem>Zepředu kryty kůží, zezadu sliznicí</ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Tváře">
                    <ListItem>Obsahují mimické svaly</ListItem>
                    <ListItem>Zepředu kryty kůží, zezadu sliznicí</ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Tvrdé patro">
                    <ListItem>
                      Tvoří přepážku mezi dutinou nosní a ústní
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Měkké patro">
                    <ListItem>Navazuje zezadu na tvrdé patro</ListItem>
                    <ListItem>
                      Vybíhá z něj čípek neboli <strong>Uvula</strong>
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Spodní patro">
                    <ListItem>Slinné žlázy</ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Jazyk">
                    <ListItem>
                      <List label="Vnější stavba">
                        <ListItem>
                          Zezadu kořen navazující na hrtanovou příklopku
                        </ListItem>
                        <ListItem>Tělo</ListItem>
                        <ListItem>Hrot</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <List label="Vnitřní stavba">
                        <ListItem>Kryt sliznicí</ListItem>
                        <ListItem>
                          Ke dnu dutiny ústní připojen uzdičkou
                        </ListItem>
                        <ListItem>
                          <List label="Sliznice obsahuje papily/výběžky">
                            <ListItem>
                              Nitkovité papily - dávají jazyku sametový vzhled,
                              pokrývají většinu povrchu
                            </ListItem>
                            <ListItem>
                              Houbovité, Listové(strany) a Hrazené(hrot) papily
                              - obsahují chuťové pohárky, vyskytují se na hrotu
                              a po stranách jazyka
                            </ListItem>
                          </List>
                        </ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      Svalový orgán, který se podílí na mechanickém zpracování
                      potravy a tvorbě jazyka
                    </ListItem>
                    <ListItem>
                      Na povrchu papily, které obsahují chuťové pohárky
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Slinné žlázy">
                    <ListItem>Produkují hlen mucin a ptyalin</ListItem>
                    <ListItem>
                      Velké slinné žlázy - produkují sliny stále. Příušní,
                      podjazykové příušní a podčelistní žlázy
                    </ListItem>
                    <ListItem>
                      Malé slinné žlázy - produkují sliny při podnětu
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Zuby">
                    <ListItem>
                      <List label="Vnitřní stavba">
                        <ListItem>
                          Zubovina - základ hmoty zubu, stavbou podobná
                          kompaktní kostní tkáni
                        </ListItem>
                        <ListItem>
                          Dřeň - obsahuje cévy a nervy, které procházejí zubním
                          kořenem, zajistuje vyzivu
                        </ListItem>
                        <ListItem>
                          Sklovina - kryje a chrání korunku, vysoký podíl
                          anorganických látek - velmi tvrá
                        </ListItem>
                        <ListItem>
                          Tmel (Cement) - Na povrchu kořene, upevňuje zub k
                          čelisti
                        </ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <List label="Vnější stavba">
                        <ListItem>Kořen</ListItem>
                        <ListItem>Krček</ListItem>
                        <ListItem>Korunka</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      <List label="Druhy zubů">
                        <ListItem>
                          Řezáky - 8, slouží k odtrhávání potravy
                        </ListItem>
                        <ListItem>
                          Špičáky - 4, slouží k trhání potravy
                        </ListItem>
                        <ListItem>
                          Třenové zuby - 8, slouží k drcení a rozmělňování
                          potravy
                        </ListItem>
                        <ListItem>
                          Stoličky - 12, slouží k drcení a rozmělňování potravy
                        </ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      Zubní kaz - narušení zubní skloviny působením bakterií,
                      které rozkládají cukry a produkují kyseliny, které
                      poškozují sklovinu
                    </ListItem>
                    <ListItem>
                      Paradentóza - chronické zánětlivé onemocnění dásní a
                      okolních tkání, které může vést k obnažování krčků a
                      uvolnění zubů. Způosbeno bakteriemi.
                    </ListItem>
                  </List>
                </ListItem>
                <ListItem>
                  <List label="Hltan">
                    <ListItem>
                      <List label="části">
                        <ListItem>Nosohltan</ListItem>
                        <ListItem>Ústní část</ListItem>
                        <ListItem>Hrtanová část</ListItem>
                      </List>
                    </ListItem>
                    <ListItem>
                      Ústní a hrtanová část má nerohovatějící a mnohovrstevnatý
                      epitel
                    </ListItem>
                    <ListItem>Nosní část - Řasinkový víceřadý epitel</ListItem>
                    <ListItem>
                      Hltan je tvořen příčně pruhovanými svaly, které se
                      podílejí na polykání potravy
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List label="Jícen">
            <ListItem>25-30cm</ListItem>
            <ListItem>Horní část jícnu - příčně pruhovaná</ListItem>
            <ListItem>
              V prostřední části jícnu se začíná přidávat příčně pruhovaná
              svalovina
            </ListItem>
            <ListItem>Dole již jen hladká</ListItem>
            <ListItem>Sousto se pohybuje peristaltickými pohyby</ListItem>
            {/*Text. TextColor*/}
          </List>
        </ListItem>
        <ListItem>
          <List label="Žaludek">
            <ListItem>
              <List label="Části">
                <ListItem>Česlo</ListItem>
                <ListItem>Klenba</ListItem>
                <ListItem>Tělo</ListItem>
                <ListItem>Vrátník</ListItem>
                <ListItem>Malá křivina (Kurvatura minor)</ListItem>
                <ListItem>Velká křivina (Kurvatura major)</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <List label="Vnitřní stavba">
                <ListItem>
                  Jednovrstevný cylindrický epitel - vytváří sliz
                </ListItem>
                <ListItem>
                  Povrch sliznice je rozdělen do malých políček v jejichž centru
                  jsou jamky, do kterých vedou žlázy
                </ListItem>
                <ListItem>
                  Hlenové buňky - mucin - chrání před požkozením žaludečními
                  šťavami
                </ListItem>
                <ListItem>
                  Zymogenní buňky - žaludeční šťáva s enzymy - lipáza (štěpí
                  tuky), prokáza (štěpí bílkoviny)
                </ListItem>
                <ListItem>Krycí buňky - HCl</ListItem>
                <ListItem>Endokrinní buňky - gastrin</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List label="Střeva (tenké a tlusté)">
            <ListItem>
              <List label="funkce">
                <ListItem>Chemické trávení potravy</ListItem>
                <ListItem>Vstřebávání živin</ListItem>
                <ListItem>Posun nestrávených zbytků do konečníku</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <List label="Tenké střevo">
                <ListItem>
                  <List label="Dvanáctník">
                    <ListItem>20-25 cm, 10% tenkého střeva</ListItem>
                    <ListItem>Ústí vývod ze žlučovodu a slinivky</ListItem>
                  </List>
                </ListItem>
                <ListItem>Lačník - 40%</ListItem>
                <ListItem>Kyčelník - 50% tenkého střeva</ListItem>
                <ListItem>Chymus - tr8venina</ListItem>
                <ListItem>
                  Klky,{" "}
                  <Tooltip delay={0.1}>
                    <Tooltip.Content>buněčný level</Tooltip.Content>
                    <Tooltip.Trigger>Mikroklky</Tooltip.Trigger>
                  </Tooltip>{" "}
                  - zvyšují povrch
                </ListItem>
                <ListItem>Enterocyty - vstřeb. fce - střevní šťávy, miláza, proteázy</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>Játra</ListItem>
        <ListItem>Slinivka břišní</ListItem>
        <ListItem>Žlučník</ListItem>
        <ListItem>Konečník</ListItem>
        <ListItem>Hltan</ListItem>
        <ListItem>Slepé střevo</ListItem>
        <ListItem>Dvanáctník</ListItem>
      </List>
      <Separator></Separator>
      <img src="/zub-skladba-1.jpg"></img>
      <Separator />
      <List label="Trávící trubice">
        <ListItem>
          Souvislý kanál zčínající dutinou ústní a končící řitním otvorem.
        </ListItem>
        <ListItem>Většina entoderm.</ListItem>
        <ListItem>Počátek a konec ektoderm.</ListItem>
        <ListItem>K trubici připojeny žlázy</ListItem>
      </List>
    </div>
  );
}
