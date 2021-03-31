import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  Redirect,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import { Project1, Project2, Project3 } from "./pages/Projects";
import { AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();
  // let history = useHistory();

  // useEffect(() => {
  //   const handleScrollToElement = (e) => {
  //     console.log(e.wheelDeltaY);
  //     const url = window.location.origin + "/";

  //     const wheelRouter = (after, before) => {
  //       if (e.wheelDeltaY < 0) {
  //         setTimeout(() => {
  //           history.push(after);
  //         }, 500);
  //       } else if (e.wheelDeltaY > 0) {
  //         setTimeout(() => {
  //           history.push(before);
  //         }, 500);
  //       }
  //     };

  //     switch (window.location.href.toString()) {
  //       case url:
  //         if (e.wheelDeltaY < 0) {
  //           setTimeout(() => {
  //             history.push("about");
  //           }, 500);
  //         }
  //         break;
  //       case url + "about":
  //         wheelRouter("project-1", "home");
  //         break;
  //       case url + "project-1":
  //         wheelRouter("project-2", "about");
  //         break;
  //       case url + "project-2":
  //         wheelRouter("project-3", "project-1");
  //         break;
  //       case url + "project-3":
  //         wheelRouter("contact", "project-2");
  //         break;
  //       case url + "contact":
  //         if (e.wheelDeltaY > 0) {
  //           setTimeout(() => {
  //             history.push("project-3");
  //           }, 500);
  //         }
  //         break;
  //       default:
  //         console.log("nothing");
  //     }
  //   };
  //   window.addEventListener("wheel", handleScrollToElement);
  // }, [history]);
  return (
    // location={location} key={location.pathname}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/project-1" component={Project1} />
      <Route exact path="/project-2" component={Project2} />
      <Route exact path="/project-3" component={Project3} />
      {/* <Route exact path="/project-4" component={Project4} /> */}
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
