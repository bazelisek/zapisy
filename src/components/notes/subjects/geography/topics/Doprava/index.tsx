import List from "@/components/elements/List";
import L from "@/components/shorts/L";

export default function Doprava() {
  return (
    <div>
      <List label="Doprava">
        <L l label="Pozemní">
          <L>Silniční</L>
          <L>Železniční + žel. koridory (v budoucnu VRT - vysokorychlostní trať)</L>
        </L>
        <L>Vodní</L>
        <L>Letecká</L>
      </List>
    </div>
  );
}
