hexagonal.js hello world example
====================

This is the simplest possible hexagonaljs app.
It shows all the basic concepts of a hexagonaljs architecture.

The use case object
-------------------

At the heart of an application lives the use case object. Let's look at the use case in this project:

```coffeescript
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
```