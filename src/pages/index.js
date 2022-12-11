import TopBar from "./../components/topBar";
import NavBar from "./../components/navBar";
import Footer from "../components/footer";
const Index = ({ children }) => {
  return (
    <>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Index;
