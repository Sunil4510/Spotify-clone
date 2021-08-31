import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenURL } from './components/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { useDataLayerValue } from './Reducers/DataLayer';
const spotify = new SpotifyWebApi();


function App() {
  const [{user,token},dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenURL();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type:"SET_TOKEN",
        token:_token,  
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
         dispatch({
        type:"SET_USER",
        user:user,
      });
      }); 

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcCCvuarOvIn6').then((response)=>{
        dispatch({
          type:"SET_DICOVER_WEEKLY",
          discover_weekly:response,
        });
      });
    }
  },[]);

  console.log("Its Me",user);
  console.log("token: ",token);
  return (
    <div className="app">
    {token?(<Player spotify={spotify}/>):(
      <Login/>
    )} 
    </div>
  );
}

export default App;
