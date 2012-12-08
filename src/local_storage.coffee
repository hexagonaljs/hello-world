class LocalStorage
  constructor: (@namespace) ->

  set: (key, value) =>
    console.log(value)
    $.jStorage.set("#{@namespace}/#{key}", value)

  get: (key) =>
    $.jStorage.get("#{@namespace}/#{key}")

  remove: (key) =>
    $.jStorage.deleteKey("#{@namespace}/#{key}")

  flush: =>
    for key in $.jStorage.index()
      if key.match("^#{@namespace}")
        $.jStorage.deleteKey(key)
