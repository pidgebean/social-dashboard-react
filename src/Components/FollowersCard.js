

export default function FollowersCard() {
  return (
    <div className="followers-card">
        <div className="top">
            <img src="./images/icon-facebook.svg" alt="front"></img>
            <div className="user-name">@nathanf</div>
        </div>
        <div className="middle">
            <div className="followers-num">1987</div>
            <div className="followers">FOLLOWERS</div>
        </div>
        <div className="bottom">
           <img src="/images/icon-up.svg" alt=""/>
           <div>12 Today</div> 
        </div> 
    </div>
  )
}
