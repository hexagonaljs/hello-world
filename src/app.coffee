#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< glue

class App
  constructor: ->
    useCase      = new UseCase()
    gui          = new Gui()
    localStorage = new LocalStorage("app")
    glue         = new Glue(useCase, gui, localStorage)
    
    useCase.start()

new App()

