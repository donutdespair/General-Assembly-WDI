 $(function(){
   console.log('ready')

   $('#editCreature').on('submit',function(e){
     e.preventDefault()

     id = $(this).attr('data-id')
     species = $(this).children('#species').val()
     family = $(this).children('#family').val()
     habitat = $(this).children('#habitat').val()
     diet = $(this).children('#diet').val()
     planet = $(this).children('#planet').val()

     creature = {id:id,species:species,family:family,habitat:habitat,diet:diet,planet:planet}
     // debugger
     console.log('clicked.')

     $.ajax({
       "url": "http:localhost:8080/creatures/"+id,
       "method": "PUT",
       "data": creature,
       "success": function(data){
         console.log('ajax call was good.')
        // debugger
       }
     })

   })


   $('#createCreature').on('submit',function(e){
     e.preventDefault()

     species = $(this).children('#species').val()
     family = $(this).children('#family').val()
     habitat = $(this).children('#habitat').val()
     diet = $(this).children('#diet').val()
     planet = $(this).children('#planet').val()

     creature = {id:id,species:species,family:family,habitat:habitat,diet:diet,planet:planet}
      //debugger
     $.ajax({
       "url": "http:localhost:8080/creatures",
       "method": "POST",
       "data": creature,
       "success": function(data){
         console.log('ajax call was good.')
         window.location.replace("http:localhost:8080/creatures")
       }
     })
   })

   $('.deleteCreature').on('click',function(e){
     id = $(this).attr('data-id')
     div = $(this).parent() //debugger
     $.ajax({
       "url": "http:localhost:8080/creatures/"+id,
       "method": "DELETE",
       "success": function(data){
         console.log('ajax call was good.')
         $(div).remove();
       }
     })
   })


 })
