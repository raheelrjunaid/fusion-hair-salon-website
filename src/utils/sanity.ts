import { createClient } from '@sanity/client';
import groq from 'groq';

export const client = createClient({
  projectId: 'q60emoop',
  dataset: 'production',
  apiVersion: '2023-02-08',
  useCdn: false,
});

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const getCollection = async (name: string): Promise<Testimonial[]> =>
  await client.fetch(groq`*[_type == "${name}"]`);

export const getSingleton = async (name: string): Promise<Testimonial> =>
  await client.fetch(groq`*[_type == "${name}"][0]`);
