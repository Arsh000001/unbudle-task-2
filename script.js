document.addEventListener('DOMContentLoaded', function () {
    const chocolatesContainer = document.getElementById('chocolates-container');
    const totalPriceElement = document.getElementById('total-price');
    let totalItems = 0;
    let totalPrice = 0.00;
    const chocolateOptions = [
      { id: 1, name: 'Milk Chocolate', price: 2.50 },
      { id: 2, name: 'Dark Chocolate', price: 3.00 },
      { id: 3, name: 'White Chocolate', price: 2.75 },
    
    ];
    chocolateOptions.forEach(chocolate => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `chocolate-${chocolate.id}`;
      checkbox.addEventListener('change', () => updateTotal());
  
      const label = document.createElement('label');
      label.htmlFor = `chocolate-${chocolate.id}`;
      label.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
  
      chocolatesContainer.appendChild(checkbox);
      chocolatesContainer.appendChild(label);
      chocolatesContainer.appendChild(document.createElement('br'));
    });
    function updateTotal() {
      totalItems = 0;
      totalPrice = 0.00;
  
      chocolateOptions.forEach(chocolate => {
        const checkbox = document.getElementById(`chocolate-${chocolate.id}`);
        if (checkbox.checked) {
          totalItems++;
          totalPrice += chocolate.price;
        }
      });
      if (totalItems > 8) {
        alert('You can select a maximum of 8 chocolates.');
        totalItems = 8;
        totalPrice = chocolateOptions.reduce((sum, chocolate) => {
          const checkbox = document.getElementById(`chocolate-${chocolate.id}`);
          if (checkbox.checked) {
            return sum + chocolate.price;
          }
          return sum;
        }, 0);
      }
  
      totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    }
  });
  