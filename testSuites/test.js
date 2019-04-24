var testData = require("../testData/testData");
var angularjsHomePage = require("../pageModules/angularjsHomepGAeModule");
describe('angularjs homepage todo list', function() {


  beforeEach(function(){
    browser.driver.manage().window().maximize();
  });
  it('should add a todo', function() {
    browser.get(testData.browserURL);


    angularjsHomePage.shouldAddATodo();



    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });


  afterEach(function(){

  })
});