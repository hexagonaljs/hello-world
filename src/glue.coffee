class Glue
  constructor: (@useCase, @gui, @storage)->
    After(@useCase, "askForName", => @gui.showAskForName())
    After(@useCase, "nameProvided", => @gui.hideAskForName())
    After(@useCase, "greetUser", (name) => @gui.showGreetMessage(name))
    After(@useCase, "restart", => @gui.hideGreetMessage())
    
    After(@gui, "restartClicked", => @useCase.restart())
    After(@gui, "confirmNameButtonClicked", (name) => @useCase.nameProvided(name))

    LogAll(@useCase)
    LogAll(@gui)