/*
===============================================================

Hi! Welcome to my little playground!

My name is Tobias Bogliolo. 'Open source' by default and always 'responsive',
I'm a publicist, visual designer and frontend developer based in Barcelona. 

Here you will find some of my personal experiments. Sometimes usefull,
sometimes simply for fun. You are free to use them for whatever you want 
but I would appreciate an attribution from my work. I hope you enjoy it.

===============================================================
*/

/*
=====================
=====================
JSON list
=====================
=====================
*/
var post=[
  {
    songTitle: "Lorem ipsum dolor",
    songSinger: "Voluptates sit ducimus velit soluta ed doloribus iste commodi deserunt aut unde, numquam illo, unde.",
    songLyrics: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, molestiae placeat, inventore eligendi qui deserunt asperiores error laboriosam libero blanditiis dignissimos eius molestias cumque necessitatibus est. <b>Quae velit ad cupiditate necessitatibus</b>, facere eum earum ut odio nostrum labore a explicabo quasi voluptates, consequatur obcaecati quos, quis fugiat veniam ea ipsam consequuntur illo!</p><p>Aperiam fugit nulla, praesentium doloremque harum laborum ipsam officia minima. Alias saepe cumque mollitia soluta totam facere, iusto ab officiis cum itaque! Sit sint earum sequi quae mollitia quibusdam adipisci facere explicabo libero nihil! Velit aliquam asperiores possimus eligendi dolore reprehenderit similique suscipit.</p>",
    songThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-quinon.jpg",
    songImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-quinon5.jpg",
    songLink: "article-link1"
  },
  {
       songTitle: "Better than yourself",
       songSinger: "Lukas Graham",
       songLyrics: "<p>   <br/><br/>[Verse 1] <br/> I got the letter back, saying I can come and see you <br/> I really don't have time, but promised that I'd come and see you <br/> You're sitting far away, but do you know I sometimes need you? <br/> I know that you deserve the time you got, of all the people <br/> I know you never bent, even in the strongest wind <br/> I really wished to every God that you were innocent <br/> I'm happy and I'm proud that I can still call you my friend <br/> I hope you read the letters and the magazines I send <br/>  <br/>  <br/><br/>[Pre-Chorus] <br/> You got your head up <br/> But I don't have my hopes high <br/> I know that you're a good man <br/> And that's what brings a tear to my eye <br/>  <br/>  <br/><br/>[Chorus] <br/> I'm like, oh <br/> I hope you know you're not alone in that hell <br/> And there ain't no <br/> No one can change it, no one can do it better but yourself <br/>  <br/>  <br/><br/>[Verse 2] <br/> I was 16 and we used to roll together <br/> You told me back then that I was meant for something better <br/> You know in our life nothing's gon' change but the weather <br/> It seems it been forever since we really stuck together <br/> I'm living a crazy life, I wish that you could see it too <br/> See a thousand people sing my song from me to you <br/> Every time I sing it, you know I'm bleeding too <br/> Man, I accept you as you are, no, I don't need the truth <br/>  <br/>  <br/><br/>[Pre-Chorus] <br/> I got my head up <br/> But I ain't got my hopes high <br/> See, I know you're a good man <br/> And it, it brings a tear to my eye <br/>  <br/>  <br/><br/>[Chorus] <br/> And I'm like, oh <br/> I hope you know you're not alone in that hell <br/> And there ain't no <br/> No one can change it, no one can do it better but yourself <br/>  <br/>  <br/><br/>[Verse 3] <br/> I reminisce to back then when it was you and I <br/> Smoking big fat blunts, drive-in movie night <br/> They tried to get you down, but you refused to die <br/> They tried to give you angel wings, but you refused to fly <br/> You'd rather stay in hell, and take your time in jail <br/> They're only punishing a soul that you will never sell <br/> We both know that we owe nothing to each other <br/> But can you blame me for loving and missing my brother? <br/>  <br/>  <br/><br/>[Chorus] <br/> Oh <br/> I hope you know you're not alone in that hell <br/> And there ain't no <br/> No one can change it, no one can do it better but yourself <br/> Oh <br/> I hope you know you're not alone in that hell <br/> And there ain't no <br/> No one can change it, no one can do it better but yourself </p>",
       songThumb: "https://images.genius.com/8edec200ad5e194bd372b19fbd5169eb.1000x1000x1.jpg",
       songImg: "https://images.genius.com/8edec200ad5e194bd372b19fbd5169eb.1000x1000x1.jpg",
       songLink: "article-link1"
  },
  {
       songTitle: "Skin",
       songSinger: "Sixx:A.M.",
       songLyrics: "<p> Paint yourself a picture <br/> Of what you wish you looked like <br/> Maybe then they just might <br/> Feel an ounce of your pain <br/> <br/> Come into focus <br/> Step out of the shadows <br/> It's a losing battle <br/> There's no need to be ashamed <br/> <br/> 'Cause they don't even know you <br/> All they see is scars <br/> They don't see the angel <br/> Living in your heart <br/> <br/> Let them find the real you <br/> Buried deep within <br/> Let them know with all you've got <br/> That you are not your skin <br/> <br/> Oh [2x] <br/> <br/> When they start to judge you <br/> Show them your true colors <br/> And do unto others <br/> As you'd have done to you <br/> <br/> Just rise above this <br/> Kill them with your kindness <br/> Ignorance is blindness <br/> They're the ones that stand to lose <br/> <br/> 'Cause they don't even know you <br/> All they see is scars <br/> They don't see the angel <br/> Living in your heart <br/> <br/> Let them find the real you <br/> Buried deep within <br/> Let them know with all you've got <br/> That you are not your skin <br/> <br/> Oh <br/> <br/> Well, they don't even know you <br/> All they see is scars <br/> And they don't see the angels <br/> Living in your heart <br/> <br/> So, let them find the real you <br/> Buried deep within <br/> Let them know with all you've got <br/> That you are not <br/> You are not your skin </p>",
       songThumb: "https://images.genius.com/dd7b0f7f7bbd308e88a293f3e6c8d34f.640x640x1.jpg",
       songImg: "https://images.genius.com/dd7b0f7f7bbd308e88a293f3e6c8d34f.640x640x1.jpg",
       songLink: "article-link1"
  },
  {
    songTitle: "Adipisicing elit beatae",
    songSinger: "Lorem ipsum dolor sit amet, odit nulla consectetur adipisicing elit. Fugit vero accusamus commodi ex?",
    songLyrics: "<p>Repudiandae voluptatem autem ab maiores <b>quaerat dicta illum</b> deleniti alias iure esse ex temporibus asperiores assumenda beatae veniam sit, eligendi magni quas quod, qui expedita similique error nulla debitis. Debitis <b>nemo ipsam rem dignissimos</b>, dicta repellat nulla nesciunt! Recusandae dicta numquam repellat tempore in cum, expedita. Quidem veniam, eos harum cumque aspernatur labore est enim voluptatibus numquam at ea vel provident facere doloremque. Natus, officiis eos!</p>",
    songThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-shigeru.jpg",
    songImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-shigeru4.jpg",
    songLink: "article-link1"
  },
  {
    songTitle: "Quidem neque commodi",
    songSinger: "Aliquid sapiente harum maiores alias optio, ea vero perferendis impedit architecto culpa libero corporis.",
    songLyrics: "<p>Dolorum eos dignissimos eveniet deserunt veritatis possimus magnam enim, eaque non, architecto voluptates consequuntur nulla, modi nobis sunt perferendis voluptatibus accusantium voluptatem! Delectus iure architecto rem, ex quas necessitatibus illum autem obcaecati sapiente ea inventore quisquam debitis quae numquam. Iusto mollitia suscipit iste quae tempore ipsam facere <b>quia nobis et omnis accusantium quo</b>, quod tenetur, aperiam, rem quos quas eveniet exercitationem. Rem, hic optio. Harum quis porro optio facilis totam velit quibusdam corrupti saepe similique sed aut doloribus temporibus ipsum modi rerum, ab impedit.</p>",
    songThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-karuna.jpg",
    songImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-karuna2.jpg",
    songLink: "article-link1"
  },
  {
    songTitle: "Explicabo obcaecati",
    songSinger: "Iste explicabo, architecto maiores nisi eaque doloribus aspernatur esse tera corporis iure itaque animi?",
    songLyrics: "<p>Voluptatem, similique. Sed doloribus quaerat ratione deleniti esse odit doloremque incidunt, aut, recusandae? Ipsam ipsum voluptas tenetur aut atque tempora ducimus, dolores qui, <b>maiores voluptatibus veniam</b>, quos inventore esse illum adipisci. Error quo officia, distinctio voluptates, possimus voluptatem dignissimos magni dolor, nobis expedita doloribus consequuntur beatae natus iusto ipsum culpa. Delectus pariatur, officia voluptatem, dolore enim cum temporibus deserunt reiciendis at quam labore aperiam, adipisci nesciunt.</p><p>Laborum placeat <b>adipisci ex porro</b>, labore impedit sed nulla perferendis architecto quis vitae laudantium animi, dolorum repudiandae incidunt eaque! Possimus corporis voluptatum aut velit similique facilis fugit quis eaque, fugiat inventore beatae minus nemo soluta quia earum, atque accusamus!</p>",
    songThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-vinallonga.jpg",
    songImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-vinallonga1.jpg",
    songLink: "article-link1"
  },
  {
    songTitle: "Ullam provident",
    songSinger: "Lorem ipsum dolor sit amet eveniet, consectetur adipisicing elit. Numquam repudiandae nam dolore.",
    songLyrics: "<p>Possimus ipsam, aliquid voluptate ab quaerat mollitia deleniti recusandae, voluptas quisquam consequatur porro nesciunt sed commodi reprehenderit, amet earum sapiente sunt, temporibus aut <b>consectetur eligendi</b> laudantium. Cum, eius! Optio tempora unde, non quasi fugit, eos corporis iusto dolores, quam suscipit ipsum cum nesciunt incidunt atque in recusandae amet totam ea fuga! Aliquid similique exercitationem accusamus, et vitae molestiae voluptatum quo earum doloribus <b>nisi hic nesciunt</b>, blanditiis dignissimos. Quia veniam neque facere nesciunt quibusdam distinctio architecto perferendis veritatis? Laboriosam architecto culpa hic aspernatur ratione possimus nostrum mollitia, soluta aliquid reiciendis doloribus.</p>",
    songThumb: "http://tobiasbogliolo.com/assets/imgs/cases/thumb-urban.jpg",
    songImg: "http://tobiasbogliolo.com/assets/imgs/cases/case-urban4.jpg",
    songLink: "article-link1"
  }
];


