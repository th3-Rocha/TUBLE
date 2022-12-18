import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset"
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
  const estilosDaHomePage = {  };


  return (
    <>
      <CSSReset/>
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}/>
        <Favorites fav={config.fav}/>
      </div>
    </>
    

  );
}

export default HomePage



const StyledHeader = styled.div`
    img{
      width: 80px;
      height: 80px;
      border-radius:50%;
      
    }
    p{
      color: #666666;
      font-size: 16px;
    }
    .banner{
      border-radius:0%;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .user-info {
      padding-left: 32px;
      margin-top: 5%;
      display: flex;
      align-items: center;
      gap: 10px;
    }

  `;



const StyledFavs = styled.div`

font-size: small;
display: flex;
flex-direction: row;
grid-gap: 30px;
padding-left: 20px;
img{
  width: 100px;
  height: 100px;
  border-radius:50%;
}
a{
  width: 100px;
  text-align: center;
}
h4{
  color: black;
  text-decoration: none;

}
`;



function Header() {
  "asdfasd ${eggCount}"
  return (
    <StyledHeader>
      <img className="banner" src={`${config.banner}`}/>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}
function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  
  return (
    <StyledTimeline>
      {playlistNames.map((playlistNames) => {
        const videos = props.playlists[playlistNames];
        return (
          <section>
            <h2>{playlistNames}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

function Favorites(props){
 
  console.log(props.fav);
  return (
    
      <StyledTimeline>
        <h2 style={{paddingLeft: 20 + 'px'}}  >GitTube Favorites</h2>
        
        <StyledFavs>
          {props.fav.map((favs) => {
            return (
              <a href={`https://github.com/${favs.github}`}>
                  <img src={`https://github.com/${favs.github}.png`} />
                <h4>
                  @{favs.github}
                </h4>
              </a>
            )
          })}
        </StyledFavs>
      </StyledTimeline>
     
  )
}