
const quotes = document.getElementById("quotes");

quote = ["I'm living a dream I never want to wake up from.", "I still learn, but I think it's the best thing in life to have a kid.", "I feel endless need to LEARN, to IMPROVE, to EVOLVE, not only to please the coach and the fans, but also to feel SATISFIED with myself.", "It doesn't matter if it's a simple goal from close range a long shot or a dribble around several players, I just love to score all goals.", "There is no harm in dreaming of becoming the world’s best player. It is all about trying to be the best. I will keep working hard to achieve it but it is within my capabilities.", "Your love makes me strong, your hate makes me unstoppable.", "Dreams are not what you see in your sleep, dreams are things which do not let you sleep.","I am not a perfectionist but I like to feel that things are done well. More important than that, I feel an endless need to learn, to improve, to evolve, not only to please the coach and the fans, but also to feel satisfied with myself."]

let x = Math.round((Math.random())*7);

html = `<figure class="quote">
<blockquote>
    <b><i>"${quote[x]}"</i></b>
</blockquote>
<figcaption>
    &mdash; Cristiano Ronaldo</figcaption>
    </figure>`

quotes.innerHTML = html;

    
    let first = "Richest";
    let second = "Most Goal Scorer";
    document.getElementById("type").style.fontWeight="900";
    var typed = new Typed('#type', {
        // Waits 1000ms after typing "First"
        strings: ['', first.fontcolor("green"), second.fontcolor("green")],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true
      });
      
      new WOW().init();