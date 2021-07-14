import DataInfo from "./Components/Profile/user.json";
import Profile from "./Components/Profile/Profile";
// import Statistical from "./Components/Statistics/statistical-data.json";
// import StatInfo from "./Components/Statistics/Statistics";

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
