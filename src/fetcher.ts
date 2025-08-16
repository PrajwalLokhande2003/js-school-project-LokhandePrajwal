import EventData from './types.js';

export default async function getData(): Promise<EventData[]> {
  const response = await fetch('data.json');
  if (!response.ok) {
    throw new Error(`Failed to load data: ${response.statusText}`);
  }
  return response.json();
}