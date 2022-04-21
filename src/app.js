// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here
const contactContent = document.querySelector('#display_all_contacts')
const singleContactPage = document.querySelector('#display_single_contact')

function createCard(){
  for (const contactInfo of contactsList){

    if (contactInfo.name.includes('major')){
  
      var contactCard = `
      <div id = ${contactInfo.ID}>
        <img src ="img/Motoko.png" alt= 'Selfile'>
        <p>${contactInfo.name}</p>
      </div>
      `
    } else {
        var contactCard = `
        <div id = ${contactInfo.ID}>
          <img src ="img/${contactInfo.name}.png" alt= 'Selfile'>
          <p>${contactInfo.name}</p>
        </div>
        `
    }
    contactContent.insertAdjacentHTML("afterbegin", contactCard)
    createSingleCard()
    
    function createSingleCard(){
      contactContent.style.display = 'none'

      btnContact = document.querySelector(contactCard)
      btnContact.addEventListener("click",createPage)

      const contactCard = `
        <section id = ${contactInfo.ID}>
          <img src ="img/${contactInfo.name}.png" alt= 'Selfile'>
          <div id = ${contactInfo.name}>
            <p>${contactInfo.name}</p>
            <p>${contactInfo.phone}</p>
            <p>${contactInfo.email}</p>
          </div>
          <button id= 'close_contact'>close</button>
        </section>
        `
      function createPage(){
        singleContactPage.insertAdjacentHTML("afterbegin", contactCard)

        btnClose = document.querySelector(button)
        btnClose.addEventListener("click",evt => {
          contactRemove(evt)
        })
      }
    }
  

    function contactRemove(evt){
      removeFirstChild(evt)
    }
  } 
}
createCard()








