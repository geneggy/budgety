/* eslint-disable no-console */
const budgetController = (function() {
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
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function(type, des, val) {
      let newItem, ID;

      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      

      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else  {
        newItem = new Income(ID, des, val);
      }
      

      data.allItems[type].push(newItem);
      return newItem;
    }
  };

})();

const UIController = (function() {
  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };

  return {


    
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either income or expense // passed into additem
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    addListItem: function(obj, type) {
      let html, newHtml, element;
      //create html string with placeholder text
      if(type === 'inc'){
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
        
      //replace the placeholder text with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);
      // insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    
    getDOMstrings: function() {
      return DOMstrings;
    }
    
  };
})();

const controller = (function(budgetCtrl, UICtrl) {

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
    let input, newItem;
    //1. get the filled input data
    input = UICtrl.getInput();
    //2. add item to budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    //3. add the item to the UI
    UICtrl.addListItem(newItem, input.type);
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