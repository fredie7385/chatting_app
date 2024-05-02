import EmojiPicker from "emoji-picker-react";
import "./Chats.css";
import { useState } from "react";
const Chats = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chats">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" />
          <div className="text">
            <span>jane Mike</span>
            <p>Lorem ipsum dolor.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" />
          <img src="./video.png" />
          <img src="./info.png" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            {/* sending/ receiving image */}
            {/* <img src="/public/favicon.png" alt="" />  */}
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <div className="texts">
            <img src="./avatar.png" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              reprehenderit eum incidunt porro nobis molestiae.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" />
          <img src="./camera.png" />
          <img src="./mic.png" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chats;
