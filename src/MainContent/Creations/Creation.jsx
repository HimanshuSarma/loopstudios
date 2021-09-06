import './Creation.css';

const Creation = ({imgSrc, caption}) => {
    return (
        <div className='creation'>
            <div className='creation-img'>
                <img src={imgSrc} alt="" />
                <div className='creation-img-overlay'>

                </div>
            </div>
            <caption className='creation-caption'>{caption}</caption>
        </div>
    )
}

export default Creation
