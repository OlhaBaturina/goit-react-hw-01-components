import DataInfo from "./Components/Profile/user.json";
import Profile from "./Components/Profile/Profile";
import { Statistics } from "./Components/Statistics/Statistics";
import StatInfo from "./Components/Statistics/statistical-data.json";
import { FriendList } from "./Components/FriendList/FriendList";
import friends from "./Components/FriendList/friends.json";

const App = () => (
  <>
    <Profile
      name={DataInfo.name}
      tag={DataInfo.tag}
      location={DataInfo.location}
      avatar={DataInfo.avatar}
      stats={DataInfo.stats}
    />
    <Statistics title="Upload Stats" stats={StatInfo} />
    <FriendList friends={friends} />
  </>
);

export default App;
