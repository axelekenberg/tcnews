var data = globaldata;

fetch('https://app.tcstenungsund.se/jsonapi/node/news')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                displayArticles(data);
                console.log(data.data)
                data.data.forEach(globaldata => {
                    document.getElementById("text").innerHTML += globaldata.attributes.body.processed
                    document.getElementById("titel").innerHTML += globaldata.attributes.title
                    
                    console.log();

                });

                

                /* function appendData(data) {
                    var mainContainer = document.getElementById("6");
                    for (var i = o; i < data.data.length; i++) {
                        var div = document.createElement("div");
                        div.innerHTML = data.data[i].title;
                        mainContainer.appendChild(div);

                }
            }*/
                    /*function displayArticle(data) {
                        const article = data.data[0];
                        const articleDiv = document.getElementById("titel1");
                        const articleText = article.attributes.body.processed;
                        const articleTitle = article.attributes.title;
                        const heading = document.getElementById("titel1");
                        heading.innerHTML = articleTitle;
                        const text = document.getElementById("text1");
                        text.innerHTML = articleText;
                        articleDiv.appendChild(heading, text);

                        /*const articleText = data.data[0];
                        const articleProcessed = articleText.processed;
                        const text = document.createElement("h1");
                        text.innerHTML = articleProcessed;
                         
                    } */
                    

                   /* function displayArticles(data){
                        for (let i = 0; i < data.length; i++){
                            const article = data.data[i];
                            const articleDiv = document.getElementById("titel" + i);
                            const articleText = article.attributes.body.processed;
                            const articleTitle = article.attributes.title;
                            const heading = document.getElementById("titel" + i);
                            heading.innerHTML = articleTitle;
                            const text = document.getElementById("text" + i);
                            text.innerHTML = articleText;
                            articleDiv.appendChild(heading, text);
                        }
                    } */

                    function displayArticles(globaldata){
                    nameTitel = document.createElement("titel");
                    nameTitel.type = "text";
                    nameTitel.id = "id-titel"; 
                    nameTitel.appendChild(document.createTextNode(globaldata.attributes.title));

                    nameText = document.createElement("text");
                    nameText.type = "text";
                    nameText.id = "id-text";
                    nameText.appendChild(globaldata.attributes.body.processed);

                    kort = document.createElement("kort");
                    kort.appendChild(nameTitel);
                    kort.appendChild(nameText);

                    div = createElement("div");
                    div.id = "id-div";
                    div.appendChild(kort);

                    document.body.appendChild(div);
                    
                    }
                    


                
            })/*
            .catch(function (err) {
                console.log('error: ' + err);
            });*/