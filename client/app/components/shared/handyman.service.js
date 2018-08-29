import angular from 'angular';
class HandymanService {
  url = 'https://levelup-json.now.sh/Q';
  constructor($http) {
    'ngInject';
    this.http = $http;
  }

  getItems() {
    return this.http.get(this.url).then(res => res.data);
  }

  createItem(item) {
    return this.http.post(this.url, item);
  }
  updateItem(item) {
    return this.http.patch(`${this.url}/${item.id}`, item)
  }
  deleteItem(item) {
    return this.http.delete(`${this.url}/${item.id}`, item)
  }
}
let handymanService = angular.module('handymanService', [])
  .service('handymanService', HandymanService).name;
export default handymanService

