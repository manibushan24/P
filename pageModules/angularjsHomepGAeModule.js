var angularjsHomePageLocators = require("../pageLocators/angularjsHomePageLocators");
var sysData =  require("../testData/sysData");

var seleniumExtended = require("../utils/seleniumExtended");
var angularjsHomePageFunctionality = {

    shouldAddATodo : function(){
        // seleniumExtended.checkPresenceOfElement(angularjsHomePageLocators.TODO_TEXT, sysData.SHORT_WAIT);
        // angularjsHomePageLocators.TODO_TEXT.sendKeys('write first protractor test');

        seleniumExtended.extendedSendkeys(angularjsHomePageLocators.TODO_TEXT, 'todo text field', "sample etxt", sysData.SHORT_WAIT);
        angularjsHomePageLocators.ADD_BTN.click();
    }

};


module.exports = angularjsHomePageFunctionality;