interface IconProps {
    homeIconUrl: string;
    updatesIconUrl: string;
    starIconUrl: string;
}

const Navigation = (icons: IconProps) => {
    return (
        <div className="navigation">
            <div className="navContainer">
                <div className="navigationComponent">
                    <div className="iconDiv">
                        <img src={icons.homeIconUrl} alt="" />
                        <span className="iconDescription">home</span>
                    </div>

                    <div className="iconDiv">
                        <img src={icons.updatesIconUrl} alt="" />
                        <span className="iconDescription">updates</span>
                    </div>

                    <div className="iconDiv">
                        <img src={icons.starIconUrl} alt="" />
                        <span className="iconDescription">favorites</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;