
import { useEffect, useRef, useState } from "react"
import { Selection } from "./Selection"

export const Header = () => {
    return (
        <header className="header">
            <Selection />
            <ExportModal />
        </header>
    )
}


const ExportModal = () => {
    const modalRef = useRef<HTMLDialogElement>(null);
    const [isOpen, setOpen] = useState(false);


    useEffect(() => {
        if (isOpen) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);
    return (
        <>
            <button onClick={() => { setOpen(true) }}>Export</button>
            <dialog open ref={modalRef} onCancel={() => { setOpen(false) }}>
                <p>You have selected {123} products to export:</p>
                <table>
                    <thead>
                        <tr>
                            <th>sku</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123D</td>
                            <td>testwrw</td>
                        </tr>
                    </tbody>
                </table>
                <form method="dialog">
                    <button onClick={() => { setOpen(false) }}>OK</button>
                </form>
            </dialog>
        </>
    );
}