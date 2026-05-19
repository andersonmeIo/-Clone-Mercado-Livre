import { HomePage } from "../../modules/home/pages/home.routes";
import { Navbar } from "../../shared/components/layout/Navbar";

export function AppLayout() {
    return (
        <>
            <Navbar/>
            <main className="">
                <HomePage/>
            </main>
        </>
    )
}