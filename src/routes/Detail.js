import React from "react";
import "./Detail.scss";

class Detail extends React.Component {

    componentDidMount() {

        const { location, history } = this.props;
       
        if (location.state === undefined) {
         history.push("/");
      }
    }
    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            return (
                <div className="movie__detail">
                    <h2>{location.state.title}</h2>
                    <div className="detail__box">
                        <ul>
                            <li>개봉년도 : {location.state.year}</li>
                            <li>평점 : {location.state.rating}</li>
                            <li>상영시간 : {Math.round(location.state.runtime/60)}시간 {location.state.runtime % 60}분</li>
                            <li>장르 : {location.state.genres}</li>
                            <li>줄거리 : {location.state.summary}</li>
                        </ul>
                        <img className="detail__poster" src={location.state.poster} />
                    </div>
                </div>
            ); 
        } else {
            return null;
        }
    
    }
}

export default Detail;