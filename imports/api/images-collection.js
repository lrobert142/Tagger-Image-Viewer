import { Meteor } from 'meteor/meteor';

FS.debug = true

var imageStore = new FS.Store.GridFS("images");
Images = new FS.Collection("images", {
 stores: [imageStore]
});

if (Meteor.isServer) {
  Images.allow({
    insert: () => {
      return true;
    }
  });
}
