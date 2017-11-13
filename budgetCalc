var budgetController = (function () {
  var x = 23;
  function add (a) {
    return x + a;
  }
  
  return {
    publicMethod : function (b) {
      return add(b);
    }
  }
})();

var UIcontroller = (function(){
  //some code 
})();

var controller = (function (budgetCtrl,uiCtrl) {
  var z = budgetCtrl.publicMethod(2);
  
  return {
    anotherPublicMethod : function () {
      console.log(z);
    }
  }
})(budgetController,UIcontroller);


console.log(budgetController.publicMethod(7));
controller.anotherPublicMethod();
