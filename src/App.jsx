import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import "./utils/i18n";
import Hero from "./components/Hero";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Hero />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
