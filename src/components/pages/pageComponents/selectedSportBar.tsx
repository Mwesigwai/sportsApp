interface SelectedSportBarProps{
    gameName:string;
    filterIconUrl:string;
}

const SelectedSportBar:React.FC<SelectedSportBarProps> = ({gameName, filterIconUrl})=>{
    return(
        <div className="selectedSportBar">
            <span className="sportName">{gameName}</span>
            <img src={filterIconUrl} alt=""/>
        </div>
    )
}

export default SelectedSportBar;