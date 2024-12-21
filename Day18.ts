function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
    const regexName = /<([^>]+)>/g;
    const regexNumber = /\+\d+-\d{3}-\d{3}-\d{3}/g;
type user = { name: string; address: string, phone: string };

let users: user[] = []

let usersDesorders = agenda.split("\n").forEach((element)=>{
    let data = element
    let newUser:user = {name: "", phone: "", address:""}
    console.log(element)
    let matchName = element.match(regexName); 
    let matchPhone = element.match(regexNumber); 
    if (matchName){
        let name = matchName[0];
        agenda = data.replace(name, "").trim();
        newUser.name = name;
        console.log(data)
    }
    if (matchPhone){
        let phone = matchPhone[0];
        agenda = data.replace(phone, "").trim();
        newUser.phone = phone;
    }
console.log(data)
    console.log( matchName, matchPhone)
users.push(newUser)



})


 





console.log(users)

    return null
      }
  
      
      const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456'))
// { name: "Juan Perez", address: "Calle Gran Via 12" }

//console.log(findInAgenda(agenda, '600-987'))
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

//console.log(findInAgenda(agenda, '111'))
// null
// Explanation: No results

//console.log(findInAgenda(agenda, '1'))
// null
// Explanation: Too many results


const input = `+34-600-123-456 Calle Gran Via 12 <Juan Perez> Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

// Expresión regular para encontrar números de teléfono y texto dentro de <>
const regex = /(?:\+?\d{1,3}[-\s]?)?\(?\d{1,4}\)?[-\s]?\d{1,4}[-\s]?\d{1,4}|\<[^>]*\>/g;

// Usamos replace para eliminar números de teléfono y el texto dentro de <>
const result = input.replace(regex, '').split(/\s{2,}/) // Se divide por 2 o más espacios consecutivos
  .map(text => text.trim()) // Eliminar espacios adicionales alrededor de cada fragmento
  .filter(Boolean); // Elimina los elementos vacíos

console.log(result);