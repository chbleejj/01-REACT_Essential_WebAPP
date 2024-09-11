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
      <div id="contact">
        <div>
          For more details, please contact{" "}
          <a href="mailto:chleebj@connect.ust.hk" id="email-link">
            chleebj@connect.ust.hk
          </a>
        </div>
        <div>Brian CH Lee, All rights reserved.</div>
      </div>
    </>
  );
}

export default App;
