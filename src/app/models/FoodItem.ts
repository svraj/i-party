import { Taste } from './Taste';
import { BaseEntity } from './BaseEntity';
export interface FoodItem extends BaseEntity {
    name: string;
    remarks: string;
    drink: boolean;
    tastes: Taste[];
}