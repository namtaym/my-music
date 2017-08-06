<template>
  <div >
    <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
        <tr class="tbl-header">
          <th v-for="(value, key) in columns"
              @click="sortBy(key)"
              :class="{ active: sortKey == key }">
            {{ value}}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
          </th>
        </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
        <tr v-for="entry in filteredData">
          <td v-for="(value, key) in columns" v-on:click="selectItem(entry)">
            {{entry[key]}}

          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'grid',
    props: ["data", "columns"],
    data: function () {
      var sortOrders = {}
      for (let key in this.columns) {
        sortOrders[key] = 1
      }
      return {
        sortKey: '',
        sortOrders: sortOrders
      }
    },
    computed: {
      filteredData: function () {
        var sortKey = this.sortKey
        var data = this.data
        var filterKey = "";
        var order = this.sortOrders[sortKey] || 1

        if (filterKey) {
          data = data.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        if (sortKey) {
          data = data.slice().sort(function (a, b) {
            a = a[sortKey]
            b = b[sortKey]
            return (a === b ? 0 : a > b ? 1 : -1) * order
          })
        }
        return data
      }
    },
    methods: {
      sortBy: function (key) {
        this.sortKey = key
        this.sortOrders[key] = this.sortOrders[key] * -1
      },
      selectItem(item){
        this.$emit('select', item);
      }
    }
  }
</script>

<style scoped>
  table {
    width: 100%;
    table-layout: fixed;
  }

  .tbl-header {
    padding-right: 6px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .tbl-content {
    height: 300px;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  td {
    padding: 15px;
    text-align: left;
    vertical-align: middle;
    font-weight: 300;
    font-size: 12px;
    color: #fff;
    border-bottom: solid 1px rgba(255, 255, 255, 0.1);
  }

  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
  }

  th.active {
    color: #fff;
  }

  th.active .arrow {
    opacity: 1;
  }

  .arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
  }

  .arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  }

  .arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  }
</style>
