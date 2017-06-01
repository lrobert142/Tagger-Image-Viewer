import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Records = new Mongo.Collection('records');

if (Meteor.isServer) {
  Meteor.publish('records', () => {
    return Records.find({});
  });
}

Meteor.methods({
  'records.insert'(title, tags, image) {
    check(title, String);
    check(tags, String);
    check(image, String);

    Records.insert({
      title: title,
      tags: tags,
      image: image,
      createdAt: new Date(),
    });
  }
});
