let table = document.querySelector("table")
let p = document.getElementById("error")
let idCard = document.getElementById("id-card")
let company = document.getElementById("company")
let fame = document.getElementById("name")
let bsName = document.getElementById("bs-name")
let idNo = document.getElementById("id-no")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let searchBar = document.getElementById("search-bar")
let searchBtn = document.getElementById("search-btn")
fetch("https://jsonplaceholder.org/users")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        data.forEach((users) => {
            console.log(users)
            let tableData = document.createElement("tr")


            let userID = document.createElement("td")
            userID.textContent = users.id
            tableData.appendChild(userID)

            userID.classList.add("table-data")

            let userFname = document.createElement("td")
            userFname.textContent = users.firstname
            tableData.appendChild(userFname)
            userFname.classList.add("table-data")

            let userLname = document.createElement("td")
            userLname.textContent = users.lastname
            tableData.appendChild(userLname)
            userLname.classList.add("table-data")

            let userBD = document.createElement("td")
            userBD.textContent = users.birthDate
            tableData.appendChild(userBD)
            userBD.classList.add("table-data")

            let userEmail = document.createElement("td")
            userEmail.textContent = users.email
            tableData.appendChild(userEmail)
            userEmail.classList.add("table-data")

            let userPhone = document.createElement("td")
            userPhone.textContent = users.phone
            tableData.appendChild(userPhone)
            userPhone.classList.add("table-data")

            let userWebsite = document.createElement("td")
            userWebsite.textContent = users.website
            tableData.appendChild(userWebsite)
            userWebsite.classList.add("table-data")


            table.appendChild(tableData)

            let fullName = users.firstname + " " + users.lastname;
            searchBtn.addEventListener("click", () => {
                if (searchBar.value === fullName) {
                    searchBar.value = ""
                    table.style.display = "none";
                    idCard.style.display = "block"

                    company.textContent = users.company.name;
                    fame.textContent = fullName;
                    bsName.textContent = users.company.bs
                    idNo.textContent = `Id No   : ${users.id}`
                    phone.textContent = `Phone   : ${users.phone}`
                    email.textContent = `E-Mail  : ${users.email}`
                }
                else {
                    table.textContent = ""
                    let result = document.createElement("h2");
                    result.textContent = "'No user found'"
                    result.classList.add("result")
                    table.appendChild(result)

                }
            })

        })
    }).catch(function (error) {
        p.textContent = error;
        p.style.color = "red"
    })