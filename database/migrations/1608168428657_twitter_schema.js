"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TwitterSchema extends Schema {
  up() {
    this.create("twitters", (table) => {
      table.increments();
      table.string("userId", 60).notNullable();
      table.string("twitterTitle", 60).notNullable();
      table.string("twitterContent", 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("twitters");
  }
}

module.exports = TwitterSchema;
