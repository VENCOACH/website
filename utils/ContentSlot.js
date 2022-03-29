import MainContent from "../components/mainContent";

export default class ContentSlot {

    static getComponent(contentId) {

        switch(contentId) {

            case 'main':
                return <MainContent/>
            default: 
                throw new Error(` 📛 THE COMPONENT "${contentId}" DOES NOT EXIST, PLEASE CHECK 😓`); 
        }
    }

}