import DateMark from "@/components/blocks/DateMark";
import NoteAccordion from "@/components/elements/NoteAccordion";

export default function VylucovaciSoustava() {
  return (
    <div>
      <DateMark>14.5.2026</DateMark>
      <NoteAccordion summary="Papír">
        <object
          data="/materials/VylucovacisoustavaVG.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          style={{ minHeight: "900px" }}
        >
          <p>
            <a href="/materials/VylucovacisoustavaVG.pdf">Open PDF</a>
          </p>
        </object>
      </NoteAccordion>
    </div>
  );
}
