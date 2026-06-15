// src/dashboardData.ts
export type Stat = {
  id: number;
  title: string;
  value: string;
  trend: string;
  category: string;
  date: string;
  icon: string;
  description: string;
};

const icons = ['📊', '📈', '💰', '🎯', '🔔', '⚡', '📦', '🚀'];
const categories = ['Sales', 'Users', 'Revenue', 'Performance', 'Activity'];

export function generateStats(count: number): Stat[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Metric ${i + 1}`,
    value: `${((i * 137) % 9999).toLocaleString()}`,
    trend: i % 3 === 0 ? '↓ -2.4%' : '↑ +12.8%',
    category: categories[i % categories.length],
    date: `${(i % 28) + 1} Nov 2024`,
    icon: icons[i % icons.length],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }));
}