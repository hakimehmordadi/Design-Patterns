/**
 * This class is written for convert uncompatible data to Json format 
 */

import axios from 'axios';

export class adaptee {
    constructor() {
    }

    async convertXMLData() {
        try {
            const xmlData = await axios.get('http://restapi.adequateshop.com/api/Traveler');
            // do something for converting xml to json
            return xmlData.data;
        } catch (error) {
            throw new Error(`There is an error during fetching travelers`);
        }
    }
}


