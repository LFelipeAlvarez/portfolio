import "./page.css";
import Header from "./components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import Main from "./components/Main";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <Main />
    </LanguageProvider>
  );
}
