/**
 * This class implements the client need method
 */

import { ITarget } from './ITarget';
import { adaptee } from './adaptee';

export class Adapter implements ITarget {
    convert() {
        const adapteeInstance = new adaptee();
        return adapteeInstance.convertXMLData();
    }
}