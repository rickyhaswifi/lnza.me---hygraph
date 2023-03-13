import React from 'react';
import { gql, useQuery } from "@apollo/client";
import { useParams } from 'react-router-dom';
import {PageTitle, PageSubTitle} from '../styled-components/SC-Global'
import { GridWrapper, ColumnWrapper } from '../styled-components/SC-Layout'
import { OSCard, CardContent } from '../styled-components/SC-Card';
import { SocialSection } from '../styled-components/SC-Card-Social';
import { Link } from 'react-router-dom';
import VideoIframe from '../components/VideoIframe';
import {BioTitle, Bio, BioExpandToggle, BookingCard} from '../styled-components/SC-ContentColumn';
import ReactMarkdown from 'react-markdown';
import Wavesurfer from '../components/Wavesurfer';

// Writing query
const GET_SHEETS = gql`
	query GET_ONE_SHEETS {
    onesheets {
      id
      artistName
      releaseName
      labelName
      biography
      bookingEmail
      bookingPhone
      coverArt {
        url
      }
      dropboxLink
      facebookLikes
      instagramLikes
      oneSheetSlug
      spotifyFollowers
      twitterLikes
      youtubeViews
      videoId
      audioUrl
      audioFile {
        url
      }
    }
	}
`;

function Onesheet() {

  const { oneSheetSlug } = useParams();
  const { loading, data } = useQuery(GET_SHEETS);
  
  const [ expandText, setExpandText ] = React.useState(false)

	if (loading) return "Loading...";
  
  const { onesheets } = data;

  if(!onesheets) return <div />;
  
  const onesheet = onesheets.find((onesheet) => onesheet.oneSheetSlug === oneSheetSlug);

  if (!onesheet) return window.location.href = '/'

  const {artistName, labelName, coverArt, facebookLikes, spotifyFollowers, instagramLikes, youtubeViews, twitterLikes, dropboxLink, videoId, biography, audioFile, releaseName, bookingPhone, bookingEmail} = onesheet
	return(
    <>
    <PageTitle>One Sheet</PageTitle>
    {!!labelName && (
      <PageSubTitle>{labelName}</PageSubTitle>
    )}
    <BookingCard>
      {!!bookingPhone && (
        <p><i class="fas fa-phone-square-alt fa-fw"></i> {bookingPhone}</p>
      )}
      {!!bookingEmail && (
        <p><i class="fas fa-envelope fa-fw"></i> {bookingEmail}</p>
      )}
      </BookingCard>
    <GridWrapper>
      <OSCard>
        <CardContent>
          {!!artistName && (
           <h2>{artistName}</h2>
          )}
          {!!releaseName && (
            <h3>{releaseName}</h3>
          )}
        </CardContent>

        <img src={coverArt.url} alt={artistName} />
        {!!facebookLikes && (
        <SocialSection className="gr-facebook">
        <i className="fab fa-facebook-f fa-fw"></i>
            <span>{facebookLikes} Likes</span>
        </SocialSection>
        )}
        {!!spotifyFollowers && (
        <SocialSection className="gr-spotify">
        <i className="fab fa-spotify fa-fw"></i>
            <span>{spotifyFollowers} Fans</span>
        </SocialSection>
        )}
        {!!instagramLikes && (
        <SocialSection className="gr-instagram">
        <i className="fab fa-instagram fa-fw"></i>
            <span>{instagramLikes} Fans</span>
        </SocialSection>
        )}
        {!!youtubeViews && (
          <SocialSection className="gr-youtube">
          <i className="fab fa-youtube fa-fw"></i>
              <span>{youtubeViews}</span>
          </SocialSection>
        )}
        {!!twitterLikes && (
          <SocialSection className="gr-twitter">
          <i className="fab fa-twitter fa-fw"></i>
              <span>{twitterLikes} Fans</span>
          </SocialSection>
        )}
        {!!dropboxLink && (
          <SocialSection className="gr-download">
          <Link to={dropboxLink}>
          <i class="fas fa-cloud-download-alt fa-fw"></i>
            <span>Download</span>
            </Link>
          </SocialSection>
        )}

      </OSCard>
      
      <ColumnWrapper>
      {!!videoId && (
        <VideoIframe videoID={videoId}/>
      )}
      {!!artistName && (
        <BioTitle>{artistName} Biography</BioTitle>
      )}
      {!!biography && (
        <Bio className={expandText === true ? "textExpand" : ""}>
          <ReactMarkdown source={biography} />
        </Bio>
      )}

      <BioExpandToggle onClick={ () => setExpandText(!expandText) }>
        {expandText === true ? <><i class="fas fa-minus fa-fw"></i> Read Less</> : <><i className="fas fa-plus fa-fw"></i> Read More</>}
      </BioExpandToggle>

      {/* <hr />
      {releaseName} */}
      {!!audioFile && (
        <Wavesurfer url={audioFile.url} />
      )}
      </ColumnWrapper>
    </GridWrapper>
    </>
	);
}

export default Onesheet;




