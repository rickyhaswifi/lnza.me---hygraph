import React, { Component } from 'react'
import { gql, useQuery } from "@apollo/client";
import  { Link } from 'react-router-dom'

const GET_SHEETS = gql`
	query GET_ALL_SHEETS {
    onesheets {
    id
    artistName
    biography
    bookingEmail
    bookingPhone
    coverArt {
      url
    }
    dropboxLink
    facebookLikes
    instagramLikes
    labelName
    oneSheetSlug
    spotifyFollowers
    twitterLikes
  }
	}
`;

function Sheets() {
	const { loading, data } = useQuery(GET_SHEETS);

	if (loading) return "Loading...";

  const { onesheets } = data;

	return onesheets.map((onesheet) => (
    <li>
      <Link to={`/${onesheet.oneSheetSlug}`}>
        {onesheet.artistName}
      </Link>
    </li>
	));
}

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Panel</h1>
        <Sheets />
      </div>
    )
  }
}
