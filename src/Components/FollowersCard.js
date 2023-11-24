export default function FollowersCard({image, followers, today}) {
  return (
    <div className="followers-card">
        <div className="top">
            <img src={image} alt="front"></img>
            <div className="user-name">@nathanf</div>
        </div>
        <div className="middle">
            <div className="followers-num">{followers}</div>
            <div className="followers">FOLLOWERS</div>
        </div>
        <div className="bottom">
           <img src="/images/icon-up.svg" alt=""/>
           <div>{today} Today</div> 
        </div> 
    </div>
  )
}


