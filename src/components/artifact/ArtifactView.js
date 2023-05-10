import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtifactData } from "../../store/reducers/artifactSlice";


const ArtifactView = () => {

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const asyncFetchArtifactData = async () => {
            await dispatch(fetchArtifactData(params.id));
        }
        asyncFetchArtifactData();
    }, [])
    
    const artifactData = useSelector((state) => state.artifact.artifactData);

    if(artifactData.artists) { artifactData.artists.map((artist) => {console.log("params id: ", params.id, " and artist id: ", artist.id)})}
    

    return (
        <div className="single-artifact-container">
            <img src="" alt="this is where the image goes"/>
            <div className="single-artifact-info-container">
                <div className="single-artifact-blurb">
                </div>
            </div>
        </div>
    )
}

export default ArtifactView;