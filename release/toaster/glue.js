var Glue;

Glue = (function() {

  function Glue(useCase, gui) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    After(this.useCase, "askForName", function() {
      return _this.gui.showAskForName();
    });
    After(this.useCase, "nameProvided", function() {
      return _this.gui.hideAskForName();
    });
    After(this.useCase, "greetUser", function(name) {
      return _this.gui.showGreetMessage(name);
    });
    After(this.useCase, "restart", function() {
      return _this.gui.hideGreetMessage();
    });
    After(this.gui, "restartClicked", function() {
      return _this.useCase.restart();
    });
    After(this.gui, "confirmNameButtonClicked", function(name) {
      return _this.useCase.nameProvided(name);
    });
    LogAll(this.useCase);
    LogAll(this.gui);
  }

  return Glue;

})();
