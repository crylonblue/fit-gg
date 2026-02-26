export interface Exercise {
  name: string;
  reps: number | null;
  duration: number | null; // seconds
  rest: number;
  emoji: string;
  cues: string[];
}

export interface Session {
  id: number;
  title: string;
  day: number;
  description: string;
  estimatedMinutes: number;
  exercises: Exercise[];
}
