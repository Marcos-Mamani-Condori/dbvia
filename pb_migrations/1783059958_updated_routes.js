/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_96911357")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2219258493",
    "help": "",
    "hidden": false,
    "id": "relation2757206856",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lineId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_96911357")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2219258493",
    "help": "",
    "hidden": false,
    "id": "relation2757206856",
    "maxSelect": 10,
    "minSelect": 0,
    "name": "lineId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
