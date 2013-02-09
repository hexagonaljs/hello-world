var App;

App = (function() {

  function App() {
    var glue, gui, localStorage, useCase;
    useCase = new UseCase();
    gui = new Gui();
    localStorage = new LocalStorage("app");
    glue = new Glue(useCase, gui, localStorage);
    useCase.start();
    window.useCase = useCase;
  }

  return App;

})();

new App();
