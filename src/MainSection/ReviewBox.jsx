import './ReviewBox.css';

function ReviewBox ({review_text, imgSrc, username, review_date, review_points}) {
    return (
        <>
            <div className="review-box">
                <svg className="review-box-quotes" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>quotes-left</title>
                    <path d="M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"></path>
                </svg>

                <p className="review-box-text">{review_text}</p>
                <div className="review-box-profile">
                    <div className="review-box-profile-user">
                        <img className="review-box-profile-user-img" src={imgSrc} alt="" />
                        <div className="review-box-profile-user-username-box">
                            <p className="review-box-profile-user-username">{username}</p>
                            <p className="review-box-profile-user-reviewdate">{review_date}</p>
                        </div>
                    </div>
                    <p className="review-box-profile-reviewpoints">{review_points}</p>
                </div>
            </div>
        </>
    )
}

export default ReviewBox;