import { BrowserRouter, Routes, Route } from "react-router-dom"

import { UserProvider } from './contexts/UserContext'
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}