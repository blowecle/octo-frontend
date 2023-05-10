import React, { useEffect } from "react";
import { fetchArtistData } from "../../store/reducers/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import '../../css/artist.css'
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { fetchArtifacts } from "../../store/reducers/artifactSlice";

const ArtistView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtistData = async () => {
            await dispatch(fetchArtistData(parseInt(params.id)));
            await dispatch(fetchArtifacts());
        }
        asyncFetchArtistData();
    }, [])

    const artist = useSelector((state) => state.artist.artistData);
    const artifacts = useSelector((state) => state.artifact.artifacts)
    
    let filteredArtifacts = [];

    if(artifacts) {
        filteredArtifacts = artifacts.filter((artifact) => artifact.artistID.includes(artist.artistID));
        console.log(filteredArtifacts)
    }

    if(artist)console.log(artist)
    return (<>
    {artist && artifacts && filteredArtifacts.length > 0 ? (<div className="artist-wrapper">
        <img src={filteredArtifacts[0].images[0]} alt="this is where the main image goes" className="artist-main-image"/>
        {artist.company && artist.name ? (<>
                <div className="single-artist-name">{`${artist.name}`}</div>
                <div className="single-artist-title">{`${artist.title}`}</div>
                <div className="artist-company-name">{`${artist.company}`}</div>
            </>
        ) : artist.name ? (<>
                <div className="single-artist-name">{`${artist.name}`}</div>
                <div className="single-artist-title">{`${artist.title}`}</div>
            </>
        ) : (<>
                <div className="solo-artist-name">{`${artist.company}`}</div>
                <div className="single-artist-title">{`${artist.title}`}</div>
            </>
        )}
            {artist.social.map((social) => (
                <div key={social}><a href={`${social}`} target="_blank" className="social">{`${social}`}</a></div>      
            ))}
    <div className="line-div"/>
    <div className="artist-blurb">{`${artist.blurb}`}</div>
    </div>) : (null)}
    </>)
}

export default ArtistView;