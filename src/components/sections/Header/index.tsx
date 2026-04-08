import ActionsLeft from "./ActionsLeft";
import ActionsRight from "./ActionsRight";


export default function Header() {
    return (
        <header className="w-full h-16 bg-gray-800 text-white flex items-center justify-between">
            <ActionsLeft />
            <h2 className="text-xl font-bold">Notes</h2>
            <ActionsRight />
        </header>
    )
}