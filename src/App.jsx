import Header from "./components/Header/Header.jsx";
import CoreConceptSection from "./components/CoreConceptSection.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <CoreConceptSection></CoreConceptSection>
        <Examples></Examples>
      </main>
      <p>For more details</p>
    </>
  );
}

export default App;
