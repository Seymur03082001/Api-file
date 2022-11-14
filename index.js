const tBodyElement = document.querySelector("tbody");

/*fetch("https://northwind.vercel.app/api/products/")
    .then(function (response) {
     return response.json();
      })
    .then(function (data) {
      console.log(data);
     for (let i = 0; i < data.length; i++) {
      const trElement = document.createElement("tr");
      const tdIdElement = document.createElement("td");
      const tdCompanyNameElement = document.createElement("td");
      const tdContactNameElement = document.createElement("td");
      const tdContactTitleElement = document.createElement("td");
      const tdAdressElement = document.createElement("td");
      tdIdElement.textContent = data[i].id;
      tdCompanyNameElement.textContent = data[i].companyname;
      tdContactNameElement.textContent = data[i].contactname;
      tdContactTitleElement.textContent = data[i].contacttitle;
      tdAdressElement.textContent = data[i].adress;
      trElement.append(tdIdElement, tdCompanyNameElement, tdContactNameElement, tdContactTitleElement, tdAdressElement);
      tBodyElement.appendChild(trElement);
    }
      });*/


      axios("https://northwind.vercel.app/api/products/")
      .then(function (response) {
      console.log(response);

  for (let i = 0; i < response.data.length; i++) {
    const trElement = document.createElement("tr");
    const tdIdElement = document.createElement("td");
    const tdCompanyNameElement = document.createElement("td");
    const tdContactNameElement = document.createElement("td");
    const tdContactTitleElement = document.createElement("td");
    const tdAdressElement = document.createElement("td");
    tdIdElement.innerHTML = response.data[i].id;
    tdCompanyNameElement.innerHTML = response.data[i].companyname;
    tdContactNameElement.innerHTML = response.data[i].contactname;
    tdContactTitleElement.innerHTML = response.data[i].contacttitle;
    tdAdressElement.innerHTML = response.data[i].adress;
    trElement.append(tdIdElement, tdCompanyNameElement, tdContactNameElement, tdContactTitleElement, tdAdressElement);
    tBodyElement.appendChild(trElement);
  }
});
