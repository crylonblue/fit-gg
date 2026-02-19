export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

export const posts: BlogPost[] = [
  {
    slug: '5-minute-workout-daily-habit',
    title: 'Why 5-Minute Workouts Beat 1-Hour Gym Sessions for Building Habits',
    description: 'Science shows that consistency beats intensity. Here\'s why 5 minutes a day will get you further than occasional hour-long sessions.',
    date: '2026-02-19',
    readTime: '5 min read',
    category: 'Science',
  },
  {
    slug: 'bodyweight-exercises-no-equipment',
    title: 'The 10 Best Bodyweight Exercises You Can Do Anywhere (No Equipment)',
    description: 'From push-ups to pistol squats — master these 10 movements and you\'ll never need a gym again.',
    date: '2026-02-17',
    readTime: '7 min read',
    category: 'Workouts',
  },
  {
    slug: 'gamification-fitness-streaks',
    title: 'How Gamification Makes Fitness Addictive: Streaks, XP, and Leagues',
    description: 'Duolingo made language learning addictive with streaks and XP. Here\'s how the same psychology can transform your fitness routine.',
    date: '2026-02-15',
    readTime: '6 min read',
    category: 'Motivation',
  },
]
