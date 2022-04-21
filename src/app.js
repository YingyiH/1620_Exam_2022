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
const contact_content = document.querySelector('#display_all_contacts')
for (const contact_info of contactsList){

  if (contact_info.name.includes('major')){

    var contact_card = `
    <div id = ${contact_info.ID}>
      <img src ="img/Motoko.png" alt= 'Selfile'>
      <p>${contact_info.name}</p>
    </div>
    `
  } else {
      var contact_card = `
      <div id = ${contact_info.ID}>
        <img src ="img/${contact_info.name}.png" alt= 'Selfile'>
        <p>${contact_info.name}</p>
      </div>
      `
  }
  
  contact_content.insertAdjacentHTML("afterbegin", contact_card)
} 

console.log(contact_content)
