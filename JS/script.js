//Global variables
let hour = 0;
let time = "Good day";

window.onload = function () {
  console.log(`%c ________________________________________
< Hi there thank you for visiting my website. Having worked on this website for the past few years, I have gotten inspired by so many websites designed by amazing developers. Feel free to borrow some elements as you wish. Have a good day! :) >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace");

  //determines users timezone & state morning,afternoon or evening
  hour = new Date().getHours();
  if ((hour >= 0 && hour < 6) || (hour >= 18 && hour <= 23)) time = "Good evening";
  else if (hour >= 6 && hour < 12) time = "Good morning";
  else if (hour >= 12 && hour < 18) time = "Good afternoon";

  //handlebar injects time into HTML
  let intro = "<h1>{{time}}, <br>Welcome to Hansa's journal — <br>Software Developer, Information Technologist and Blockchain Enthusiast.</h1>";
  let template = Handlebars.compile(intro);
  let output_intro = template({time: time});
  document.getElementById("intro").innerHTML += output_intro;

  //footer text
  let footer = "© 2019 <a href=\"mailto:wc1369@nyu.edu\">Hansa Chen</a>. ";
  if ($(window).width() >= 426) {
    footer += "Made with ❤️in NYC."
  }
  document.getElementById("footer_Text").innerHTML = footer;

  //when all window.onload loads, display website
  document.body.classList.add("all-loaded");

}
