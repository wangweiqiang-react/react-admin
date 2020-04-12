import React from 'react'
import Chart from '@/components/chart'
import echarts from 'echarts'
const chartData = {
  backgroundColor: '#fff',
  title: {
    top: 20,
    text: 'title',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#57617B'
    },
    left: '1%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    },
    padding: [5, 10]
  },
  // tab
  legend: {
    top: 20,
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    right: '4%',
    textStyle: {
      fontSize: 12,
      color: '#57617B'
    }
  },

  // 图表
  grid: {
    top: 100,
    left: '3%',
    right: '4%',
    bottom: '4%',
    containLabel: true
  },
  // x轴
  xAxis: [
    {
      type: 'category', //分类
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '(%)',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      }
    }
  ],
  series: [
    {
      name: 'A1',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }
            ], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(137,189,27)',
          borderColor: 'rgba(137,189,2,0.27)',
          borderWidth: 12
        }
      },
      data:  [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    }, {
      name: 'A2',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }
            ], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(0,136,212)',
          borderColor: 'rgba(0,136,212,0.2)',
          borderWidth: 12
        }
      },
      data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
    }, {
      name: 'A3',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1
        }
      },
      areaStyle: {
        normal: {
          color: new echarts
            .graphic
            .LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)'
              }
            ], false),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
          shadowBlur: 10
        }
      },
      itemStyle: {
        normal: {
          color: 'rgb(219,50,51)',
          borderColor: 'rgba(219,50,51,0.2)',
          borderWidth: 12
        }
      },
      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    }
  ]
}

const LineChart = () => {
  return (
    <Chart
        chartData={chartData}
        height={'500px'}
        style={{
        padding: 0
      }}
    />)
}

export default LineChart