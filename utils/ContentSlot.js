import MainContent from "../components/mainContent";
import AboutUs from "../components/aboutUs";
import OurServices from "../components/ourServices";
import WhyChooseUs from "../components/whyChooseUs";
import SpecializedIn from "../components/specializedIn";
export default class ContentSlot {

    static getComponent(contentId, sectionContentData) {

        switch(contentId) {

            case 'a-mainSectionLayout':
                return <MainContent sectionContentData={sectionContentData}/>
            case 'b-AboutSectionLayout':
                return <AboutUs sectionContentData={sectionContentData} />
            case 'c-OurServicesSectionLayout':
                return <OurServices sectionContentData={sectionContentData} />
            case 'd-WhyChooseUsSectionLayout':
                return <WhyChooseUs sectionContentData={sectionContentData} />
            case 'e-SpecializedInSectionLayout':
                return <SpecializedIn sectionContentData={sectionContentData} />
            default: 
                throw new Error(` 📛 THE COMPONENT "${contentId}" DOES NOT EXIST, PLEASE CHECK 😓`); 
        }
    }

}