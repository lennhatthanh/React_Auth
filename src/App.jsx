import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutBlank from "./layout/blank";
import Login from "./page/login";
import SignUp from "./page/SignUp";
import AuthContextProvider from "./context/AuthContext";
import Home from "./page/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Layout from "./layout";

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route path="/" element={<LayoutBlank />}>
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                    </Route>
                    <Route path="/" element={<Layout />}>
                        <Route
                            index
                            path=""
                            element={
                                <ProtectedRoute role="user">
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </AuthContextProvider>
            <Toaster />
        </BrowserRouter>
    );
}

export default App;
