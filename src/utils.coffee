_.defaults this,
  Before: (object, methodName, adviseMethod) ->
    YouAreDaBomb(object, methodName).before(adviseMethod)
  BeforeAnyCallback: (object, methodName, adviseMethod) ->
    YouAreDaBomb(object, methodName).beforeAnyCallback(adviseMethod)
  After: (object, methodName, adviseMethod) ->
    YouAreDaBomb(object, methodName).after(adviseMethod)
  Around: (object, methodName, adviseMethod) ->
    YouAreDaBomb(object, methodName).around(adviseMethod)

  AfterAll: (object, methodNames, adviseMethod) ->
    for methodName in methodNames
      After(object, methodName, adviseMethod)

  LogAll: (object) ->
    for own key, value of object
      if _.isFunction(value)
        do (key) ->
          Before(object, key, -> console.log("calling: #{key}"))

  AutoBind: (gui, useCase) ->
    for key, value of gui
      if _.isFunction(value)
        do (key) ->
          if key.endsWith("Clicked") and useCase[key.remove("Clicked")]
            After(gui, key, (args) -> useCase[key.remove("Clicked")](args))

