import {
  navigateToTopic,
  showEntrance,
} from "discourse/components/topic-list-item";
import Component from "@ember/component";

export default Component.extend({
  attributeBindings: ["topic.id:data-topic-id"],
  classNameBindings: [
    ":latest-topic-list-item",
    "topic.archived",
    "topic.visited",
    "topic.pinned",
  ],

  showEntrance,
  navigateToTopic,

  click(e) {
    // for events undefined has a different meaning than false
    if (this.showEntrance(e) === false) {
      return false;
    }

    return this.unhandledRowClick(e, this.topic);
  },

  // Can be overwritten by plugins to handle clicks on other parts of the row
  unhandledRowClick() {},
});
