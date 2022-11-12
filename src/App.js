import './App.css';
import { Dashboard } from './views/dashboard'
import { SideNav } from './views/components/sidenav'
import { Header } from './views/components/header'
import Routers from "./router";
import { baseUrl } from './constants/constants';
import {
  bootstrapMin,
  popperMin,
  anchorJs,
  Is,
  fontAwesome,
  lodaSh,
  httpsPolyfill,
  List,
  featherIcons,
  dayJs,
  phoenix,
  eCharts,
  chart,
  leaFlet,
  leafletMarkercluster,
  leafletTilelayer,
  ecommerceDashboard
} from './scripts/scripts'
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        {/* <script src={baseUrl + bootstrapMin} type="text/javascript" /> */}
        <script src={baseUrl + anchorJs} type="text/javascript" />
        <script src={baseUrl + popperMin} type="text/javascript" />
        <script src={baseUrl + Is} type="text/javascript" />
        <script src={baseUrl + fontAwesome} type="text/javascript" />
        <script src={baseUrl + lodaSh} type="text/javascript" />
        <script src={baseUrl + httpsPolyfill} type="text/javascript" />
        <script src={baseUrl + List} type="text/javascript" />
        <script src={baseUrl + featherIcons} type="text/javascript" />
        <script src={baseUrl + dayJs} type="text/javascript" />
        <script src={baseUrl + phoenix} type="text/javascript" />
        <script src={baseUrl + eCharts} type="text/javascript" />
        <script src={baseUrl + chart} type="text/javascript" />
        <script src={baseUrl + leaFlet} type="text/javascript" />
        <script src={baseUrl + leafletMarkercluster} type="text/javascript" />
        <script src={baseUrl + leafletTilelayer} type="text/javascript" />
        <script src={baseUrl + ecommerceDashboard} type="text/javascript" />
      </Helmet>
      <Routers />
    </div>
  );
}

export default App;
