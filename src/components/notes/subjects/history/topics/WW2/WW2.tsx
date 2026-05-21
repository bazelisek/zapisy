import Typography from "@/components/elements/Typography";
import PredWW2 from "./PredWW2";
import { Separator } from "@heroui/react";

export default function WW2() {
  return (
    <>
      <PredWW2 />
      <Separator />
      <Typography level="h3">Zahájení WW2</Typography>
      <Typography>
        V srpnu 1939 došlo k podpisu paktu Ribbentrop-Molotov, tedy smlouvy o
        neútočení mezi SSSR a Německem + tajný dodatek (Rozdělení sfér zájmu -
        Německu měla připadnout většina Polska, SSSR jeho zbytek, pobalti,
        Balkán, Beserabie atd)
      </Typography>
    </>
  );
}
