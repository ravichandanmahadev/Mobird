(function(){

var module = angular.module("config");
module.constant("AppConstant",{
  LABELS: {
    LBL_USER_NAEM : "User Name",
    LBL_PASSWORD : "Password",
    LBL_REMEMBER_ME: "Remember Me",
    LBL_LOG_IN:"Log In",
    LBL_FOOTER_TEXT:"Copyright - BFS Risk and Compliance Practice"
  },
  MenuItems: [
         { item: "About", route:"Landing" },
         { item: "Markets" , route:"Home" },
         { item: "Purchase" , route:"Landing" },
         { item: "Contact Us" , route:"Landing" },
      ],
  LISTIMAGESLIDE:
  [
    {image: '/Assets/Farm.jpg'},
    {image: '/Assets/Farm.jpg'},
    {image: '/Assets/Farm.jpg'},
  ],

  LANDINGPAGESECTIONS:[
    {
      sectionHeader: "Lorem ipsum dolor sit amet",
      sectionText: "Lorem ipsum dolor sit amet, pro te cibo nullam delenit. Rebum justo duo ne, odio utamur concludaturque ut quo. Vim lorem mandamus ea. Erat dictas deserunt ea mei. Nec an solum doming, omittam tincidunt ei vel, cum possit perfecto ad. Id sit animal sanctus commune. Assum inimicus scriptorem per ad, facer evertitur ex vix, nec ne solum nulla reformidans. Eum ex modo nusquam mediocritatem, duis diceret eos ex. Mea ei efficiantur necessitatibus, sea te ferri tempor, te ius prima audire conceptam. Mea ne modus democritum scribentur, id elitr accusamus sit. Clita verear vituperatoribus vix id, porro constituto vis ea, eum meliore dissentiunt complectitur et.",
      imageUrl : "Assets/Chicken.jpg",
      buttonText: "Learn More",
      buttonUrl:""
    },
    {
      sectionHeader: "Lorem ipsum dolor sit amet",
      sectionText: "Lorem ipsum dolor sit amet, pro te cibo nullam delenit. Rebum justo duo ne, odio utamur concludaturque ut quo. Vim lorem mandamus ea. Erat dictas deserunt ea mei. Nec an solum doming, omittam tincidunt ei vel, cum possit perfecto ad. Id sit animal sanctus commune. Assum inimicus scriptorem per ad, facer evertitur ex vix, nec ne solum nulla reformidans. Eum ex modo nusquam mediocritatem, duis diceret eos ex. Mea ei efficiantur necessitatibus, sea te ferri tempor, te ius prima audire conceptam. Mea ne modus democritum scribentur, id elitr accusamus sit. Clita verear vituperatoribus vix id, porro constituto vis ea, eum meliore dissentiunt complectitur et.",
      imageUrl : "Assets/Farm2.jpg",
      buttonText: "Learn More",
      buttonUrl:""
    }
  ],
  HEADERTEXT:"Mobird Farm",
  FOOTERTEXT: "Copyright © - Address : xxxx Permit ct, Irvine, CA - 92614 ph - 614-371-****"  ,
  LANDINGHEADERTEXT: "Welcome to Mobird Farm",
  LANDINGHOMETEXT:"Lorem ipsum dolor sit amet, pro te cibo nullam delenit. Rebum justo duo ne, odio utamur concludaturque ut quo. Vim lorem mandamus ea. Erat dictas deserunt ea mei. Nec an solum doming, omittam tincidunt ei vel, cum possit perfecto ad. Id sit animal sanctus commune. Assum inimicus scriptorem per ad, facer evertitur ex vix, nec ne solum nulla reformidans. Eum ex modo nusquam mediocritatem, duis diceret eos ex. Mea ei efficiantur necessitatibus, sea te ferri tempor, te ius prima audire conceptam. Mea ne modus democritum scribentur, id elitr accusamus sit. Clita verear vituperatoribus vix id, porro constituto vis ea, eum meliore dissentiunt complectitur et.",
  });

})()
