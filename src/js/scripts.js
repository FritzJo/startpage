
document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        });

new TypeIt('#greeting', {
  strings: 'Hello World! :-)',
  speed: 150,
  waitUntilVisible: true
}).go();



var wage = document.getElementById("search_input");
wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        redirect(e);
    }
});

function redirect(e) {
    var query = e.target.value;
    var engine = document.getElementById("engine");
    var engineID = engine.options[engine.selectedIndex].value;

    var url = ""

    switch(engineID) {
      case "1":
        url = "https://www.google.com/search?q="+query;
        break;
      case "2":
        url = "https://www.bing.com/search?q="+query;
        break;
      case "3":
        url = "https://duckduckgo.com/?q="+query;
        break;
    }
    window.location = url;
}
