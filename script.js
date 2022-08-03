
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  

  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){


}



function showResults(questions, quizContainer, resultsContainer){

  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');
  
  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;
  
  // for each question...
  for(var i=0; i<questions.length; i++){

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    
    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){
      // add to the number of correct answers
      numCorrect++;
      
      // color the answers green
      answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[i].style.color = 'red';
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}






	
  var myQuestions = [
    {
      question: "Where do you add Javascript in HTML? ",
      answers: {
        a: 'At the end of body',
        b: 'In the head',
        c: 'Using a button element',
        d: 'In the title'
      },
      correctAnswer: 'a'
    },
    {
      question: "What kind of language is Javascript?",
      answers: {
        a: 'doctype',
        b: 'lightweight markup',
        c: 'scripting language',
        d: 'object-oriented'
      },
      correctAnswer: 'd'
    },

    {
      question: "Which is not syntax of Javascript?",
      answers: {
        a: 'doctype',
        b: 'variables',
        c: 'strings',
        d: 'numbers'
      },
      correctAnswer: 'a'
    },
    {
      question: "Which one does not belong to Javascript?",
      answers: {
        a: 'variables',
        b: 'margin',
        c: 'operators',
        d: 'let'
      },
      correctAnswer: 'b '
    },
   
  ];


  

  
 