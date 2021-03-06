import { Document } from 'mongoose';
import { FieldType } from '../enums/fields.enum';

export interface ISchemaCustomFields extends Document {
    readonly field_name: String,
    label: String,
    values: [String],
    placeholder: String,
    required: Boolean,
    type: FieldType
}