import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { LinkCard, MusicRow, MusicLink, SubCTA } from '../styled-components/SC-OneLink';
import { GridWrapper } from '../styled-components/SC-Layout'
import iTunesLogo from '../components/images/itunes.jpg'
import spotifyLogo from '../components/images/spotify.jpg'
import pandoraLogo from '../components/images/pandora.jpg'
import deezerLogo from '../components/images/deezer.png'
import youtubeLogo from '../components/images/youtube.jpg'
import iheartLogo from '../components/images/iheartradio.png'
import soundcloudLogo from '../components/images/sound-cloud.jpg'
import tidalLogo from '../components/images/tidal.jpg'
import claroLogo from '../components/images/claro-musica.jpg'
import audiomackLogo from '../components/images/audiomack.jpg'
import amazonLogo from '../components/images/amazon-music.jpg'


// Writing query
const GET_LINKS = gql`
	query GET_ONE_LINKS {
    onelinks {
      id
      oneLinkSlug
      spanishOrEnglish
      artistTitle
      releaseName
      releaseCover {
        url
      }
      itunesLink
      amazonLink
      audiomackLink
      claroMusicaLink
      deezerLink
      iHeartradioLink
      pandoraLink
      soundcloudLink
      spotifyLink
      tidalLink
      youtubeLink
    }
	}
`;

function Onelink() {

  const { oneLinkSlug } = useParams();
  const { loading, data } = useQuery(GET_LINKS);
  
  // const [ expandText, setExpandText ] = React.useState(false)

	if (loading) return "Loading...";
  
  const { onelinks } = data;
  
  const onelink = onelinks.find((onelink) => onelink.oneLinkSlug === oneLinkSlug);
  const {
    artistTitle, 
    releaseName,
    releaseCover,
    itunesLink, 
    spanishOrEnglish, 
    amazonLink,
    audiomackLink,
    claroMusicaLink,
    deezerLink,
    iHeartradioLink,
    pandoraLink,
    soundcloudLink,
    spotifyLink,
    tidalLink,
    youtubeLink
  } = onelink
	return(
    <>
    <GridWrapper>
        <LinkCard>
        <h2>{artistTitle}</h2>
        <h3>{releaseName}</h3>
        <img src={releaseCover.url} alt=""/>

        <SubCTA>{ spanishOrEnglish === true ? 'Haz Clic Abajo' : 'Click Below'}</SubCTA>

      {spotifyLink && (
        <MusicRow className="">
          <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
            <img src={spotifyLogo} alt="Spotify"/>
          </a>
          <MusicLink href={spotifyLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Escucha' : 'Stream'}
          </MusicLink>
        </MusicRow>
      )}

      {itunesLink && (
        <MusicRow className="">
          <a href={itunesLink} target="_blank" rel="noopener noreferrer">
            <img src={iTunesLogo} alt="iTunes"/>
          </a>
          <MusicLink href={itunesLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-compact-disc fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

      {pandoraLink && (
        <MusicRow className="">
          <a href={pandoraLink} target="_blank" rel="noopener noreferrer">
            <img src={pandoraLogo} alt="Pandora"/>
          </a>
          <MusicLink href={pandoraLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Escucha' : 'Stream'}
          </MusicLink>
        </MusicRow>
      )}

      {youtubeLink && (
        <MusicRow className="">
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src={youtubeLogo} alt="Youtube"/>
          </a>
          <MusicLink href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-video fa-fw"></i> { spanishOrEnglish === true ? 'Video' : 'Video'}
          </MusicLink>
        </MusicRow>
      )}

      {amazonLink && (
        <MusicRow className="">
           <a href={amazonLink} target="_blank" rel="noopener noreferrer">
           <img src={amazonLogo} alt="Amazon Music"/>
           </a>
          <MusicLink href={amazonLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Escucha' : 'Stream'}
          </MusicLink>
        </MusicRow>
      )}

      {deezerLink && (
        <MusicRow className="">
          <a href={deezerLink} target="_blank" rel="noopener noreferrer">
            <img src={deezerLogo} alt="Deezer"/>
          </a>
          <MusicLink href={deezerLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

      {tidalLink && (
        <MusicRow className="">
          <a href={tidalLink} target="_blank" rel="noopener noreferrer">
            <img src={tidalLogo} alt="Tidal"/>
          </a>
          <MusicLink href={tidalLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

      {soundcloudLink && (
        <MusicRow className="">
           <a href={soundcloudLink} target="_blank" rel="noopener noreferrer">
        <img src={soundcloudLogo} alt="Soundcloud"/>
          </a>
          <MusicLink href={soundcloudLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

      {iHeartradioLink && (
        <MusicRow className="">
           <a href={iHeartradioLink} target="_blank" rel="noopener noreferrer">
        <img src={iheartLogo} alt="iHeartRadio"/>
          </a>
          <MusicLink href={iHeartradioLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

      {audiomackLink && (
        <MusicRow className="">
          <a href={audiomackLink} target="_blank" rel="noopener noreferrer">
        <img src={audiomackLogo} alt="Audio Mack"/>
          </a>
          <MusicLink href={audiomackLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

      {claroMusicaLink && (
        <MusicRow className="">
           <a href={claroMusicaLink} target="_blank" rel="noopener noreferrer">
        <img src={claroLogo} alt="Claro Musica"/>
          </a>
          <MusicLink href={claroMusicaLink} target="_blank" rel="noopener noreferrer">
            <i class="fas fa-headphones fa-fw"></i> { spanishOrEnglish === true ? 'Descarga' : 'Download'}
          </MusicLink>
        </MusicRow>
      )}

        </LinkCard>
    </GridWrapper>
    </>
	);
}

export default Onelink;




