        // All Variable Declaration //

        const docName = document.querySelector(".form-text");
        const renameDoc = document.querySelector('.rename-input input');
        const questionTitle = document.querySelector('.question-header .form-text')
        const star = document.querySelector('#star svg');
        const questionText = document.getElementById('question')
        const responseText = document.getElementById('response')
        const questionTab = document.querySelector('.question-tab')
        const responseTab = document.querySelector('.response-tab')
        const plusBtn = document.querySelector(".right-main")
        const sendBtn = document.getElementById('send-btn')
       
       
        //Function For Edit Name Of Document //

        function changeName(){
            docName.style.display = 'none'
            renameDoc.style.display = 'flex'
        }

        function saveName(){
            docName.style.display = 'flex'
            renameDoc.style.display = 'none'
            if(renameDoc.value === ""){
                docName.innerHTML = "untitled form";
                questionTitle.innerHTML = "untitled form";
            }else{
                docName.innerHTML = renameDoc.value;
                questionTitle.innerHTML = renameDoc.value;
            }
        }

        // Function for change color of star //

        function changeColor(){
            if(star.classList.contains('stared')){
                star.removeAttribute('class','stared')
            }else{
                star.setAttribute('class','stared')
            }
        }

        // Function for display question tab

        function showQuestion(){
            responseText.removeAttribute('class','underlined');
            if(!questionText.classList.contains("underlined")){
                questionText.setAttribute('class','underlined')
            }
            questionTab.style.display = 'flex';
            responseTab.style.display = 'none';
        }

        // Function for display Response tab

        function showResponse(){
            questionText.removeAttribute('class','underlined');
            if(!responseText.classList.contains('underlined')){
                responseText.setAttribute('class','underlined')
            }
            questionTab.style.display = 'none';
            responseTab.style.display = 'flex';
        }

        // All Event Listner
        docName.addEventListener('click',changeName)
        renameDoc.addEventListener('blur',saveName)
        star.addEventListener('click',changeColor)
        questionText.addEventListener('click',showQuestion)
        responseText.addEventListener('click',showResponse)

        // formQuestion 

        const form = document.addEventListener("submit",()=>{
            console.log("hello")
        })