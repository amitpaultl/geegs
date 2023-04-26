import React from 'react';

const Section = ({sector,number,urlVideo}) => {
    console.log(sector,number);
    const videoset =(url)=>{
        urlVideo(url)
    }
    return (
        <div>
            <div className="sectionVideo">
            <h4>Section {number + 1}</h4>
            {
              sector?.singleData.map(video => <button onClick={()=>videoset(video.videoLink)} className='urlVideo'>{video?.title}</button>)
            }
            
          </div>
        </div>
    );
};

export default Section;