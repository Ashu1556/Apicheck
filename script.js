let datafile1 = fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json");
    let datafile2 = fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json");

    Promise.all([datafile1, datafile2]).then(files=>{
        return Promise.all(files.map(r=> r.json()));
    }).then(([{...datafile1}, {...datafile2}])=>{

        
    
       const ashu = document.getElementsByClassName("show")[0];

       const ashu1 = document.getElementsByClassName("show1")[0];

       const ashu2 = document.getElementsByClassName("show2")[0];

       const ashu3 = document.getElementsByClassName("show3")[0];

       const ashu4 = document.getElementsByClassName("show4")[0];

        datafile1.cafes.forEach((product, index) =>{
            let p = document.createElement("p");
          
            let pText = document.createTextNode(`${product.name}`);
             p.appendChild(pText);

             ashu.appendChild(p);
            

            console.log( product.name);
        });

        

        datafile2.places.forEach((product, index)=>{
          let p = document.createElement("p");
          let pText = document.createTextNode(`${product.locality}`);
          p.appendChild(pText);
          ashu1.appendChild(p);

          let p1 = document.createElement("p");
          let p1Text = document.createTextNode(`${product.postal_code}`);
          p1.appendChild(p1Text);
          ashu2.appendChild(p1);

          let p2 = document.createElement("p");
          let p2Text = document.createTextNode(`${product.lat}`);
          p2.appendChild(p2Text);
          ashu3.appendChild(p2);

          let p3 = document.createElement("p");
          let p3Text = document.createTextNode(`${product.long}`);
          p3.appendChild(p3Text);
          ashu4.appendChild(p3);


            console.log(product.street_no +" "+ product.locality +" "+ product.postal_code +" "+ product.lat);
        })

        

        
        console.log(datafile1.cafes);
        console.log(datafile2.places);
    })