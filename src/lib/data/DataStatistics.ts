export interface StatisticsProps {
  id: string;
  title: string;
  value: number;
  icon: any;
}

export const DataStatistics: StatisticsProps[] = [
  {
    id: "1",
    title: "Total performance",
    value: 4,
    icon: "ChartLine",
  },
  {
    id: "2",
    title: "Total balance",
    value: 4000000,
    icon: "Wallet",
  },
  {
    id: "3",
    title: "Total services",
    value: 4,
    icon: "Toolbox",
  },
  {
    id: "3",
    title: "Total schedules",
    value: 4,
    icon: "Calendar",
  },
];
