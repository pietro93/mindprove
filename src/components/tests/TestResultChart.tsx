
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

interface DimensionScore {
  name: string;
  score: number;
}

interface TestResultChartProps {
  dimensions: DimensionScore[];
}

export const TestResultChart = ({ dimensions }: TestResultChartProps) => {
  // Convert dimension scores to the format expected by Recharts
  const chartData = dimensions.map(dimension => ({
    subject: dimension.name,
    score: dimension.score,
    fullMark: 100
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Score"
          dataKey="score"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.4}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