/*
=====================
=====================
Thumbs
=====================
=====================
*/
//Loop length:
var postLength = post.length;
//Empty container:
$(".posts-box").empty();
//Loop:
for (i=0; i<postLength; i++) {
  //Create thumb structure:
  var listItem =
    '<li>'+
      '<div class="card">'+
        '<a class="button" href="'+post[i].songLink+'" data-obj="'+i+'">'+
          '<img src="'+post[i].songThumb+'" alt="">'+
        '</a>'+
        '<div>'+
          '<h3>'+post[i].songTitle+'</h3>'+
          '<p>'+post[i].songSinger+'</p>'+
        '</div>'+
        '<div>'+
          '<a class="button" href="'+post[i].songLink+'" data-obj="'+i+'">Explore</a>'+
        '</div>'+
      '</div>'+
    '</li>';
  //Append thumb:
  $(".posts-box").append(listItem);
};


/*
=====================
=====================
Inner post
=====================
=====================
*/
var thisElement = 0;

function innerContent(content){
  $(".inner-img").attr("src",post[content].songImg);
  $(".inner-title").html(post[content].songTitle);
  $(".inner-text").html(post[content].songLyrics);
};

//Open post:
$(".button").click(function(e){
  e.preventDefault();
  thisElement = $(this).attr("data-obj");
  innerContent(thisElement);
  $(".modal").css({"display":"block"});
  dissBtn();
});

//Close post:
$(".close-post, .modal-sandbox").click(function(){
  $(".modal").css({"display":"none"});
});

//Next post:
$(".next-post").click(function(e){
  e.preventDefault();
  if (thisElement<postLength-1) {
    thisElement = parseInt(thisElement) + 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Prev post:
$(".prev-post").click(function(e){
  e.preventDefault();
  if (thisElement>0) {
    thisElement = parseInt(thisElement) - 1;
    innerContent(thisElement);
    dissBtn();
  };
});

//Button disable:
function dissBtn(){
  $(".prev-post, .next-post").removeClass("disabled");
  if (thisElement<=0){
    $(".prev-post").addClass("disabled");
  }
  else if (thisElement>=postLength-1){
    $(".next-post").addClass("disabled");
  };
};