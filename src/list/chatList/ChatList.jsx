import { useState } from "react";
import "./ChatList.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatList">
      {/* search bar start */}
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" />
          <input type="text" placeholder="Search..." />
          <img
            src={addMode ? "./minus.png" : "./plus.png"}
            className="AddImg"
            onClick={() => setAddMode((prev) => !prev)}
          />
        </div>
      </div>
      {/* search bar end */}
      {/* chats start*/}
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>{" "}
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" />
        <div className="texts">
          <span>Fred rick</span>
          <p>Lorem, ipsum dolor.</p>
        </div>
      </div>
      {/* chats end*/}
    </div>
  );
};

export default ChatList;
