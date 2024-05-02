import Chats from "./chats/Chats";
import Details from "./details/Details";
import List from "./list/List";

const App = () => {
  return (
    <div className="container">
      <List />
      <Chats />
      <Details />
    </div>
  );
};

export default App;
