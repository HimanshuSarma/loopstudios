import './Creations.css';
import Creation from './Creation';
import React from 'react';

const creationsDataArr = [{
    imgSrc: "./image-curiosity.jpg",
    caption: "the curiosity"
}, {
    imgSrc: "./image-deep-earth.jpg",
    caption: 'deep earth'
}, {
    imgSrc: './image-night-arcade.jpg',
    caption: 'night archade'
}, {
    imgSrc: './image-soccer-team.jpg',
    caption: 'soccer team'
}, {
    imgSrc: './image-grid.jpg',
    caption: 'the grid'
}, {
    imgSrc: './image-from-above.jpg',
    caption: 'from up above vr'
}, {
    imgSrc: './image-pocket-borealis.jpg',
    caption: 'pocket borealis'
}, {
    imgSrc: './image-fisheye.jpg',
    caption: 'make it fisheye'
}]

const Creations = () => {

    const creationsArr = creationsDataArr.map((creation, index) => {
        return (
            <React.Fragment key={index}>
                <Creation imgSrc={creation.imgSrc} caption={creation.caption}/>
            </React.Fragment>
        )
    })

    return (
        <section className='creations main-grid'>
            <div className='creations-content'>
                <h1 className='creations-content-heading'>Our creations</h1>
                <button className='creations-content-see-all-btn'>SEE ALL</button>

                <div className="creations-content-grid">
                    {creationsArr}
                </div>
            </div>
        </section>
    )
}

export default Creations
