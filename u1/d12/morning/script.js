var philosophers = [
  {
    name: "Frederick Nietzsche",
    language: "German",
    born: "1844",
    works: ["The Birth of Tragedy", "Beyond Good and Evil", "On the Genealogy of Morality"],
    famousLine: "'When you look into an abyss, the abyss also looks into you.'",
    school: "Continental Philosophy",
    influencedBy: ["William Shakespeare", "Arthur Schopenhauer"],
    img: "http://thisiscommonsense.com/wp-content/uploads/2015/11/image11.jpg"
  },
  {
    name: "Aristotle",
    language: "Greek",
    born: "384 BC",
    works: ["The Categories", "Metaphysics", "Nicomachean Ethics"],
    famousLine: "'It is the mark of an educated mind to be able to entertain a thought without accepting it.'",
    school: "Aristotelianism",
    influencedBy: ["Plato", "Socrates"],
    img: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg"
  },
  {
    name: "Georg Wilhelm Friedrich Hegel",
    language: "German",
    born: "1770",
    works: ["The Phenomenology of Spirit", "Elements of the Philosophy of Right", "The Science of Logic"],
    famousLine: "'The history of the world is none other than the progress of the consciousness of freedom.'",
    school: "Absolute Idealism",
    influencedBy: ["Rousseau", "Spinoza"],
    img: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NDg0MDU0OTkyMDI5MTk5.jpg"
  },
  {
    name: "Simone de Beauvoir",
    language: "French",
    born: "1908",
    works: ["The Second Sex", "The Mandarins", "She Came to Stay"],
    famousLine: "'One's life has value so long as one attributes value to the life of others, by means of love, friendship, indignation and compassion.'",
    school: "Existentialism",
    influencedBy: ["Husserl", "Descartes"],
    img: "http://www.alcoberro.info/imatges/beauvoir.jpg"
  },
  {
    name: "Martin Heidegger",
    language: "German",
    born: "1889",
    works: ["Being & Time", "Poetry, Language, and Thought", "The Question Concerning Technology"],
    famousLine: "'Thinking begins only when we have come to know that reason, glorified for centuries, is the stiff-necked adversary of thought.'",
    school: "Phenomenology",
    influencedBy: ["Aristotle", "Nietzsche"],
    img: "http://www.prospectmagazine.co.uk/wp-content/uploads/2014/03/heidegger-crop.jpg"
  }
];

$(document).ready(function() {
<<<<<<< HEAD
console.log('script loaded');


/*In your script.js file, write a jQuery method that responds to a click on the submit button.
First, use this function to console.log the value typed into the input box.
Hint - Check out the jQuery method .val()*/
var philoName = $(".name")

$("#inputSubmit").click(function(){
           var $inputVal = $("input").val();
console.log($inputVal);
var philosopher;

switch ($inputVal) {
  case "fred":
  philosopher = philosophers[0]
  break;
  case "aristotle":
  philosopher = philosophers[1]
  break;
  case "hegel": philosophers[2]
  break;
  case "simone": philosophers[3]
  break;
  case "martin": philosophers[4]
  break;
  default:
  console.log("nope")
}

$("img").attr("src", philosopher.img);
$(".name").text(philosopher.name);
$(".school").text(philosopher.school);
$(".quote").text(philosopher.quote);

    })

//$("#inputSubmit").click(function(){
//           console.log($("input").val());
//    })

//4. Update the img with the appropriate image url



//5. Update the element with the class name with the appropriate name

//6. Update the element with the class school with the appropriate school

//7. Update the element with the class quote with the appropriate famous line

=======

  console.log('script loaded');

  // your code here
  
>>>>>>> ga-students/master
});
