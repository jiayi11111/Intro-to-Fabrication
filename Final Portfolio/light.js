toggle = document.querySelectorAll(".toggle")[0];
    console.log(toggle);
    nav = document.querySelectorAll("nav")[0];
    console.log(nav);
    toggle_open_text = 'Menu';
    toggle_close_text = 'Close';
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        
      if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
let project=document.getElementById('projectbackground');

  // document.body.style.backgroundColor = 'white';
// document.body.style.backgroundImage="linear-gradient(to right, #bdc3c7, #2c3e50)"
document.body.style.backgroundImage="linear-gradient(to right, rgba(0,0,0,0.2623643207282913) 35%, rgba(186,186,186,1) 100%)";
//change the scale of blue


;}
  )
       
      } else {
        toggle.innerHTML = toggle_open_text;
        const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {

  document.body.style.background = 'white';
}
  )
       
      }
    }, false);
    
    setTimeout(function(){
        nav.classList.toggle('open');	
    }, 800);



//     console.log("hello")

var client = contentful.createClient({
    space: 'hulqx6ueugr1',
    accessToken: 'MOBR4YZxLLNmpK1kRUykm8DjdpXl76-SGp4MZKF_Ahk',
  });


  client.getEntries().then(entries => {
    // log the title for all the entries that have it
    entries.items.forEach( entry => {
     console.log(entry);
   
      let doctext1=document.getElementById("doctext1");
      let doctext=document.createElement('p');
      doctext.innerHTML=entry.fields.doc1;
      doctext.setAttribute("id", "doctext");
      doctext1.appendChild(doctext);

      let docimg1=document.getElementById("docimg1");
      let docimg=document.createElement('img');
      docimg.src=entry.fields.docimg.fields.file.url;
      docimg.setAttribute("id", "docimg");
      // console.log(entry.fields.docimg.fields.file.url)
      docimg1.appendChild(docimg);


      let onesentence=document.getElementById("onesentence");
      let onesentence1=document.createElement('p');
      onesentence1.setAttribute("id", "onesentence1");
      onesentence1.innerHTML=entry.fields.discrip;
      onesentence.append(onesentence1);
      console.log(entry.fields.discrip);


      let onesentencetext=document.getElementById("onesentencetext");
      let onesentencetext1=document.createElement('p');
      onesentencetext1.setAttribute("id", "onesentencetext1");
      onesentencetext1.innerHTML=entry.fields.discripttext;
      onesentencetext.append(onesentencetext1);

      let draft1= document.getElementById("draft1");
      let draft=document.createElement('img');
      draft.src=entry.fields.sketch[0].fields.file.url;
      draft.setAttribute("id", "draftimg1");
      draft1.append(draft);

      let draft2= document.getElementById("draft2");
      let drafttext2=document.createElement('img');
      drafttext2.src=entry.fields.sketch[1].fields.file.url;
      drafttext2.setAttribute("id", "draftimg2");
      draft2.append(drafttext2);

      let draft3= document.getElementById("draft3");
      let drafttext3=document.createElement('img');
      drafttext3.src=entry.fields.sketch[2].fields.file.url;
      drafttext3.setAttribute("id", "draftimg3");
      draft3.append(drafttext3);
  

      let material= document.getElementById("material");
      let material1=document.createElement('p');
      material1.setAttribute("id", "material1");
      material1.innerHTML=entry.fields.material;      ;
      material.append(material1);


      let materialtext= document.getElementById("materialtext");
      let materialtext1=document.createElement('p');
      materialtext1.setAttribute("id", "materialtext1");
      materialtext1.innerHTML=entry.fields.materialtext;      ;
      materialtext.append(materialtext1);

      let tool= document.getElementById("tool");
      let tool1=document.createElement('p');
      tool1.setAttribute("id", "tool1");
      tool1.innerHTML=entry.fields.tool;      ;
      tool.append(tool1);


      let tooltext= document.getElementById("tooltext");
      let tooltext1=document.createElement('p');
      tooltext1.setAttribute("id", "tooltext1");
      tooltext1.innerHTML=entry.fields.tooltext;      ;
      tooltext.append(tooltext1);

      let process= document.getElementById("process");
      let processtext=document.createElement('p');
      processtext.setAttribute("id", "processtext");
      processtext.innerHTML=entry.fields.process;
      process.append(processtext);

      let pro1= document.getElementById("pro1");
      let protext1=document.createElement('img');
      protext1.src=entry.fields.pro1.fields.file.url;
      protext1.setAttribute("id", "protext1");
      pro1.append(protext1);

      let pro1text= document.getElementById("pro1text");
      let pro1text1=document.createElement('p');
      pro1text1.setAttribute("id", "pro1text1");
      pro1text1.innerHTML=entry.fields.pro1text;
      pro1text.append(pro1text1);

      let pro2= document.getElementById("pro2");
      let protext2=document.createElement('img');
      protext2.src=entry.fields.pro2.fields.file.url;
      protext2.setAttribute("id", "protext2");
      pro2.append(protext2);

      let pro2text= document.getElementById("pro2text");
      let pro2text1=document.createElement('p');
      pro2text1.setAttribute("id", "pro2text1");
      pro2text1.innerHTML=entry.fields.pro2text;
      pro2text.append(pro2text1);


      let pro3= document.getElementById("pro3");
      let protext3=document.createElement('img');
      protext3.src=entry.fields.pro3.fields.file.url;
      protext3.setAttribute("id", "protext3");
      pro3.append(protext3);


      let pro3text= document.getElementById("pro3text");
      let pro3text1=document.createElement('p');
      pro3text1.setAttribute("id", "pro3text1");
      pro3text1.innerHTML=entry.fields.pro3Text;
      pro3text.append(pro3text1);

      let pro4= document.getElementById("pro4");
      let protext4=document.createElement('img');
      protext4.src=entry.fields.pro4.fields.file.url;
      protext4.setAttribute("id", "protext4");
      pro4.append(protext4);

      let pro4text= document.getElementById("pro4text");
      let pro4text1=document.createElement('p');
      pro4text1.setAttribute("id", "pro4text1");
      pro4text1.innerHTML=entry.fields.pro4text;
      pro4text.append(pro4text1);


      let pro5= document.getElementById("pro5");
      let protext5=document.createElement('img');
      protext5.src=entry.fields.pro5.fields.file.url;
      protext5.setAttribute("id", "protext5");
      pro5.append(protext5);

      let pro5text= document.getElementById("pro5text");
      let pro5text1=document.createElement('p');
      pro5text1.setAttribute("id", "pro5text1");
      pro5text1.innerHTML=entry.fields.pro5text;
      pro5text.append(pro5text1);


      let pro6text= document.getElementById("pro6text");
      let pro6text1=document.createElement('p');
      pro6text1.setAttribute("id", "pro6text1");
      pro6text1.innerHTML=entry.fields.pro6text;
      pro6text.append(pro6text1);


   let finalversion= document.getElementById("finalversion");
      let finalversiontext=document.createElement('p');
      finalversiontext.setAttribute("id", "finalversiontext");
      finalversiontext.innerHTML=entry.fields.finalversion;
      finalversion.append(finalversiontext);

      let photo= document.getElementById("photo");
      let phototext=document.createElement('p');
      phototext.setAttribute("id", "phototext");
      phototext.innerHTML=entry.fields.photo;
      photo.append(phototext);

    let photofile1= document.getElementById("photofiles1");
      let photofiletext1=document.createElement('img');
      photofiletext1.src=entry.fields.photofile[0].fields.file.url;
      photofiletext1.setAttribute("id", "photofiletext1");
      photofile1.append(photofiletext1);

    let photofile2= document.getElementById("photofiles2");
      let photofiletext2=document.createElement('img');
      photofiletext2.src=entry.fields.photofile[1].fields.file.url;
      photofiletext2.setAttribute("id", "photofiletext2");
      photofile2.append(photofiletext2);

      let photofile3= document.getElementById("photofiles3");
      let photofiletext3=document.createElement('img');
      photofiletext3.src=entry.fields.photofile[2].fields.file.url;
      photofiletext3.setAttribute("id", "photofiletext3");
      photofile3.append(photofiletext3);

      let videotext= document.getElementById("videotext");
      let videotext1=document.createElement('p');
      videotext1.setAttribute("id", "videotext1");
      videotext1.innerHTML=entry.fields.video;
      videotext.append(videotext1);




      


//         console.log(entry);
//         let name=document.getElementById("projectname");
    
//      let title=document.createElement('h1');
//         title.innerHTML=entry.fields.nameOfTheProject;
//         name.appendChild(title);

//         let description=document.getElementById("projectdescription");
//         let descriptiontext=document.createElement('p');
//         descriptiontext.innerHTML=entry.fields.description;
//         description.appendChild(descriptiontext);

//         let image=document.getElementById("projectimage");
//         let imagetext=document.createElement('img');
//         imagetext.src=entry.fields.photo.fields.file.url;
//         image.appendChild(imagetext);

//         let concept=document.getElementById("projectconcept");
//         let concepttext=document.createElement('p');
//         concepttext.innerHTML=entry.fields.showYourConcept        ;
//         concept.append(concepttext);

//        let image1=document.getElementById("image1");
//         let imagetext1=document.createElement('img');
//         imagetext1.src=entry.fields.image1.fields.file.url;
//         image1.appendChild(imagetext1);
    });
  });
