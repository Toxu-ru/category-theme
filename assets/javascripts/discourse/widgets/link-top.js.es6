import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';
import { avatarImg } from 'discourse/widgets/post';
import { iconHTML } from "discourse-common/lib/icon-library";

let chevron = iconHTML('chevron-right');
var best_theme =  I18n.t("best_theme");
var nam_cat = Discourse.SiteSettings.num_categories;

var banner_one = Discourse.SiteSettings.banner_one;


export default createWidget('link-top', {
  buildKey: (attrs) => 'link-top',

  html(attrs, state) {
  let contents = []
  var username;
  var avatar_template;
  var ava;
 
 
  contents.push( new RawHtml({ html: `<div class="banner-one">${banner_one}</div>`})); 
 
 
  $.ajax({
  url: "/c/"+ nam_cat +".json",
  dataType: 'json',
  async: false,
  success: function(data) {

 
 contents.push( new RawHtml({ html: `<div class="h-home"><br />${best_theme}</div>`})); 
 
 var topics = data.topic_list.topics;
 var id;  
 var title;
 var slug;
 var uid;
 var last_poster_username;
 
 for (var t = 0; t < topics.length; t++) {
 if(t > 4) break;  
 id = topics[t].id;  
 title = topics[t].title;
 slug = topics[t].slug;
 uid = topics[t].posters[0].user_id;
 last_poster_username = topics[t].last_poster_username;
 
 
var ava = avatarImg('small', {username: last_poster_username})

 console.log(ava);
 
   contents.push( new RawHtml({ html: `<div class="h-qa">${chevron}  ${uid} <a href="/t/${slug}/${id}">${title}</a></div>`})); 
   
   }
 
 }
 });
    
  return contents;

}});
