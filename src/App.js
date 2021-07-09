import DataInfo from "./dataSource/user.json";
import Profile from "./Components/Profile";

const App = () =>
  Profile(
    DataInfo.avatar,
    DataInfo.name,
    DataInfo.tag,
    DataInfo.location,
    DataInfo.stats
  );

export default App;
