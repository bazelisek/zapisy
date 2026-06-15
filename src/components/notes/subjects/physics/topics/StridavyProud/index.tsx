import DateMark from "@/components/blocks/DateMark";
import List from "@/components/elements/List";
import NoteAccordion from "@/components/elements/NoteAccordion";
import Typography from "@/components/elements/Typography";
import L from "@/components/shorts/L";
import { Separator } from "@heroui/react";
import { InlineMath, BlockMath } from "react-katex";

export default function StridavyProud() {
  return (
    <div>
      <DateMark>6.5.2026</DateMark>
      <List>
        <L>Alternátor/Generátor</L>
        <L>Stator/Rotor</L>
      </List>
      <Typography level="h4">Vzorce:</Typography>
      <Typography>
        <InlineMath math="\Delta \phi = B*S*cos(\alpha)"></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="\mu = U_m * sin(\alpha)"></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="\mu = U_m * sin(\omega t + \varphi_0)"></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="i = I_m * sin(\omega t + \varphi_0)"></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="U_m = "></InlineMath> amplituda napětí (nejvetsi mozna
        hodnota)
      </Typography>
      <Typography>
        <InlineMath math="\omega t + \varphi_0 = "></InlineMath> Fáze
      </Typography>
      <Typography>Příklad...</Typography>
      <Typography>
        <InlineMath math="y = y_m * sin(\omega t)"></InlineMath>
      </Typography>
      <Typography level="h2">Jednoduché obvody střídavého proudu</Typography>
      <NoteAccordion summary="Obvod s rezistorem">
        <img src="/obvod_s_rezistorem.jpg" alt="Obvod s rezistorem" />
        <Separator />
        <img src="/obvod_s_rezistorem_2.jpg" alt="Obvod s rezistorem" />
      </NoteAccordion>
      <DateMark>11.5.2026</DateMark>
      <Typography>
        Ohmuv zakon lze prepsat pomoci okamzitych hodnot nebo amplitud:
      </Typography>
      <Typography>
        <InlineMath math="i = \frac{u}{R}; I_m = \frac{U_m}{R}"></InlineMath>
      </Typography>
      <Typography>
        Tedy <InlineMath math="R = \frac{U_m}{I_m}"></InlineMath> - Rezistance
      </Typography>
      <NoteAccordion summary="Obvod s indukcnosti">
        <img src="/obvod_s_indukcnosti.jpg" alt="Obvod s indukcnosti" />
        <Separator />
        <img src="/obvod_s_indukcnosti_2.png" alt="Obvod s indukcnosti" />
        <Typography>Proud se opožďuje</Typography>
      </NoteAccordion>
      <NoteAccordion summary="Obvod s kapacitou">
        <img
          src="/obvod_stridaveho_proudu_s_kapacitou.jpg"
          alt="Obvod s kapacitou"
        />
        <Separator />
        <img
          src="/obvod_stridaveho_proudu_s_kapacitou_2.jpg"
          alt="Obvod s kapacitou"
        />
        <Typography>Proud se předbíhá</Typography>
        <img
          src="/obvod_stridaveho_proudu_s_kapacitou_3.jpg"
          alt="Obvod s kapacitou"
        />
        <Typography>
          V obvodu s kapacitatorem se energie obvodu premeni na energii desek
          kapacitatoru. Z toho plynou vzorce:
        </Typography>
        <BlockMath math="R = \frac{U_m}{I_m}"></BlockMath>
        <Typography>
          Reaktance kapacitatoru - <InlineMath math="X_L"></InlineMath>
        </Typography>
        <BlockMath math="X_L = \frac{U_m}{I_m}"></BlockMath>
        <BlockMath math="X_L = \omega L"></BlockMath>
        <BlockMath math="[X_L] = \Omega"></BlockMath>
        <Typography>
          Kapacitance kapacitátoru - <InlineMath math="X_C"></InlineMath>
        </Typography>
        <BlockMath math="X_C = \frac{U_m}{I_m}"></BlockMath>
        <BlockMath math="X_C = \frac{1}{\omega C}"></BlockMath>
      </NoteAccordion>
      <NoteAccordion summary="Obvod střídavého proudu s RLC v sérii">
        <img
          src="/obvod_stridaveho_proudu_s_RLC_v_serii.jpg"
          alt="Obvod s RLC"
        />
        <Typography>
          Napětí na jednotlivých prvcích se liší velikostí a také fazovými
          rozdíly.
        </Typography>
        <img
          src="/obvod_stridaveho_proudu_s_RLC_v_serii_2.jpg"
          alt="Obvod s RLC"
        />
        <Typography>
          Impedance - <InlineMath math="Z"></InlineMath>
        </Typography>
      </NoteAccordion>
      <DateMark>20.5.2026</DateMark>
      <Typography>
        Reaktance(X) představuje tu část obvodu, kde se energie elektrická
        nemění na energii tepelnou, ale pouze na energii el. pole mezi deskami
        kondenzátoru a naopak. <InlineMath math="X=X_C-X_L"></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="X_C = X_L => Z=R" />
      </Typography>
      <Typography>
        <InlineMath math="T = 2\pi\sqrt{\frac{l}{g}}"></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="\frac{1}{C\omega} = L \cdot 2\pi \cdot f"></InlineMath>{" "}
        - pokud toto platí, nastává rezonance
      </Typography>
      <Typography>
        <InlineMath math="X_C = \frac{1}{C \cdot 2 \pi f}"></InlineMath> -
        kapacitance
      </Typography>
      <Typography>
        <InlineMath math="f_0 = \frac{1}{2\pi\sqrt{LC}} "></InlineMath>
      </Typography>
      <Typography>
        <InlineMath math="Z = \sqrt{R^2 + (X_C - X_L)^2}" />, Z - Impedance -
        celkový odpor
      </Typography>
      <NoteAccordion summary="Výkon">
        <Typography level="h4">Rezistor</Typography>
        <Typography>
          <InlineMath math="p = U_m \cdot I_m^2 \cdot \sin^2{\omega t}" />
        </Typography>
        <Typography>
          Okamzita hodnota vykonu se meni s dvounasobnou frekvenci a dosahuje
          amplitudu P_m
        </Typography>
        <Typography>
          <InlineMath math="P_m = R \cdot I_m^2" />
        </Typography>
        <Typography><InlineMath math="W = \frac{1}{2} P_m * T = \frac{1}{2}  R I_m^2 \cdot T"/></Typography>
        <Typography>Stredni hodnota Vykonu:</Typography>
        <Typography><InlineMath math="P_str = W/T= 1/2 P_m = \frac{1}{2} R I_m^2" /></Typography>
        <Typography><InlineMath math="U_{ef} = \frac{U_m}{\sqrt{2}}, I_{ef} = \frac{I_m}{\sqrt{2}}"></InlineMath> - Efektivní napětí a proud</Typography>
        <Typography><InlineMath math="P_{str} = U_{ef} \cdot I_{ef}"></InlineMath></Typography>
      </NoteAccordion>
    </div>
  );
}
