const nameInput = document.getElementById("name");
const welcome = document.getElementById("welcome");
const userlist = document.getElementById("userlist");

document.getElementById("add").onclick = () => addUser(nameInput.value);
document.getElementById("list").onclick = () => listUsers();

async function addUser(username) {

    try {

        username = username.trim();
        if (username === "") return;

        const index = username.indexOf(" ");    
        const firstName = username.slice(0, index);
        const lastName = username.slice(index + 1);

        const response = await fetch("https://reqres.in/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName
            })
        });
        if (!response.ok)
            throw new Error(`Could not add user {}, status: ${response.status}`);

        const json = await response.json();
        if (json.first_name !== firstName || json.last_name !== lastName)
            throw new Error(`Non matching json response data. Provided name ${username}, response name ${json.first_name} ${json.last_name}`);

        console.log(`Successfully added user ${json.first_name} ${json.last_name}`);
        welcome.textContent = "Welcome " + json.first_name;

    } catch(error) {

        console.error(error.message);

    }

}
async function listUsers() {

    try {

        const response = await fetch("https://reqres.in/api/users");
        if (!response.ok) {

            throw new Error(`Response status: ${response.status}`);

        }

        const json = await response.json();

        for (let i = 1; i <= json.total; i++) {

            const username = await getUser(i);

            const item = document.createElement("li");
            item.innerHTML = username;
            userlist.appendChild(item);

        }

    } catch(error) {

        console.error(error.message);

    }

}

async function getUser(id) {

    try {

        const response = await fetch("https://reqres.in/api/users/" + id);
        if (!response.ok) {

            throw new Error(`Could not get User ${id}, response status: ${response.status}`);

        }

        const json = await response.json();
        return json.data.first_name + " " + json.data.last_name;

    } catch (error) {

        console.error(error.message);

    }

    return "";

}
