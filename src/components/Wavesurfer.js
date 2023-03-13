import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveformContianer, PlayButton } from '../styled-components/SC-Waveform'


const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#EEE8C3",
  progressColor: "#FFD700",
  cursorColor: "#A80100",
  barWidth: 2,
  barRadius: 2,
  responsive: true,
  height: 100,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true
});

export default function Waveform({ url }) {
  
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("ready", function() {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url, volume]);

  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };

  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <WaveformContianer>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        <PlayButton onClick={handlePlayPause}>{!playing ? <i class="fas fa-play fa-fw"></i> : <i class="fas fa-pause fa-fw"></i>}</PlayButton>
        
        <div style={{display: 'flex', flexDirection:'rowReverse'}}>
        <input
          type="range"
          id="volume"
          name="volume"
          // waveSurfer recognize value of `0` same as `1`
          //  so we need to set some zero-ish value for silence
          min="0.01"
          max="1"
          step=".025"
          onChange={onVolumeChange}
          defaultValue={volume}
        />
        <label htmlFor="volume">
          {volume < 0.5 ? 
            volume > 0.1 ? <i class="fas fa-volume-down fa-fw"></i> : <i class="fas fa-volume-mute fa-fw"></i>
          : 
          <i class="fas fa-volume-up fa-fw"></i>
          }       
        </label>
        </div>
      </div>
    </WaveformContianer>
  );
}
