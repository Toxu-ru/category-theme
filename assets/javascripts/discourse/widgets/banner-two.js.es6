import { createWidget } from 'discourse/widgets/widget';
import RawHtml from 'discourse/widgets/raw-html';

var nam_cat_two = Discourse.SiteSettings.num_categories_two;

export default createWidget('banner-two', {
  buildKey: (attrs) => 'banner-two',

  html(attrs, state) {
  let contents = []

  $.ajax({
  url: "/c/"+ nam_cat_two +".json",  
  dataType: 'json',
  async: false,
  success: function(data) {

  var topics = data.topic_list.topics;
  var id;  
  var title;
  var slug;
  var image_url;
  var length;

 for (var t = 0; t < topics.length; t++) {
 if(t > 0) break;  
 id = topics[t].id;  
 title = topics[t].title;
 slug = topics[t].slug;
 image_url = topics[t].image_url;
 
 contents.push( new RawHtml({ html: `<div class="h-telo">  <img src="${image_url}" alt="${title}" class="img-blog" width="100%"> <a class="title-blog" href="/t/${slug}/${id}">${title}</a></div>`})); 
   
  }
  } });
    
  return contents;
}});
