import { useSelector } from "react-redux";

const Data = () => {
    const dataAndTime = useSelector((store) => store.timeReducer);

    return (
        <div className="data-box">
            <div className="time-placeholder">
                {dataAndTime.hours}:{dataAndTime.minutes}:{dataAndTime.seconds}
            </div>
            <div className="data-placeholder">
                {dataAndTime.date}
            </div>
        </div>
    )
}

export default Data;