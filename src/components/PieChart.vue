<template>
  <div id="chart"></div>
</template>

<script>
  import c3 from 'c3'

  export default {
    name: 'pie-chart',
    props: ['chartData'],
    data () {
      return {
        chartId: 'chart',
        header: "pie",
        chart: undefined
      }
    },

    mounted () {
      this.chartConfig = {
        data: {
          bindto: "#chart",
          columns: [],
          type : 'pie',
          onclick: function (d, i) { },
          onmouseover: function (d, i) { },
          onmouseout: function (d, i) { }
        }
      };

    },

    watch: {
      chartData: function (newData){
        this.chartConfig.data.columns = newData
        c3.generate(this.chartConfig)
        }
      },
  }
</script>

<style >
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
