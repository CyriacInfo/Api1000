import "./App.css";

function App() {
  return <div>
    <div className="HeadMain">
      <img className="LogoMain" src="assets/Logo.png" alt="logo" />
      <div className="ContainerSearch">
        <img className="ContainerSearchImg" src="assets/search.png" alt="logo" />
        <input className="RechargeBar" type="search" id="site-search" name="q"
          aria-label="Search through site content" placeholder="Rechercher" />
      </div>
    </div>
    <div className="NavButton">
      <button className="ButtonMain"><img className="ButtonMainImg" src="assets/chevron-left.png" alt="logo" /></button>
      <button className="ButtonMain"><img className="ButtonMainImg" src="assets/chevron-right.png" alt="logo" /></button>
    </div>
  </div>
}

export default App;
