import { createClient } from "next-sanity";

export const config ={
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ||
    'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiversion: '2020-03-25',
    useCdn: process.env.Node_ENV === 'production',
};

export const sanityClient = createClient(config);
