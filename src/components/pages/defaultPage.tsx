import React, { useState } from "react";
import SportCategory from "../../enums/sportCategoryEnum";
import OneOnOneDisplayPage from "./oneOnOneDisplayPage";
import SelectedSportFilterModel from "../models/selectedSportFilterModel";
import Header from "./pageComponents/mainAppHeader";
import Navigation from "./pageComponents/navigation";
import SearchComponent from "./pageComponents/searchComponent";
import SelectedSportBar from "./pageComponents/selectedSportBar";
import GroupGamesDisplayPage from "./groupGamesDisplayPage";
import SearchResultMathes from "./pageComponents/searchResultMatches";
interface DefaultPageProps {
    sportCategory: SportCategory
}

const DefaultPage: React.FC<DefaultPageProps> = ({ sportCategory}) => {
    const[selectedItem, setSelectedItem] = useState('football')
    const [searchItem, setSearchItem] = useState('');
    return (
        <div className="defaultPage">
            <Header imageUrl='/images/me.jpeg' />
            <Navigation
                homeIconUrl='/images/home.png'
                updatesIconUrl='/images/updates.png'
                starIconUrl='/images/star.png'
            />

            <SearchComponent setSearchItem={setSearchItem} searchText={searchItem} />
            <SearchResultMathes searchItem={searchItem} setSelectedItem={setSelectedItem} setSearchItem={setSearchItem}/>
            
            <SelectedSportBar gameName={selectedItem} filterIconUrl="/images/filter.png" />
            <SelectedSportFilterModel cancelIconUrl="" />

            {sportCategory === SportCategory.oneOnOne ?
                <OneOnOneDisplayPage selectedItem={selectedItem} /> :
                <GroupGamesDisplayPage 
            />}
        </div>
    )
}

export default DefaultPage;