import { Bar } from '@ant-design/plots';

const Chart = () => {
  const data = [
    {
      party: '国阵',
      value: 40,
    },
    {
      party: '希盟',
      value: 12,
    },
    {
      party: '国盟',
      value: 0,
    },
    {
      party: 'MUDA',
      value: 1,
    },
    
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'party',
    seriesField: 'year',
    legend: {
      position: 'top-left',
    },
  };
  return <Bar {...config} />;
};
export default Chart