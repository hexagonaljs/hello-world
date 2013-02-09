class UseCase
  constructor: ->
    
  start: =>
  	@askForName()

  askForName: =>

  nameProvided: (name) =>
  	@greetUser(name)

  greetUser: (name) =>

  restart: =>
  	@askForName()