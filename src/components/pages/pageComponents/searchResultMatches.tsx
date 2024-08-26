import React from "react";

type searchResultMatchesProps = {
    searchItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>
    setSearchItem: React.Dispatch<React.SetStateAction<string>>
}
const SearchResultMathes: React.FC<searchResultMatchesProps> = ({ searchItem, setSelectedItem, setSearchItem }) => {
    const availableGames = ['football', 'netball', 'hokey', 'rugby', 'tennis']
    const searchMatches: React.ReactElement<React.HTMLAttributes<HTMLSpanElement>, 'a'>[] = [];
    if (searchItem !== "") {
        availableGames.forEach(game => {
            if (game.indexOf(searchItem.toLocaleLowerCase().substring(0, 1)) === -1)
                return;

            searchMatches.push(
                <button onClick={e => {
                    setSelectedItem(e.currentTarget.innerHTML)
                    setSearchItem("")
                }
                } key={game}>{game}
                </button>
            );
        })
    }
    return searchItem ? (
        <div className="searchResultMatches">
            {searchMatches.length === 0 ?
                <span>no results matched</span> :
                <div>
                    <p style={{ textAlign: "center" }}>search results</p>
                    {searchMatches}
                </div>}
        </div>
    ) : null;
}

export default SearchResultMathes;