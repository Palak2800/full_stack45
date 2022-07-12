
var subjectObject = {
  "districts": {
    "Agarmalwa": ["Civil hospital SUSNER"],

    "Anuppur": ["chc parasi", "chc Jaithari", "chc Pushprajgarh", "chc Kotma", "chc Karpa","PHC Pasan","chc Funga","phc Sakra", "phc Bijuri","chc Venkatnagar","phc Singhora","phc Chondi Pondi", "phc Malga","phc Cholna", "phc Lapta", "chc Kothi", "phc Beliyabadi","phc Nigwani","phc Payari","phc Amarkantak","phc Ghata","phc Khamroudh","phc Koilari","phc Khanda","phc Benibari"],

    "Bhopal": ["Phc Dhamrra", "phc Misrod", "phc Nazirabad", "phc Tumda", "chc Gandhinagar","phc Barkhedi dev", "phc Gunga", "phc Phanda","phc Runaha", "phc Ratibad","chc Kolar", "ch berasia"],
    
    "Barwani":["300 bedded district Hospital Barwani","ch Sendhwa","Anjad","chc Palshud", "chc Niwali","chc Selawad","chc Pati","chc Thikri","chc Rajpur","chc Warla","chc Pansemal","phc Ozar","phc Talwada Dab","phc Chachariya Pati","phc Talwada Bujurg","phc Nagalwadi","phc Menimata","phc Dawana","phc Modya","phc Indrapur", "phc Rakhi Bujurg", "phc Jogwada","phc Balwadi","phc Dhawali","phc Jhopali","phc Babdad","phc Chatli","phc Upla","phc Baruphatak","phc Jhulwaniya","phc Dhanora","phc Bokrata","phc Brahman Goan","phc Uchawad","phc Bhawati","phc Roshar","phc Khetia","phc Gandhawal","phc Bhandara Bujurg"],

    
       
  },

}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

