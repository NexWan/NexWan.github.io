new fullpage("#fullpage", {
    sectionsColor: ['#32a852', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
    anchors: ["section1", "section2", "section3"],
    controlArrows: false,
    navigation: true,
    slidesNavigation: true,
    menu: '#header'
  });

  var toggle = ['link1','link2','link3']

  for (let index = 0; index < toggle.length; index++) {
        console.log(`'${toggle[index]}'`);
        let element = document.getElementById(`${toggle[index]}`)
        console.log(element);
        element.addEventListener('click', ()=>{
            var elementId = element.id
            console.log(elementId);
            switchTab(elementId);
        })
  }

  function switchTab(id){
    if(document.getElementById(id).classList.contains("active")) return

    document.querySelector('li.active').classList.remove('active')
    document.getElementById(id).parentNode.classList.add('active')
  }