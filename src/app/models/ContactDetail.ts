import { Person } from './Person';
import { BaseEntity } from './BaseEntity';
export type ContactType = "PHONE" | "MOBILE" | "EMAIL" | "POSTAL_ADDRESS";
export interface ContactDetail extends BaseEntity {
    contactType: ContactType;
    contactData: string;
    person: Person;
}