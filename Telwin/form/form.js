const data = {};
    let id = 1;

    document.getElementById("button").onclick = () => {
      const form = document.getElementById("schoolForm");
      const formData = new FormData(form);

      const entry = {
        name: formData.get("name"),
        location: formData.get("location"),
        isDisabled: document.getElementById("checkbox").checked
      };

      data[id] = entry;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${id}</td>
        <td>${entry.name}</td>
        <td>${entry.location}</td>
        <td>${entry.isDisabled ? "Yes" : "No"}</td>
      `;

      document.getElementById("tableBody").appendChild(row);
      id++;
      form.reset(); 
    };