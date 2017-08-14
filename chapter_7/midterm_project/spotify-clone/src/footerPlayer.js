

// class that will actuall display the audio player
import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react';
import App from "./App";

class Player extends Component {


constructor(){
 super();



this.play = this.play.bind(this);

}

 play(){ // controls play function








}



  render() {
    const songs = this.props.route.songs
    return (

      <div className="Player">

    <ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls

/>
    </div>

    );
  }
}

export default Player;