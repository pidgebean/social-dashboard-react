import FollowersCard from "./Components/FollowersCard";
import ViewsCard from "./Components/ViewsCard";
import './index.css';

function App() {
  return (
    <>
    <div className="body">
      <nav>
        <div className="left">
          <h2>Social Media Dashboard</h2>
          <h4>Total Followers: 23,004</h4>
        </div>
        <button className="right">Dark Mode</button>
      </nav>
      
      <div className="section-1">
        <FollowersCard/>
        <FollowersCard/>
        <FollowersCard/>
        <FollowersCard/>
      </div>
      <h2>Overview - Today</h2>
      <div className="section-2">
        <ViewsCard/>
        <ViewsCard/>
        <ViewsCard/>
        <ViewsCard/>
        <ViewsCard/>
        <ViewsCard/>
        <ViewsCard/>
        <ViewsCard/>
      </div>
    </div>
    
    
    </>
  );
}

export default App;
