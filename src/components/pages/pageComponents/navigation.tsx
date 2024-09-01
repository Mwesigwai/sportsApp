import { Link, Outlet } from "react-router-dom"


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
                    <Link className="iconDiv" to={'/'}>
                        <img src={icons.homeIconUrl} alt="" />
                        <span className="iconDescription">home</span>
                    </Link>

                    <Link className="iconDiv" to={'/updates'}>
                        <img src={icons.updatesIconUrl} alt="" />
                        <span className="iconDescription">updates</span>
                    </Link>

                    <div className="iconDiv">
                        <img src={icons.starIconUrl} alt="" />
                        <span className="iconDescription">favorites</span>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navigation;