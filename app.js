/* eslint-disable no-console */
let budgetController = (function() {
 

})();

let UIController = (function() {

  return {

    const DOMstrings = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value'
    }
    
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be either income or expense
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
     

    }
      
    
  }
})();

let controller = (function(budgetCtrl, UiCtrl) {

  let ctrlAddItem = function() {
    //1. get the filled input data
    let input = UiCtrl.getInput();
    //2. add item to budget controller
    //3. add the item to the UI
    //4. calculate the budget
    //5. display budget
  };

  document.querySelector('.add-btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);