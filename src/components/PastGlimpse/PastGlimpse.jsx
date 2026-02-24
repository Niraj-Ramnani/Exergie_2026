import React from 'react';
import classes from './PastGlimpse.module.css';
import img1 from '../../assets/pastglimpse/image1.jpg';
import img2 from '../../assets/pastglimpse/image2.jpg';
import img3 from '../../assets/pastglimpse/image3.jpg';
import img4 from '../../assets/pastglimpse/image4.jpg';
import img5 from '../../assets/pastglimpse/image5.jpg';

const PastGlimpse = () => {
    const images = [img1, img2, img3, img4, img5];

    return (
        <section className={classes.pastGlimpseSection}>
            <h2 className={classes.heading}>Past Glimpses</h2>
            <div className={classes.sliderContainer}>
                <div className={classes.sliderTrack}>
                    {images.map((img, index) => (
                        <div className={classes.slide} key={`orig-${index}`}>
                            <img src={img} alt={`Glimpse ${index + 1}`} />
                        </div>
                    ))}
                    {/* Duplicate exactly the same items to create a seamless infinite loop */}
                    {images.map((img, index) => (
                        <div className={classes.slide} key={`dup-${index}`}>
                            <img src={img} alt={`Glimpse ${index + 1} clone`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastGlimpse;
