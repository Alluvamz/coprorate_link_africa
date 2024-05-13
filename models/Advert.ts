// models/Advert.ts
import type { AdvertDocument } from '@/lib/document-types';
import mongoose from 'mongoose';
import { Schema, model, type Model as ModelType } from 'mongoose';

const AdvertSchema = new Schema(
    {
        images: Array,
    },
    {
        timestamps: true,
    },
);

const Advert = (mongoose.models.Advert as ModelType<AdvertDocument>) || model<AdvertDocument>('Advert', AdvertSchema);

export default Advert;
