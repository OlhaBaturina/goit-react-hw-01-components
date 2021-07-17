import DataInfo from "./data/user.json";
import Profile from "./Components/Profile/Profile";
import { Statistics } from "./Components/Statistics/Statistics";
import StatInfo from "./data/statistical-data.json";
import { FriendList } from "./Components/FriendList/FriendList";
import friends from "./data/friends.json";
import { TransactionHistory } from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

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
    <TransactionHistory items={transactions} />
  </>
);

export default App;
