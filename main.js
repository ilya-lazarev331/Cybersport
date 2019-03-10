$(".block1").mouseover(function(){
    $(".block1").animate({width:"50%"}, 200);
    $(".block2").animate({width:"24.7%"}, 200);
    $(".block3").animate({width:"24.7%"}, 200);
    $(".img1").animate({height:"450",width:"450"}, 200);
    $(".img2").animate({height:"300",width:"380"}, 200);
    $(".img3").animate({height:"350",width:"380"}, 200);
}
); 
$(".block2").mouseover(function(){
    $(".block2").animate({width:"50%"}, 200);
    $(".block1").animate({width:"24.7%"}, 200);
    $(".block3").animate({width:"24.7%"}, 200);
    $(".img2").animate({height:"350",width:"650"}, 200);
    $(".img1").animate({height:"400",width:"380"}, 200);
    $(".img3").animate({height:"350",width:"380"}, 200);
}
); 
$(".block3").mouseover(function(){
    $(".block3").animate({width:"50%"}, 200);
    $(".block2").animate({width:"24.7%"}, 200);
    $(".block1").animate({width:"24.7%"}, 200);
    $(".img3").animate({height:"400",width:"700"}, 200);
    $(".img1").animate({height:"400",width:"380"}, 200);
    $(".img2").animate({height:"300",width:"380"}, 200);
}
);
$(".li1").mouseover(function(){
    $(".li1").css("backgroundColor","brown");    
}
);
$(".li2").mouseover(function(){
    $(".li2").css("backgroundColor","brown");    
}
);
$(".li3").mouseover(function(){
    $(".li3").css("backgroundColor","brown");    
}
);
$(".li4").mouseover(function(){
    $(".li4").css("backgroundColor","darkslategray");    
}
);
$(".li5").mouseover(function(){
    $(".li5").css("backgroundColor","darkslategray");    
}
);
$(".li6").mouseover(function(){
    $(".li6").css("backgroundColor","darkslategray");    
}
);
$(".li7").mouseover(function(){
    $(".li7").css("backgroundColor","mediumturquoise");    
}
);
$(".li8").mouseover(function(){
    $(".li8").css("backgroundColor","mediumturquoise");    
}
);
$(".li9").mouseover(function(){
    $(".li9").css("backgroundColor","mediumturquoise");    
}
);
$(".li1,.li2,.li3,.li4,.li5,.li6,.li7,.li8,.li9").mouseout(function(){
    $(".li1,.li2,.li3,.li4,.li5,.li6,.li7,.li8,.li9").css("backgroundColor","black");    
}
);
$(".Dbutt1").mouseover(function(){        
    $(".Dbutt1").css("backgroundColor","brown");
    $(".Dbutt1").animate({borderRadius:"30px"}, 200);
}
);
$(".Dbutt2").mouseover(function(){
    $(".Dbutt2").css("backgroundColor","brown");
    $(".Dbutt2").animate({borderRadius:"30px"}, 200);
}
);
$(".Dbutt1,.Dbutt2").mouseout(function(){    
    $(".Dbutt1,.Dbutt2").css("backgroundColor","black");
    $(".Dbutt1,.Dbutt2").animate({borderRadius:"10px"}, 200);
}
);
$(".strelka").toggle(function(){
      $(".side").animate({left:"1px"}, 600);
      },function(){
      $(".side").animate({left:"-80px"}, 600);
      }
);
$(".CSbutt1").mouseover(function(){        
    $(".CSbutt1").css("backgroundColor","darkslategray");
    $(".CSbutt1").animate({borderRadius:"30px"}, 200);
}
);
$(".CSbutt2").mouseover(function(){
    $(".CSbutt2").css("backgroundColor","darkslategray");
    $(".CSbutt2").animate({borderRadius:"30px"}, 200);
}
);
$(".CSbutt1,.CSbutt2").mouseout(function(){    
    $(".CSbutt1,.CSbutt2").css("backgroundColor","black");
    $(".CSbutt1,.CSbutt2").animate({borderRadius:"10px"}, 200);
}
);
$(".HSbutt1").mouseover(function(){        
    $(".HSbutt1").css("backgroundColor","mediumturquoise");
    $(".HSbutt1").animate({borderRadius:"30px"}, 200);
}
);
$(".HSbutt2").mouseover(function(){
    $(".HSbutt2").css("backgroundColor","mediumturquoise");
    $(".HSbutt2").animate({borderRadius:"30px"}, 200);
}
);
$(".HSbutt1,.HSbutt2").mouseout(function(){    
    $(".HSbutt1,.HSbutt2").css("backgroundColor","black");
    $(".HSbutt1,.HSbutt2").animate({borderRadius:"10px"}, 200);
}
);
$(".photo").fancybox();           