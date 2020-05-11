$(document).ready(function () {
    
    // ===== BOTONES SUBIR Y BAJAR ===== //
    const btnInit = $("#btn-init");

    btnInit.on('click', function () { 
        
        $(".screen2").css("display", "block");

        const size1 = $("#screen2").offset().top;

        $("html, body").animate({

            scrollTop: size1
        }, 1000);
    });



    const top = $("#top");

    top.on('click', function(){

        $("html, body").animate({

            scrollTop: 0
        }, 1000);
    });
    // ================================ //

    

    // ===== API IMAGEN RANDOM ===== //
    const url = "https://dog.ceo/api/breeds/image/random";

    fetch(url)
    .then(response => response.json())
    .then(data => {

        let element = document.getElementById("box");

        element.innerHTML = `
        
            <img src="${data.message}" alt="" width="400px" height="400px" id="droppable" class="ui-widget-header">
        `;

        const arraystr = data.message.split("/");

        let breeds = document.getElementById("razas");

        breeds.innerHTML = `
        
            <div id="draggable1" class="ui-widget-content">
                <p>african</p>
            </div>
        
            <div id="draggable2" class="ui-widget-content">
                <p>${arraystr[4]}</p>
            </div>
            
            <div id="draggable3" class="ui-widget-content">
                <p>australian</p>
            </div>
        `;

        let modal = document.getElementById("modal");

        modal.innerHTML = `
        
            <div class="content">

                <img src="${data.message}" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa quidem, ullam magnam perferendis porro dolores fugit eius! Animi obcaecati quia, dolorem veritatis aliquam perspiciatis iure consequuntur iusto beatae dolorum quisquam reiciendis minus nulla voluptatum eius assumenda nobis temporibus vel exercitationem, eos eum, est repellat? Unde culpa aut hic praesentium officiis deserunt laudantium velit dolorum est libero doloribus atque odio alias magnam sint dolorem esse, earum consectetur fuga ipsum. Reiciendis ea soluta laboriosam ab possimus nesciunt? Eveniet sunt aut doloribus ea doloremque suscipit excepturi, dolore impedit cupiditate inventore quisquam quaerat ratione, totam neque provident veritatis quasi enim ex cumque laboriosam saepe maxime debitis sequi. Ducimus ullam sint error, aspernatur ad perferendis rem quaerat iure harum tempore adipisci aliquid deleniti veritatis, quasi qui aut modi porro, obcaecati cupiditate? Distinctio fuga voluptatum odio numquam libero nam maxime corrupti, explicabo excepturi repellendus optio ab quod dicta hic aliquid maiores cupiditate ut! Alias amet eius ex libero doloremque non mollitia deleniti dolorem quas perferendis. Repellat expedita nihil possimus officia inventore exercitationem reiciendis voluptatibus quas animi, eaque similique quae odio laudantium! Nostrum reiciendis corporis, est eligendi exercitationem optio quaerat, porro nobis esse tempore alias dolorum laudantium sequi ut voluptatem iste eum, ducimus nemo natus molestias.</p>

            </div>

            <a href="#" id="cerrar-modal">
                <span>X</span>
            </a>
        `;

        // ===== Drag and Drop ===== //
        $( "#draggable1" ).draggable();
        $( "#draggable2" ).draggable();
        $( "#draggable3" ).draggable();

        $( "#droppable" ).droppable({

            accept: "#draggable2",
            classes: {

                "ui-droppable-active": "ui-state-active",
                "ui-droppable-hover": "ui-state-hover"
            },
            drop: function( event, ui ) {

                $("#modal").css("display", "block");
                $("#cerrar-modal").on('click', function(){

                    const size1 = $("#screen2").offset().top;
                    $("html, body").animate({

                        scrollTop: size1
                    }, 1000);
                    
                    $("#modal").css("display", "none");
                    
                });

                $("#droppable").css("cursor", "pointer");
                $("#droppable").on('click', function(){

                    $("#modal").css("display", "block");

                });
            }
        });
        // ========================= //

        console.log(data);
        console.log(arraystr[4]);
    })
    .catch(err => console.log(err));
    // ============== //

    $("#reset").on('click', function(){

        location.reload();
    }) 
});