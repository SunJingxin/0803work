    
    //native js and zepto.js hybird
      $(".mainUl").tap(function(e){     	
      	// clear before style
      	$(".mainUlLi").each(function(ind,ele){
   	     	ele.className="mainUlLi";
      	})
      	//affirm li
      	var oli1=$(e.target).parent()[0].className;
      	var oli2=$(e.target).parent().parent()[0].className;
        if(oli1=="mainUl"){
         var oli=e.target;
        }else if(oli2=="mainUl"){
          var oli=$(e.target).parent()[0]
        }    
        //add style
      	$(oli).addClass("clickLi");
      	//child option
      	$(".mainUlLi").each(function(ind,ele){
      	//left menu tap event
      	//Li ind represented by clicking    
      	  if(ele.classList.length==2){
      		$(".mainRight").each(function(){
      		  $(this).css("display","none")
      		})
      		$($(".mainRight")[ind]).css("display","block")
      	  }     	  
      	})
      })
      //click children menu
      $(".mainRightLi").tap(function(e){
      	var oP=e.target;
      	if(oP.className!="mainRightLiP1"){
      	  oP=$(e.target).parent()[0];
      	}
      	//realize stretch and shrink
      	$($(oP).parent().children()[1]).toggleClass("mainRightLiP21");
        //realize img rotate
        if(oP.className=="mainRightLiP1"){
        $($(oP).children()[1]).toggleClass("mainRightLiImg") 
         //strut the parent container
         $(".mainR").css("height",$(oP).parent().parent().css("height"))
        }           
      })   
