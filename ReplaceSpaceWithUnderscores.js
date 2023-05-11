<!-- HTML -->
<input type="text" id="107263553" oninput="convertInput()" />
<input type="text" id="107264558" />

<script>
  function convertInput() {
    const inputField = document.getElementById('107263553');
    const outputField = document.getElementById('107264558');
    
    const inputValue = inputField.value;
    const convertedValue = inputValue.replace(/\s+/g, '_'); // Replace spaces with underscores
    
    outputField.value = convertedValue;
  }
</script>
