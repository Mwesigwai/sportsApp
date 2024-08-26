export interface Props {
    imageUrl: string;
}

const Header = (props: Props) => {
    return (
        <header className="mainHeader">
            <div className="appLogo">
                <div>
                    <h1>Ug-Sports</h1>
                    <span className="motto">
                        for the sports lovers
                    </span>
                </div>
            </div>
            
            <div className="userImage">
                <img src={props.imageUrl} alt="" />
            </div>
        </header>
    )
}

export default Header;