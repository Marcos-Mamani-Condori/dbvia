/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2527570112")

  // remove field
  collection.fields.removeById("relation2757206856")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2527570112")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "help": "",
    "hidden": false,
    "id": "relation2757206856",
    "maxSelect": 0,
    "minSelect": 0,
    "name": "lineId",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
