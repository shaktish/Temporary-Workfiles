<html>
<head>
	<title>closure</title>
</head>
<body>
<script type="text/javascript">

	// create IIFE function for privacy so it doesn't interfer other codes.
	(function () {
		// created Question contructor
		function Question (question, options, answer) {
			this.question = question;
			this.options = options;
			this.answer = answer;
		}
		// adding method to constructor by prototype to display questions and options
		Question.prototype.displayQuestion = function () { 
			console.log(this.question)

			for(var i=0; i <this.options.length; i ++){
				console.log(i + 1 + ' :' + this.options[i]);
			}
		};

		// adding a method to constructor via prototype 
		Question.prototype.correctAnswer = function (ans) { 
			if(ans === this.answer) {
				console.log('Correct Answer');
			} else {
				console.log('Wrong Answer, Try again');
			}
		};


		// adding 3 question by contructor 
		var q1 = new Question ('What\'s ur name?',['Srini','Shakti','Santhosh'], 2);
		var q2 = new Question ('How old are you?',['24','32','20'], 1);
		var q3 = new Question ('Where are u from?',['vellore','karaikal','chennai'], 3);

		// storing questions in an array, so we can randomize it.
		var qArr = [q1,q2,q3];

		// use math.random
		var randomQues = Math.floor(Math.random () * qArr.length);

		// logging questions in console by displayQuestion 
		qArr[randomQues].displayQuestion();

		// asking user to answer using prompt
		var ans = parseInt(prompt('What is the answer?'));

		qArr[randomQues].correctAnswer(ans);
	})();



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/	
	

</script>
</body>
</html>
