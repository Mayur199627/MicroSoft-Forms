        // All Variable Declaration //

        const docName = document.querySelector(".form-text");
        const renameDoc = document.querySelector('.rename-input input');
        const questionTitle = document.querySelector('.question-header .form-text')
        const star = document.querySelector('#star svg');
        const questionText = document.getElementById('question')
        const responseText = document.getElementById('response')
        const questionTab = document.querySelector('.question-tab')
        const responseTab = document.querySelector('.response-tab')
        const questionEdit = document.querySelector(".question-text")
        const questionInput = document.querySelector('.save-question input')
        const plusBtn = document.querySelector(".right-main")
        const leftContainer = document.querySelector(".all-questions")
        
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
            if(star.style.backgroundColor == ""){
                star.style.backgroundColor = "yellow";
            }else{
                star.style.backgroundColor = "";
            }
        }

        // Function for display question tab

        function showQuestion(){
            questionTab.style.display = 'flex';
            responseTab.style.display = 'none';
        }

        // Function for display question tab

        function showResponse(){
            questionTab.style.display = 'none';
            responseTab.style.display = 'flex';
        }

        // Function for display question tab

        function editQuestion(){
            questionEdit.style.display = 'none'
            questionInput.style.display = 'flex'
        }

        // Function for display question tab

        function saveQuestion(){
            if(questionInput.value == ""){
                questionEdit.innerHTML = "Question";    
            }else{
                questionEdit.innerHTML = questionInput.value;
                questionEdit.style.display = 'flex';
                questionInput.style.display = 'none';
            }
        }

        // Function to Save data

        function saveAll(event){

            if(!event.target.classList.contains("form-text") && !event.target.classList.contains("question-text") && !event.target.classList.contains("text-feild")){

                questionEdit.style.display = 'flex';
                questionInput.style.display = 'none';
                if(questionInput.value === ""){
                    questionEdit.innerHTML = "Question";    
                }else{
                    questionEdit.innerHTML = questionInput.value;
                    }
            }
        }

        // Function for Adding Question //

        function addQuestions(){
            leftContainer.insertAdjacentHTML("beforeend", `<div class="questions-list">
            <div class="question">
                <div class="question-text" style="font-size: 1.2rem;">Question</div>
                <div class="save-question"><input type="text" class="text-feild"></div>
                <div class="question-option">
                    <input type="radio" name="" value=""> option1<br>
                    <input type="radio" name="" value=""> option2
                </div>
            </div>
        </div>`)
        }


        // All Event Listner
        docName.addEventListener('click',changeName)
        renameDoc.addEventListener('blur',saveName)
        star.addEventListener('click',changeColor)
        questionText.addEventListener('click',showQuestion)
        responseText.addEventListener('click',showResponse)
        questionEdit.addEventListener("click",editQuestion)
        questionInput.addEventListener('blur',saveQuestion)
        document.addEventListener('click',saveAll)
        plusBtn.addEventListener('click',addQuestions)