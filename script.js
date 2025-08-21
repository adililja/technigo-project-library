/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure to create
some properties that is possible to filter and sort.

Remember to remove code you don't need.
*/

const books = [
  {
    title: 'The Great Gatsby',
    sweTitle: 'Den store Gatsby', 
    author: 'F. Scott Fitzgerald',
    female: false,
    translatedBy: 'Gösta Olzon',
    year: 1925,
    genre: 'Klassiker',
    pages: 211,
    plot:
      'Det är sommaren 1922 och Nick Carraway flyttar till ett yrvaket New York för att göra karriär. I West Egg på Long Island hyr han en villa intill ett av öns mest praktfulla hus. Ett sagolikt palats under vildvuxen murgröna. Från dess blå trädgård hörs musik nätterna igenom och stadens societet kommer och går i en aldrig sinande ström. Festerna är magnifika, de är omtalade, oändliga, men ingen tyckts veta vem mannen bakom dem egentligen är.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: 'The God of small things',
    sweTitle: 'De små tingens Gud', 
    author: 'Arundhati Roy',
    female: true,
    translatedBy: 'Gunilla Lundborg',
    year: 1997,
    genre: 'Skönlitteratur',
    pages: 331,
    plot:
      'Alla sinnen vidöppna? Den här romanen förväntar sig det. Här forsar känslor, dofter, smaker, färger, tankar fram. Kärlek, tvillingars symbios, klasskillnader och politik gjuts samman i en bred familjekrönika, formad med sällsynt kraft och poesi. En övermogen mango på väg att spricka.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: false
  },
  {
    title: 'The Brothers Karamazov',
    sweTitle: 'Bröderna Karamazov', 
    author: 'Fjodor Dostojevskij',
    female: false,
    translatedBy: 'Staffan Dahl',
    year: 1879,
    genre: 'Klassiker',
    pages: 1134,
    plot:
      'Fjodor Karamazov är mördad. Godsägaren och fadern till tre - eller egentligen fyra - söner, var en hänsynslös patriark och saknade inte fiender. En av sönerna misstänks för mordet. Men Dmitrij har väl ändå inte haft ihjäl sin egen far?',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'The Catcher in the Rye',
    sweTitle: 'Räddaren i nöden', 
    author: 'J. D. Salinger',
    female: false,
    translatedBy: 'Klas Östergren',
    year: 1951,
    genre: 'Klassiker',
    pages: 201,
    plot:
      'Holden Caufield är 16 år och tycker livet är för jävligt, men ibland också så vackert att man kan dö. Han har just blivit relegerad från skolan och ska möta sina föräldrar i New York. Istället dyker han in i Manhattans storstadsdjungel för att under några hektiska dygn leva som en vuxen. Han hinner gå på nattklubbar, möta före detta flickvänner, misslyckas kapitalt med ett hotelläventyr med en call girl innan familjen obevekligt åter sluter sig kring honom.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: 'Jerusalem',
    sweTitle: 'Jerusalem', 
    author: 'Selma Lagerlöf',
    female: true,
    translatedBy: '-',
    year: 1902,
    genre: 'Klassiker',
    pages: 500,
    plot:
      'Jerusalem är berättelsen om en stark väckelsevåg som delar en socken i Dalarna - en handfull familjer följer kallelsen och beger sig till det heliga landet medan andra väljer att bli kvar på sina gårdar. Med starka färger och i dramatiska konflikter gestaltar Selma Lagerlöf här de teman som går djupast i hennes författarskap: trons makt och kärlekens förunderliga vägar.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: false
  },
  {
    title: 'Tender is the night',
    sweTitle: 'Natten är ljuv', 
    author: 'F. Scott Fitzgerald',
    female: false,
    translatedBy: 'Olof Zachrisson Rothlin',
    year: 1934,
    genre: 'Skönlitteratur',
    pages: 432,
    plot:
      'Den utspelar sig på franska rivieran under 1920-talet där Dick och Nicole Diver lever ett glamoröst och spännande överklassliv tillsammans med andra rika amerikaner. I paret Divers fantastiska villa går konstnärer och andra excentriker in och ut, däribland den vackra artonåriga skådespelerskan Rosemary Hoyt. När hon får för sig att förföra Dick brister den ömtåliga struktur som håller ihop Dicks äktenskap med Nicole, och mörka hemligheter avslöjas.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'The Satanic Verses',
    sweTitle: 'Satansverserna', 
    author: 'Salman Rushdie',
    female: false,
    translatedBy: 'Thomas Preis',
    year: 1988,
    genre: 'Skönlitteratur',
    pages: 549,
    plot:
      'Gibril Farishta är den indiska filmindustrins mest skandalomsusade stjärna. Saladin Chamcha är en berömd röstimitatör. Tillsammans sitter de på ett flygplan på väg till England när planet plötsligt kapas, sprängs och störtar. Som ett mirakel överlever de båda ett fritt fall från tiotusen meters höjd, och knappt har de stigit iland på den engelska kusten förrän de förvandlas till änglar - en god och en ond. ',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'In cold blood',
    sweTitle: 'Med kallt blod', 
    author: 'Truman Capote',
    female: false,
    translatedBy: 'Olov Jonason',
    year: 1965,
    genre: 'True crime',
    pages: 471,
    plot:
      '1959 mördas den förmögne farmaren Herb Clutter och hans familj på Clutters gård i Kansas. Den 30 december arresteras de nyligen frigivna straffångarna Dick Hickock och Perry Smith för mordet. Drygt fem år senare hängs de. Dessa data markerar riktpunkterna i ett massmord som framstår som lika oundvikligt som meningslöst. Med kallt blod växer från en skildring av individuella öden till en bild av skoningslösa sociala mekanismer i det amerikanska samhället.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: false
  },
  {
    title: 'Handmaidens tale',
    sweTitle: 'Tjänarinnans berättelse', 
    author: 'Margaret Atwood',
    female: true,
    translatedBy: 'Maria Ekman',
    year: 1985,
    genre: 'Dystopi',
    pages: 349,
    plot:
      'I kampen mot sjunkande födelsetal rekryteras kvinnor i fruktsam ålder och utnyttjas hämningslöst som Tjänarinnor när de befruktas mot sin vilja av härskarklassens män, Anförarna. Offred är en Tjänarinna som lever under strikt övervakning, men som drömmer om att ta sig bortom Muren och bli fri igen.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: '1984',
    sweTitle: '1984', 
    author: 'George Orwell',
    female: false,
    translatedBy: 'Thomas Warburton',
    year: 1948,
    genre: 'Dystopi',
    pages: 283,
    plot:
      'Winston Smith arbetar på Sanningsministeriet med att ändra historien och därmed visa att Partiet och dess ledare alltid haft rätt, och alltid kommer att ha det. Men i hans enformiga tillvaro väcks en längtan efter något annat, ett upproriskt frö som i sig är nog för att leda till hans undergång.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: 'Animal Farm',
    sweTitle: 'Djurfarmen', 
    author: 'George Orwell',
    female: false,
    translatedBy: 'Nils Holmberg',
    year: 1945,
    genre: 'Klassiker',
    pages: 127,
    plot:
      'Djuren på Herrgården har fått nog av människornas övergrepp. De gör uppror och grundar en ny filosofi som de kallar animalismen. De sjunger sin egen kampsång, O, Englands djur, och arbetar och trivs med sin nya tillvaro. Men smygande, nästan omärkligt, förändras deras förhållanden. En av de ledande grisarna, Napoleon, utbildar alltmer en sann diktators egenskaper.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Parade',
    sweTitle: 'Parad', 
    author: 'Rachel Cusk',
    female: true,
    translatedBy: 'Niclas Hval',
    year: 2024,
    genre: 'Skönlitteratur',
    pages: 164,
    plot:
      'Mitt i livet börjar en konstnär att måla bilder som är upp och ner. En del bilder föreställer hans fru i ett ofördelaktigt ljus. Tavlorna blir en stor succé. Så inleds Parad, som i fyra sammanlänkade berättelser visar upp en rad människoöden som alla befinner sig i påtaglig förvandling.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: false
  },
  {
    title: 'Steglitsan',
    sweTitle: 'The Goldfinch', 
    author: 'Donna Tartt',
    female: true,
    translatedBy: 'Rose-Marie Nielsen',
    year: 2013,
    genre: 'Skönlitteratur',
    pages: 781,
    plot:
      'En ung pojke i New York City, Theo Decker, överlever mirakulöst en olycka som tar hans mammas liv. Ensam och sviken av sin pappa flyttar han in hos en väns familj, inom sig kämpar han med att finna en mening i sitt nya liv. Under åren som följer blir han uppslukad av en av de få saker som påminner honom om hans mamma: en liten, mystiskt fascinerande målning.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'American Psycho',
    sweTitle: 'American Psycho', 
    author: 'Bret Easton Ellis',
    female: false,
    translatedBy: 'Einar Heckscher',
    year: 1991,
    genre: 'Thriller',
    pages: 412,
    plot:
      'Patrick Bateman är ung, snygg, välutbildad och framgångsrik. Han rör sig med arrogant självklarhet bland bankpalats och lyxkrogar i 1980-talets New York. Men status och rikedom är inte nog. All världens njutningar finns till hands, men det räcker inte. På nätterna mördar han, stympar och förnedrar.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Lolita',
    sweTitle: 'Lolita', 
    author: 'Vladimir Nabokov',
    female: false,
    translatedBy: 'Aris Fioretos',
    year: 1955,
    genre: 'Klassiker',
    pages: 453,
    plot:
      'Vladimir Nabokovs Lolita är en monstruös roman, totalitär i sin sexism, men också en vild satir och fars, flödande av lekar med genrer som bekännelseroman, romantisk skräckberättelse med dubbelgångarmotiv, dektivroman med flera.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  }
]

const bookContainer = document.getElementById("book-container")
const genreFilter = document.getElementById("genre-filter")
const booleanFilter = document.getElementById("boolean-filter")
const englishCheckbox = document.getElementById("english-version")
const sortAuthorBtn = document.getElementById("sort-author")
const sortYearBtn = document.getElementById("sort-year")
const sortPagesBtn = document.getElementById("sort-pages")
const randomBtn = document.getElementById("random-book-btn")   

let currentSort = null 

//helper function
const getLastWord = str => str.trim().split(" ").pop()

// Function to show books with filters and sorting
const displayBooks = () => {
  const selectedGenre = genreFilter.value
  const selectedBoolean = booleanFilter.value
  const english = englishCheckbox.checked

  bookContainer.innerHTML = ""

  let filteredBooks = books.filter(book => {
    const genreMatch = selectedGenre === "all" || book.genre === selectedGenre
    const booleanMatch = selectedBoolean === "all" || book[selectedBoolean]
    return genreMatch && booleanMatch
  })

  if (currentSort === "author") {
    filteredBooks.sort((a, b) =>
      getLastWord(a.author).localeCompare(getLastWord(b.author))
    )
  } else if (currentSort === "year") {
    filteredBooks.sort((a, b) => a.year - b.year)
    filteredBooks.reverse()
  } else if (currentSort === "pages") {
    filteredBooks.sort((a, b) => a.pages - b.pages)
  }

  filteredBooks.forEach(book => {
    const bookCard = document.createElement("div")
    bookCard.classList.add("book-card")

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h2>${english ? book.title : book.sweTitle}</h2>
      <h3>${book.author}</h3>
      ${english ? "" : `<p><i>Övers. av ${book.translatedBy}</i></p>`}
      <h4>${book.year}</h4>
      ${english ? "" : `<p>${book.plot}</p>`}
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Sidor:</strong> ${book.pages}</p>
    `
    bookContainer.appendChild(bookCard)
  })
}

// Update events
genreFilter.addEventListener("change", displayBooks)
booleanFilter.addEventListener("change", displayBooks)
englishCheckbox.addEventListener("change", displayBooks)
sortAuthorBtn.addEventListener("click", () => { currentSort = "author"; displayBooks() })
sortYearBtn.addEventListener("click", () => { currentSort = "year"; displayBooks() })
sortPagesBtn.addEventListener("click", () => { currentSort = "pages"; displayBooks() })

randomBtn.addEventListener("click", () => {
  const randomBook = books[Math.floor(Math.random() * books.length)]

  bookContainer.innerHTML = ""

  const bookCard = document.createElement("div")
  bookCard.classList.add("book-card")                  //will this be changed for later styling?! or add another class??

  bookCard.innerHTML = `
    <img src="${randomBook.image}" alt="${randomBook.title}">
    <h2>${randomBook.sweTitle}</h2>
    <h3>${randomBook.author}</h3>
    <p><i>Övers. av ${randomBook.translatedBy}</i></p>
    <h4>${randomBook.year}</h4>
    <p>${randomBook.plot}</p>
    <p><strong>Genre:</strong> ${randomBook.genre}</p>
    <p><strong>Sidor:</strong> ${randomBook.pages}</p>
  `
  bookContainer.appendChild(bookCard)
})

// Show books on page load
displayBooks()

