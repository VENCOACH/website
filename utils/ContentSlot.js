import MainContent from "../content/mainContent";

export default class ContentSlot {

    static getComponent(contentId, sectionContentData) {

        switch(contentId) {

            case 'a-mainSectionLayout':
                return <MainContent sectionContentData={sectionContentData}/>
            case 'b-AboutSectionLayout':
                return <MainContent sectionContentData={sectionContentData}/>
            default: 
                throw new Error(` 📛 THE COMPONENT "${contentId}" DOES NOT EXIST, PLEASE CHECK 😓`); 
        }
    }

}