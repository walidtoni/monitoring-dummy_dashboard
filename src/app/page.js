import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen items-center">
      <Header></Header>
      <Body></Body>
      <Footer className="bottom-0"></Footer>
    </main>
  );
}
