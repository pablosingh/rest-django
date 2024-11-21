import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListTasksPage from "./pages/ListTasksPage";
import FormTaskPage from "./pages/FormTaskPage";
import Navigation from "./components/Navigation";
import styled from "styled-components";
import "./index.css";

export default function App() {
    return (
        <ContainerStyled>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Navigate to="/tasks" element={<ListTasksPage />} />
                        }
                    />
                    <Route path="/tasks" element={<ListTasksPage />} />
                    <Route path="/create" element={<FormTaskPage />} />
                </Routes>
            </BrowserRouter>
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0em 0em;
    padding: 0em 0em;
    // background-color: red;
`;
