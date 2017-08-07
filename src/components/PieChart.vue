<template>
  <div :id="chartId"></div>
</template>

<script>
  import c3 from 'c3'

  export default {
    name: 'pie-chart',
    props: ['chartData'],
    data () {
      let chartId = 'chart' + Math.floor((Math.random() * 10) + 1);
      return {
        chartId: chartId,
        header: 'pie',
        chart: undefined
      }
    },

    mounted () {
      this.chartConfig = {
        bindto: '#' + this.chartId,
        data: {
          columns: [],
          type: 'pie',
          onclick: function (d, i) { },
          onmouseover: function (d, i) { },
          onmouseout: function (d, i) { },

        },
        legend: {
          hide: true
        },
        pie: {
          label: {
            format: function (value, ratio, id) {
              return id;
            }
          }
        }
      };

    },

    watch: {
      chartData: function (newData) {
        this.chartConfig.data.columns = newData
        c3.generate(this.chartConfig)
      }
    },
  }
</script>
