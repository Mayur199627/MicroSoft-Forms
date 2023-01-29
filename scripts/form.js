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
        const sendBtn = document.getElementById('send-btn')
        const modal = document.querySelector('.modal-container')
        const crossIcon = document.querySelector('.cross')
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
            let id = Date.now()
            leftContainer.insertAdjacentHTML("beforeend", `<div class="questions-list">
            <div class="question">
                <div class="question-text" style="font-size: 1.2rem;">Question</div>
                <div class="save-question"><input type="text" class="text-feild" name="${id}"></div>
                <div class="question-option">
                    <input type="radio" name="${id}" value=""> True<br>
                    <input type="radio" name="${id}" value=""> False
                </div>
            </div>
        </div>`)
        }

        // Function for Show Modal //
        function showModal(){
            modal.style.display = 'flex'
        }

        // Function for hide Modal //
        function hideModal(){
            modal.style.display = 'none'
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
        sendBtn.addEventListener('click',showModal)
        crossIcon.addEventListener('click',hideModal)
        
        document.addEventListener('click',(e)=>{
            if(e.target.classList.contains('question-text')){
                let targetValue = e.target;
                let targetInput = e.target.nextElementSibling.firstElementChild;
                targetValue.style.display = 'none'
                targetInput.style.display = "flex"
            }


            if(e.target.classList.contains('text-feild')){
                let ele = e.target;
                let eleParent = e.target.parentElement;
                let inputValue = ele.value;
                let inputBox = e.target.parentElement.previousElementSibling;
                if(inputValue !== ""){
                    inputBox.innerHTML = inputValue;
                }
                ele.addEventListener('blur',()=>{
                    eleParent.style.display = "none";
                    inputBox.style.display = "flex";

                })
            }
        })