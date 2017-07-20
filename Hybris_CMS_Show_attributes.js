jQuery(document).ready(function () {
  var tab = jQuery('div.organizereditortab').find('li.selected');
  if (jQuery(tab).find('span').text().trim().match('Attributes')) {
    var table = jQuery('div.classificationattributes');
    var list = '<div style=\'border: 1px solid #ff6a00;margin: 10px;padding: 10px;color: #ff6a00;\'>';
    for (var j = 0; j < 2; j++) {
      var attr = jQuery(table[j]).find('input.enabled');
      
      for (var i = 0; i <= attr.length - 1; i++) {
      	var nom[i]=attr[i].parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().parent().prev().find("a").innerText;
        if (jQuery(attr[i]).attr('value') !== '') {
        	list = list + nom[i]+jQuery(attr[i]).attr('value') + '<br/>';
        }
      }
    }
    list = list + '</div>';
    jQuery('div.classificationattributes:eq(0)').prepend(list);
  }
});
