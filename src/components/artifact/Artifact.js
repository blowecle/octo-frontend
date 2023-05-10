import React from 'react';
import '../../css/artifact.css';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "@fortawesome/fontawesome-free/js/all"

const Artifact = ({artifact, artists}) => {

    return (
        <div className="artifact-container">
                    {/* <div className='slides'>
                        {artifact.images.map((image) => (
                            <img src={image} alt='artifactImage' className='slide'/>
                        ))}
                    </div> */}
                    <div className="carousel-wrapper">
                    <Carousel showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay={false} swipeable={false} emulateTouch={true} dynamicHeight={false} useKeyboardArrows={true} centerMode={true} centerSlidePercentage={100} className='artifact-carousel'
                    renderArrowPrev={(clickHandler, hasPrev) => {
                        return (
                          <div onClick={clickHandler} className="carousel-arrow carousel-arrow-left bounce-left">
                            <a className="fa fa-arrow-left fa-2x"></a>
                          </div>
                        );
                      }}
                      renderArrowNext={(clickHandler, hasNext) => {
                        return (
                          <div onClick={clickHandler} className="carousel-arrow carousel-arrow-right bounce-right">
                            <a className="fa fa-arrow-right fa-2x"></a>
                          </div>
                        );
                      }}>
                        {artifact.images.map((image, index) => {
                            return (
                            <div key={index} className='inner-wrapper'>
                                <img src={image} alt='artifactImage' className='artifact-image'/>
                                </div>)
                        })}
                    </Carousel>
                    </div>
            <div className="info-wrapper">
                    <div className="artifact-name">{`${artifact.name}`}</div>
                <div className="line-div"/>
                <div className="artifact-blurb">{`${artifact.blurb}`}</div>
                <div className="artifact-artist-wrapper">
                {artists.map((artist, index) => (<div key={index}>
                  {console.log('console artist ',artist)}
                        <div className="artifact-artist-description">{`${artifact.artistDescription[index]}`}</div>
                    <Link to={`/artists/${artist.artistID}`}>
                        {artist.name ? (
                        <div className="artifact-artist-name">{`${artist.name}`}</div>
                        ) : (
                            <div className="artifact-artist-name">{`${artist.company}`}</div>
                        )}
                    </Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
    // return (<div className='artifact-container'>
    //             <div className='post-image-wrapper'>
    //                 {artifact.images.map((image) => (
    //                     <div className='inner-wrapper'>
    //                         <img src={image} alt='blogImage' className='artifact-image'/>
    //                     </div>
    //                 ))}
    //             </div>
    //             <Link to={`/artifacts/${artifact.id}`}>
    //                 <div className='artifact-info'>{`${artifact.name}`}</div>
    //             </Link>
    //     </div>
    // )
}

export default Artifact;