import FollowersCard from "./Components/FollowersCard";
import ViewsCard from "./Components/ViewsCard";
import { useState } from "react";
import './index.css';

function App() {
  const [mode, setMode] = useState(false);
  const handleClick = event => {
      setMode(true);
    }
  
  return (
    
    <>
    <div className="body">
      <nav>
        <div className="left">
          <h2>Social Media Dashboard</h2>
          <h4>Total Followers: 23,004</h4>
        </div>
        <button className="right" onClick={handleClick}>Dark Mode</button>
      </nav>
      
      <div className="section-1">
        <FollowersCard
          className={mode ? 'dark' : 'light'}
          image = {'../images/icon-facebook.svg'}
          followers={1987}
          today={12}
          />
        <FollowersCard
          className='big-card light'
          image={'../images/icon-twitter.svg'}
          followers={1044}
          today={99}
          />
        <FollowersCard
          className='big-card light'
          image={'../images/icon-instagram.svg'}
          followers={'11k'}
          today={1099}
          />
        <FollowersCard
          className='big-card light'
          image={'../images/icon-youtube.svg/'}
          followers={8239}
          today={144}
          />
      </div>
      <h2>Overview - Today</h2>
      <div className="section-2">
        <ViewsCard
          className='small-card light'
          image={'../images/icon-facebook.svg'}
          views={87}
          percent={3}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-facebook.svg'}
          views={52}
          percent={2}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-instagram.svg'}
          views={5462}
          percent={2257}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-instagram.svg'}
          views={'52k'}
          percent={1375}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-twitter.svg'}
          views={117}
          percent={303}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-twitter.svg'}
          views={507}
          percent={553}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-youtube.svg'}
          views={107}
          percent={19}
          />
        <ViewsCard
          className='small-card light'
          image={'../images/icon-youtube.svg'}
          views={1407}
          percent={12}
          />
      </div>
    </div>
    
    
    </>
  );
}


export default App;
