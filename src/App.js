import Layout from "./Layout";
import About from "./About";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import BadLink from "./BadLink";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<Layout />} >
        <Route index element = {<About />} />

        <Route path = "experience">
          <Route index element = {<ExperiencePage />} />
          <Route path = ":projid" element = {<ProjectPage />} />
        </Route>

        <Route path = "*" element = {<BadLink />} />
      </Route>
    </Routes>
  );
}

export default App;
