// $("h1").css("color", "red");

// adding class to h1 element
$("h1").addClass("big-title");

// removing class of h1 element
$("h1").removeClass("big-title");

// adding multiple class
$("h1").addClass("big-title margin");

// change the text inside any element
$("h1").text("Bye");

// change the html for any element
$("h1").html("<em>Sakshi<em>")

// get the attribute
console.log($("img").attr("src"))

// set or change attribute value
$("a").attr("href", "https://www.yahoo.com")

// class is also attribute, so we can change class as well by this method
$("h1").attr("class")

// adding event listener
$("h1").click(function(){
    $("h1").css("color", "pink")
})

$("button").click(function(){
    $("button").css("color", "purple")
})

// keypress
$("input").keydown(function(event){
    $("h1").html(event.key)
})

// can add any event listner using on
$("h1").on("mouseover", function(){
    $("h1").css("color", "blue")
})

// adding any html tag before or after any existing tag

// before 
$("h1").before("<button>new</button>")
// after
$("h1").after("<button>new</button>")
// just after but inside same tag
$("h1").append("<button>new</button>")
// just before but inside same tag
$("h1").prepend("<button>new</button>")

// animation 
$("button").on("click", function(){
    $("h1").slideToggle()
})



