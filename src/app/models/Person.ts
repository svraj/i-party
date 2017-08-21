import { Taste } from './Taste';
import { Group } from './Group';
import { ContactDetail } from './ContactDetail';
import { BaseEntity } from './BaseEntity';
export interface Person extends BaseEntity {
    firstName: string;
    lastName: string;
    groups: Group[];
    tastes: Taste[];
    contactDetails: ContactDetail[];
}
