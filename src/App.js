import DataInfo from "./Profile/user.json";
import Profile from "./Profile/Profile";
// import Statistical from "./Statistics/statistical-data.json";
// import StatInfo from "./Statistics/Statistics";

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
