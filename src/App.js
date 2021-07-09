import DataInfo from "./dataSource/user.json";
import Profile from "./Components/Profile";

const App = () => (
  <Profile
    avatar={DataInfo.avatar}
    name={DataInfo.name}
    tag={DataInfo.tag}
    location={DataInfo.location}
    followers={DataInfo.stats.followers}
    views={DataInfo.stats.views}
    likes={DataInfo.stats.likes}
  />
);

export default App;
