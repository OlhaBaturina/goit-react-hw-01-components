import DataInfo from "./dataSource/user.json";
import Profile from "./Components/Profile";

const App = () => (
  <Profile
    name={DataInfo.name}
    tag={DataInfo.tag}
    location={DataInfo.location}
    avatar={DataInfo.avatar}
    stats={DataInfo.stats}
  />
);

export default App;
