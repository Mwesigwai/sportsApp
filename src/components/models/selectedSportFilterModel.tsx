import React from "react";

type selectedSportFilterModelProp = {
    cancelIconUrl: string;
}

const SelectedSportFilterModel: React.FC<selectedSportFilterModelProp> = ({ cancelIconUrl }) => {
    return (
        <dialog className="selectedSportFilterModel">
            <div className="modelHeader">
                <span className="modelHeading">filter</span>
                <img src={cancelIconUrl} alt="" />
            </div>

            <form onSubmit={(e => { e.preventDefault() })}>
                <label htmlFor="byUserTeams">
                    <input type="checkbox" name="byUserTeams" id="byUserTeams" />
                    {' '}
                    my teams only
                </label>

                <label htmlFor="region">
                    or by region <br />
                    <input type="text" name="region" id="region" placeholder="enter region" />
                </label>

                <label htmlFor="team">
                    or by team <br />
                    <input type="text" name="team" id="team" placeholder="enter team" />
                </label>

                <div className="filterModelBtnGroup">
                    <button className="cancelBtn" type="button">cancel</button>
                    <button className="submitBtn" type="submit">search</button>
                </div>
            </form>
        </dialog>
    )
}

export default SelectedSportFilterModel;