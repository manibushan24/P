
var log4js = require("log4js");
log4js.configure({
   appenders:[
       {type: "console"},
       {type:'file', filename:'C:\\Users\\madis\\OneDrive\\Desktop\\p\\logs\\logFile.log', category: 'log'}
   ]
});
var logger = log4js.getLogger('log');

var EC = protractor.ExpectedConditions;

var seleniumExtended = {

    checkPresenceOfElement : function(locator, timeout) {
        // Waits for the element with id 'abc' to be present on the dom.
        browser.wait(EC.presenceOf(locator), timeout);
    },


    extendedSendkeys: function(locator, friendlyname, texttoenter, timeout){
        this.checkPresenceOfElement(locator,timeout);

        locator.sendKeys(texttoenter).then(function(){
                logger.info("Successfully enetered text into "+friendlyname)
        },function(error){
            error.message = "Unable to type under filed ["+friendlyname+"]";
            logger.error(error);
        })
    }

};



module.exports = seleniumExtended;