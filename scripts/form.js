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
       const formQuestion = document.getElementById("form-question")
        const questionInput = document.querySelector(".question")
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
        plusBtn.addEventListener("click",addQuestion)
        sendBtn.addEventListener('click', sendData)

        // formQuestion 

        // Function for Adding Question
        let questionsArr = [];
        function addQuestion(){
            let id = Date.now();
            formQuestion.insertAdjacentHTML("beforeend",`<div id=${id} class="questions-list">
            <input type="text" placeholder="Enter Your Question" class="question" onblur="changeQuestion(this,${id})">
            <input type="text" placeholder="Enter Your Answer" class="answer" onblur="changeAnswer(this,${id})">
        </div>`)
            let questionObj = {
                id,
                Question:"",
                Answer:""
            }
            questionsArr.push(questionObj)
        }

        // Function for Input Question //
        function changeQuestion(ele, id) {
            for(let i=0; i <questionsArr.length; i++) {
                if(questionsArr[i].id === id) {
                    questionsArr[i].Question = ele.value;
                }
            }
        }

        // Function for Input Answer //
        function changeAnswer(ele, id) {
            for(let i=0; i <questionsArr.length; i++) {
                if(questionsArr[i].id === id) {
                    questionsArr[i].Answer = ele.value;
                }
            }
        }

        // function for send data //

        function sendData(){
            let options = {
                body:JSON.stringify(questionsArr),
                headers : {
                    "content-type" : "application/json"
                },
                method:'POST',
            };

            fetch("https://aircampushack.onrender.com/forms/senddata",options)
                .then((resolve)=>{
                    alert("Data Send Successfully")
                    window.location.href = "main.html";
                    return resolve.json(); 
                }).catch((error)=>{
                        alert(error);
                })
        }
        