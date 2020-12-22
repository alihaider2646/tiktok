import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        {/* <Video url="https://youtu.be/FzuTLycSSvs" />
        <Video url="https://www.tiktok.com/@jkmusic16/video/6908399299051130114" /> */}

        <Video
          url="https://youtu.be/FzuTLycSSvs"
          channel="alihaider"
          description="this is my first ever mern project"
          song="love me like you do"
          messages={111}
          shares={222}
          likes={333}
        />
        <Video
          url="https://www.tiktok.com/@jkmusic16/video/6908399299051130114"
          channel="alihaider"
          description="this is my first ever mern project"
          song="love me like you do"
          messages={111}
          shares={222}
          likes={333}
        />
      </div>
    </div>
  );
}

export default App;
