import React, { useState } from "react";
import DefaultMainPageData from "./defaultPageMainData";
import SelectedSportFilterModel from "../models/selectedSportFilterModel";
import Header from "./pageComponents/mainAppHeader";
import Navigation from "./pageComponents/navigation";
import SearchComponent from "./pageComponents/searchComponent";
import SelectedSportBar from "./pageComponents/selectedSportBar";
import SearchResultMathes from "./pageComponents/searchResultMatches";

const DefaultPage: React.FC = () => {
    const[selectedItem, setSelectedItem] = useState('football')
    const [searchItem, setSearchItem] = useState('');
    return (
        <div className="defaultPage">
            {/* <Header imageUrl='/images/me.jpeg' />
            <Navigation
                homeIconUrl='/images/home.png'
                updatesIconUrl='/images/updates.png'
                starIconUrl='/images/star.png'
            /> */}

            <SearchComponent setSearchItem={setSearchItem} searchText={searchItem} />
            <SearchResultMathes searchItem={searchItem} setSelectedItem={setSelectedItem} setSearchItem={setSearchItem}/>
            
            <SelectedSportBar gameName={selectedItem} filterIconUrl="sportsApp/images/filter.png" />
            <SelectedSportFilterModel cancelIconUrl="" />

            <DefaultMainPageData selectedItem={selectedItem}/>
        </div>
    )
}

export default DefaultPage;