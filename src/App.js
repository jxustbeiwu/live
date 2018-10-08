import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Redirect, HashRouter } from "react-router-dom";
import "./assets/style/reset.scss";
import "./utils/rem";
import store from "./store";
import { getUserInfos } from "./api";
import FooterBar from "./components/FooterBar";
import { Home, Works, My, CourseDetail, WorkDetail } from "./loadRouter";

class App extends Component {
  static onRedirct() {
    return <Redirect to="/home"/>;
  }

  componentDidMount() {
    //flexbale 布局
    let cookie = "rvz3j1jvfy2ta3kw0pxzp4oz";
    let testCookie = "cpqpfko3pnmfbzxik3zk0wdl";
    document.cookie = "ASP.NET_SessionId=" + cookie;
    getUserInfos().then(res => {
      //console.log(res.Data);
    });
    console.log();
  }

  componentWillUpdate(nextprops) {
    // console.log(nextprops)
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <React.Fragment>
            <Route path="/" exact render={App.onRedirct}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/my" exact component={My}/>
            <Route path="/works" exact component={Works}/>
            <Route path="/courseDetail/:id" exact component={CourseDetail}/>
            <Route path="/workDetail/:id" exact component={WorkDetail}/>
            <FooterBar/>
          </React.Fragment>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
