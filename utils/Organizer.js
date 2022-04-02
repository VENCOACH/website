
export default class Organizer {

    static order(desorderArray) {
        const orderArray = desorderArray.sort((a,b) => {
            let fa = a.fields.entryTitle.toLowerCase(),
                fb = b.fields.entryTitle.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })

        return orderArray
        
    }
}