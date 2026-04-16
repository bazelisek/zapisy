import { Separator } from "@heroui/react";
import Typography from "../elements/Typography";

export default function DateMark({ children } : { children: string }) {
    return (
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: 'center', gap: "0.5rem", width:'100%' }}>
            <div style={{width: '100%'}}><Separator className={"mr-1"} /></div>
            <span><Typography variant="note">{children}</Typography></span>
        </div>
    )
}