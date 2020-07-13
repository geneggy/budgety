/* eslint-disable no-console */
let budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },

    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      new Expense(type, des, val);
    }
  };

})();

let UIController = (function() {
  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {


    
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either income or expense
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    
    getDOMstrings: function() {
      return DOMstrings;
    }
    
  };
})();

let controller = (function(budgetCtrl, UICtrl) {

  let setupEventListeners = function() {
    const DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };

 
  let ctrlAddItem = function() {
    //1. get the filled input data
    let input = UICtrl.getInput();
    //2. add item to budget controller
    //3. add the item to the UI
    //4. calculate the budget
    //5. display budget
  };

  return {
    init: function() {
      console.log('app started');
      setupEventListeners();

    }
  };


})(budgetController, UIController);

controller.init();