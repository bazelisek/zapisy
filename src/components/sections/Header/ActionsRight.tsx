import { Button } from "@heroui/react";

export default function ActionsRight() {
    return (
        <div className="flex gap-2 w-[35vw] flex-row-reverse px-3">
            <Button variant="outline">Action 1</Button>
            <Button variant="outline">Action 2</Button>
        </div>
    )
}