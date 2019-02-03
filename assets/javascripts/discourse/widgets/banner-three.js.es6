import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
 
var banner_three = Discourse.SiteSettings.banner_three;
var banner_four = Discourse.SiteSettings.banner_four;

export default createWidget('banner-three', {
  buildKey: (attrs) => 'banner-three',

  html(attrs, state) {
  let contents = []
  var username;
  var avatar_template;
  var ava;

  contents.push( new RawHtml({ html: `<div class="banner-three">${banner_three}</div>`})); 
   
  contents.push( new RawHtml({ html: `<div class="banner-four">${banner_four}</div>`})); 

  return contents;

}});
