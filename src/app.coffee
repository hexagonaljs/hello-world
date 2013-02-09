#<< utils
#<< local_storage
#<< use_case
#<< gui
#<< glue

class App
  constructor: ->
    useCase      = new UseCase()
    gui          = new Gui()
    glue         = new Glue(useCase, gui)
    
    useCase.start()
    window.useCase = useCase

new App()

