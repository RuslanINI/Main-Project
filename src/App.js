import "./App.css";
import Header from "./components/HEADER/Header";
import Nav from "./components/NAV/Nav";
import Profile from "./components/PROFILE/Profile";
import Dialogs from "./components/DIALOGS/Dialogs";
import Music from "./components/MUSIC/Music";
import News from "./components/NEWS/News";
import Settings from "./components/SETTINGS/Settings";
import { Route } from "react-router";

const App = (props) => {
  return (
    <div className="app-main">
      <Header />
      <Nav />
      <div className="app-content">
        <Route
          path="/Profile"
          render={() => (
            <Profile
              ProfileData={props.AppData.ProfileData}
              dispatch={props.dispatch}
            />
          )}
        />
        <Route
          path="/Dialogs"
          render={() => (
            <Dialogs
              dialogsData={props.AppData.DialogsData.dialogsData}
              messagesData={props.AppData.DialogsData.messagesData}
              store={props.store}
            />
          )}
        />
        <Route path="/News" render={() => <News />} />
        <Route path="/Music" render={() => <Music />} />
        <Route path="/Settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
