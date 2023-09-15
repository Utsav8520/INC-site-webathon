if (window.location.pathname === '/login') {
    $("#login-to-account")[0].addEventListener('click', async el => {
        // these are the type of jquery selector as like querySelector
        const email = $("#floatingInput")[0].value;
        const password = $("#floatingPassword")[0].value;
        if (email === '' || password === '') {
            alert('please insert the data carefully');
        } else {
            const sendData = await axios({
                method: 'POST',
                url: '/api/v1/user/login',
                data: {
                    email,
                    password
                }
            })
            console.log(sendData)
            if (sendData.data.status === "success") {
                // alert('logged in');
                window.location.assign("/dashboard");
            } else {
                alert("please try again");
            }
        }
    })
}

if (window.location.pathname === "/Accounts") {
    $("#create-user-account")[0].addEventListener("click", async(el) => {
        // these are the type of jquery selector as like querySelector
        const email = $("#exampleInputEmail1")[0].value;
        const password = $("#exampleInputPassword1")[0].value;
        const firstname = $("#firstname")[0].value;
        const lastname = $("#lastname")[0].value;
        const contactno = $("#contactno")[0].value;
        const role = $("#role")[0].value;
        const faculty = $("#faculty")[0].value;
        const location = $("#location")[0].value;

        if (email === "" || password === "") {
            alert("please insert the data carefully");
        } else {
            const sendData = await axios({
                method: "POST",
                url: "/api/v1/user/signin",
                data: {
                    email,
                    password,
                    firstname,
                    lastname,
                    contactno,
                    role,
                    faculty,
                    location
                },
            });
            if (sendData.data.status === "success") {
                // alert('logged in');
                window.location.reload();
            } else {
                alert("please try again");
            }
        }
    });
}



if (window.location.pathname === "/student-data") {
    $("#search-by-faculty")[0].addEventListener("click", (el) => {
        const searchField = $("#search-field")[0].value;
        // alert(searchField)
        if (searchField.value === "") {
            alert("please enter search field");
        } else {
            window.location.assign(`/student-data/${searchField}`);
        }
    });
}

if (window.location.pathname === "/bills") {

    $("#search-accounts")[0].addEventListener("click", async(el) => {
        const email = $("#exampleInputEmail1")[0].value;
        const studentCode = $("#role")[0].value;
        const createDOM = $("#createDOM")[0].value;


        const sendDFata = await axios({
            metho: 'POST',
            url: '/api/v1/userController/updateInformation',
            data: {
                email,
                studentCode
            }
        })

        // alert(searchField)
        if (sendDFata.data.status === "success") {
            // create a dom element in a parent noed
            createDOM.parentElement.innerHTML = `HTMK CODE WILL BE HERE`;
        } else {
            alert('PLEASE ENTER THE DATA')
        }
    });
}