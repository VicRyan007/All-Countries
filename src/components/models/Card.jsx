export default function Card(props){
    return (
        <div className="row borda container">
            <div className="col-7 col-lg-3 borda pais">
                <img src={props.flag} alt="" />
                <span>{props.name}</span>
            </div>
        </div>
    )
}