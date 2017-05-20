import { Meteor } from 'meteor/meteor';

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

if (Meteor.isServer) {
  Images.allow({
   insert: function() {
   return true;
   },
   update: function() {
   return true;
   },
   remove: function() {
   return true;
   },
   download: function() {
   return true;
   }
  });
}