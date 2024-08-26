import React from "react";

type searchComponentProps ={
    setSearchItem:React.Dispatch<React.SetStateAction<string>>;
    searchText:string;
}

const SearchComponent:React.FC<searchComponentProps> = ({setSearchItem, searchText}) => {
    return (
        <div className="searchComponent">
            <form>
                <input
                    type="text"
                    className="searchInput"
                    placeholder="search anything sporty..." 
                    onChange={(e => setSearchItem(e.target.value))}
                    value={searchText}
                />

                <div id="checkLabel">
                    <div className="displayOptionGroup">
                        <input
                            type="checkbox"
                            name="showNearbySports"
                            id="showNearbySports" />
                        <span>show for my location</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchComponent;