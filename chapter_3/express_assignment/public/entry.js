/*
Instructions

Write an application that simulates a journal. A journal is essentially a list of entries. Make sure that you can do all of the following things:

Create a journal. When you create it, it should have no entries.
Create an entry. Each entry should have a title, content, and an author.
Add an entry to your journal.
Display all the entries in your journal.
Before you get started, think about what kind of objects you want to create, and what those objects are responsible for.
Once the the appropriate functions have been created and you can add and display your journal entries in the console, create a UI for 
your journal using HTML, CSS, and jQuery. You should be able to view and manipulate the journal from your browser instead of using the console. Try and make your journal look as appealing as possible!
*/

// ATT: Our objects


 var welcome_message = "\n Hello User! \n This is a journal application! \n Please interact with the buttons below to create a journal Where you can input data ";



welcome_user();







        function welcome_user(){ alert(welcome_message); } // display welcome message

                /*
              This will add a given journal entry when the user clicks the button

              LOCATION: MAIN INDEX.HTML

              */
              var add_journal = document.getElementsByClassName("add_entry");
                  
                  $(add_journal).click(function(){
                      console.log("heyyy");
                      alert(" You're pushing my buttons..."); 
                    window.location.replace("overview.html");


                  });



                var get_journal = document.getElementsByClassName("obtain"); // on lookUp.html
                  
                  $(get_journal).click(function(){
                
                    retrieve_entry();

                  });



                    var del_journal = document.getElementsByClassName("delete"); // on lookUp.html
                  
                  $(del_journal).click(function(){
                  delete_entry();

                  });

              /*
              Log button that will take the textArea

              LOCATION: ENTRY.HMTL ( ADD ENTRY FOR JOURNAL)

              */
                  
                  $('#log_button').click(function(){
                      alert(" Adding Journal Entry");
                      add_entry()
                  
                  });


              function add_entry(){    //   add a entry MAX. 3 entries

                var content = $("#mainBox").val();
                var author_info = $("#authorBox").val();
                var title_info = $("#titleBox").val();
                  alert("Saving Content Now To Object! \n" );
            
                      /*   IANS NOTE ****
                     somewhere in your javascript you should define an Entry() constructor, and an array 
                     hold your journal entreis

                     each time you add a journal entry, use jquery to append it to show it on the DOM
                       */
                        
             /*-------------------------------------------------------------------------------
                RE: Our object! I am aware of atleast 3 ways to do this. Given this context I have
                went with the most efficent way? in sheer terms of white-space and code

            ----------------------------------------------------------------------------*/

                     var journal_one =
                        {
                        title: title_info,
                        author: author_info,
                        paragraph: content
                        };

        // TITLE SECTION
        var title_element = document.createElement("H2");        // Create  element
        var title_select = document.createTextNode(journal_one.title);       // Create a text
        title_element .appendChild(title_select);                                // Append the text 
        document.body.appendChild(title_element); 

        // AUTHOR SECTION
        var author_element = document.createElement("H2");        // Create  element
        var author_select = document.createTextNode(journal_one.author);       // Create a text 
        author_element .appendChild(author_select);                                // Append the text 
        document.body.appendChild(author_element); 

        // PARAGRAPH OR TEXT INJECTION
        var para_element = document.createElement("P");        // Create a  element
        var para_select = document.createTextNode(journal_one.paragraph);       // Create a text
        para_element .appendChild(para_select);                                // Append 
        document.body.appendChild(para_element); 

}


           





