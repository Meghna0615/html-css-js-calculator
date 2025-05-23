 const result = document.getElementById('result');
    const historyList = document.getElementById('historyList');
    const historyPopup = document.getElementById('historyPopup');
    const equalButton = document.querySelector('.equal');

    function appendValue(value) {
     const operators = ['+', '-', '*', '/', '%','(',')','='];
     const lastChar = result.value.slice(-1);

     // Prevent multiple consecutive operators
      if (operators.includes(value) && operators.includes(lastChar)) {
       alert("You can't enter multiple operators in a row!");
       return; // Block it
      }

     result.value += value;
    }


    function clearDisplay() {
      result.value = '';
    }

    function calculateResult() {
      try {
        const expression = result.value;
        const evaluation = eval(expression);
        result.value = evaluation;
        addToHistory(`${expression} = ${evaluation}`);
      } catch {
        result.value = 'Error';
      }
    }

    function addToHistory(entry) {
      const li = document.createElement('li');
      li.textContent = entry;
      historyList.prepend(li); // Show latest on top
    }

    function toggleHistory() {
      historyPopup.classList.toggle('active');
    }
