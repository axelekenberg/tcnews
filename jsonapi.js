fetch('https://app.tcstenungsund.se/jsonapi/node/news')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
                console.log(data.data)
                data.data.forEach(data => {
                    document.getElementById("main-container").innerHTML += data.attributes.body.processed

                });

                 function appendData(data) {
                    var mainContainer = document.getElementById("card6");
                    for (var i = o; i < data.data.length; i++) {
                        var div = document.createElement("div");
                        div.innerHTML = data.data[i].title;
                        mainContainer.appendChild(div);

                }
            }
                
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });