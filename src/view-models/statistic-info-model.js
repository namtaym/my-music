export default class StatisticInfoModel{
  constructor (rowData, field){
    this.info = [];
    rowData.forEach(item => {
      this.info.push([item[field], 1]);
    })
  }
}
