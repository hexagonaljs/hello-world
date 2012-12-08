var Glue;

Glue = (function() {

  function Glue(useCase, gui, storage) {
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    LogAll(this.useCase);
    LogAll(this.gui);
  }

  return Glue;

})();
