import angular from 'angular';

import '../style/app.less';

const data = [
  {
    title: "Fruits",
    nodes: [
      {
        title: "Apple",
      },
      {
        title: "Banana",
      },
      {
        title: "Orange",
      },
      {
        title: "Kiwi",
      },
    ],
  },
  {
    title: "Vegetables",
    nodes: [
      {
        title: "Potato",
      },
      {
        title: "Carrot",
      },
      {
        title: "For salad",
        nodes: [
          {
            title: "Tomato",
          },
          {
            title: "Cucumber",
          },
        ]
      },
    ],
  }
];

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($scope) {
    this.data = data;
    this.process = (node) => {
      console.log(node.text);
    }
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .component('treeItem', {
    templateUrl: 'tree-item.html',
    bindings: {data: '<', open: '<'}
  });

export default MODULE_NAME;
