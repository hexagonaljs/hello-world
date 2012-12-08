class Glue
  constructor: (@useCase, @gui, @storage)->
    LogAll(@useCase)
    LogAll(@gui)

