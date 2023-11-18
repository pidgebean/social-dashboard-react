

export default function FollowersCard() {
    const big_num = ["1987", "1044", "11k", "8239"];
    const big_percent = [12, 99, 1099, 144]
  return (
    <div className="followers-card">
        <div className="top">
            <img src="./images/icon-facebook.svg" alt="front"></img>
            <div className="user-name">@nathanf</div>
        </div>
        <div className="middle">
            <div className="followers-num">
            
            </div>
            <div className="followers">FOLLOWERS</div>
        </div>
        <div className="bottom">
           <img src="/images/icon-up.svg" alt=""/>
           <div>12 Today</div> 
        </div> 
    </div>
  )
}


