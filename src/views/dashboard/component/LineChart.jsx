import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import {connect} from 'react-redux'
import echarts from 'echarts'
import { debounce } from '@/utils'
import CSSModules from 'react-css-modules'
import styles from '../index.module.less'
require('echarts/theme/macarons') // echarts theme

class LineChart extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    chartData: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired
  }
  static defaultProps = {
    width: '100%',
    height: '340px',
    styles: {},
    chartData: {},
    className: 'shadow-radius'
  }
  state = {
    chart: null
  }

  componentDidMount () {
    debounce(this.initChart.bind(this), 300)()
    window.addEventListener('resize', () => this.resize())
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.collapsed !== this.props.collapsed){
      this.resize()
    }
    if (nextProps.chartData !== this.props.chartData){
      debounce(this.initChart.bind(this), 300)()
    }
  }

  componentWillUnmount() {
    this.dispose()
  }

  resize() {
    const chart = this.state.chart
    if (chart) {
      debounce(chart.resize.bind(this), 300)()
    }
  }

  dispose (){
    if (!this.state.chart) {
        return
    }
    window.removeEventListener('resize', () => this.resize()) // 移除窗口，变化时重置图表
    this.setState({chart: null})
  }


  setOptions({ expectedData, actualData } = {}) {
      this.state.chart.setOption({
        backgroundColor: '#fff',
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 10,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['expected', 'actual']
        },
        series: [{
          name: 'expected', itemStyle: {
            normal: {
              color: '#FF005A',
              lineStyle: {
                color: '#FF005A',
                width: 2
              }
            }
          },
          smooth: true,
          type: 'line',
          data: expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'actual',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
  }

  initChart () {
    if(!this.el) return
    this.setState({ chart: echarts.init(this.el)},()=>{
      this.setOptions(this.props.chartData)
    })
  }

  render() {

    const { className, height, width, styles} = this.props
        return (
            <div
                className={className}
                ref={el => (this.el = el)}
                style={{
                    ...styles,
                    height,
                    width
                }}
            />
          )
  }
}

const mapStateToProps = state=>({
  collapsed: state.UI.collapsed
})
export default connect(mapStateToProps)(CSSModules(LineChart, styles))