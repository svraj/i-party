import { BaseEntity } from './BaseEntity';
export interface Group extends BaseEntity {
    name: string;
    description: string;
}