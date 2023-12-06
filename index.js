var obj = {};
        var flag = true;

        function update() {
            var name = document.getElementById("name").value
            var age = document.getElementById("age").value
            var gender = document.querySelector("input[name='gender']:checked").value
            var course = document.getElementById("course").value
            var email = document.getElementById("email").value

            if(name == ""){alert("Enter the name"); flag = false}
            if(age == ""){alert("Enter the age"); flag = false}
            if(gender == null){alert("Enter the gender"); flag = false}
            if(course == null){alert("Enter the course"); flag = false}




            if(flag == true){
                var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

                var newRow = table.insertRow();
                var cell_name = newRow.insertCell(0);
                var cell_age = newRow.insertCell(1);
                var cell_gender = newRow.insertCell(2);
                var cell_course = newRow.insertCell(3);
                var cell_email = newRow.insertCell(4);
                var cell_option = newRow.insertCell(5);

                cell_name.innerHTML = name;
                cell_age.innerHTML = age;
                cell_gender.innerHTML = gender;
                cell_course.innerHTML = course;
                cell_email.innerHTML = email;
                cell_option.innerHTML = '<button title="delete" onclick="delete_entry(event)" class="btn btn-warning" type="button">Delete</button>'

            }

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.querySelector("input[name='gender']:checked").value = "";
            document.getElementById("course").value = "";
            document.getElementById("email").value = "";
            document.querySelectorAll('input[name="gender"]').forEach(function(radio) {
            radio.checked = false;
            });


        }

        function delete_entry(event) {
            console.log(event.target.parentElement.parentElement.remove())
        }