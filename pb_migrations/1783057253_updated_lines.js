/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2219258493")

  // remove field
  collection.fields.removeById("text4012811073")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_96911357",
    "help": "",
    "hidden": false,
    "id": "relation4012811073",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "routeId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2219258493")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "help": "",
    "hidden": false,
    "id": "text4012811073",
    "max": 0,
    "min": 0,
    "name": "routeId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("relation4012811073")

  return app.save(collection)
})
