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
    title: 'The Goldfinch',
    sweTitle: 'Steglitsan', 
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
    title: 'The Sun Also Rises',
    sweTitle: 'Och solen har sin gång', 
    author: 'Ernest Hemingway',
    female: false,
    translatedBy: 'Olov Jonason',
    year: 1926,
    genre: 'Klassiker',
    pages: 295,
    plot:
      'Och solen har sin gång är romanen om den förlorade generationen, om en krets av rotlösa unga människor i 20-talets Europa. Den amerikanske journalisten Jake och den unga engelskan Brett är som sina vänner smärtsamt övertygade om tillvarons brist på mening. Jakten på starka upplevelser för dem från barernas och erotikens Paris till det solheta Spanien och tjurfäktningens dramatiska final.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: 'Hier',
    sweTitle: 'I går', 
    author: 'Agota Kristof',
    female: true,
    translatedBy: 'Marianne Tufvesson',
    year: 1995,
    genre: 'Skönlitteratur',
    pages: 98,
    plot:
      'Varje dag upprepar Sandor Lester sin ”idiotiska kapplöpning”: kliver på bussen, stämplar in på fabriken. På lördagarna träffar han Yolande, som han inte är särskilt förtjust i. Den lilla tid han har över ägnar han åt att drömma om ett annat liv, en stor författares liv. Och åt att tänka på Line, den perfekta kvinnan. En morgon på bussen är det Line, den riktiga Line, som dyker upp från hans förflutna som landsflykting.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: false
  },
  {
    title: 'Arv og miljø',
    sweTitle: 'Arv och miljö', 
    author: 'Vigdis Hjorth',
    female: true,
    translatedBy: 'Ninni Holmqvist',
    year: 2016,
    genre: 'Autofiktion',
    pages: 453,
    plot:
      '- Att ingen av er någon enda gång har frågat mig om min historia, har jag upplevt och upplever jag som en stor sorg. - Så skriver Berglijot i ett mail till sina systrar, efter det att en häftig diskussion om förskott på ett arv har blossat upp. De är fyra syskon, och föräldrarna har nu meddelat att de två yngsta döttrarna ska särbehandlas och få ärva mer. ',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: false
  },
  {
    title: 'Om bare',
    sweTitle: 'Om bara', 
    author: 'Vigdis Hjorth',
    female: true,
    translatedBy: 'Jens Hjälte',
    year: 2001,
    genre: 'Skönlitteratur',
    pages: 323,
    plot:
      'Dramatikern och småbarnsmamman Ida Heier har mött sitt livs kärlek. Hon har förstått att något ska hända: man kan veta att man kan älska långt innan man möter den man ska älska, tänker hon. Föremålet för hennes passion är den tio år äldre professorn Arnold Busk, också han gift med barn. Han är otillgänglig, men Idas längtan efter honom blir bara starkare.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: false
  },
  {
    title: 'Genanse og verdighet',
    sweTitle: 'Genans och värdighet', 
    author: 'Dag Solstad',
    female: false,
    translatedBy: 'Lars Andersson',
    year: 1994,
    genre: 'Skönlitteratur',
    pages: 182,
    plot:
      'Elias Rukla är en lätt alkoholiserad gymnasielärare i femtioårsåldern. När boken börjar håller han en engagerad föreläsning om Ibsens Vildanden för sin klass. För Rukla är detta en pjäs som ställer livsavgörande aktuella och existentiella frågor. Men från klassen hörs bara en tung suck. Ibsen, vem bryr sig? När lektionen är slut konstaterar Rukla resignerat men utan överraskning att han talat för döva öron.  ',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: false
  },
  {
    title: 'Anna Karenina',
    sweTitle: 'Anna Karenina', 
    author: 'Lev Tolstoj',
    female: false,
    translatedBy: 'Sigurd Agrell',
    year: 1927,
    genre: 'Klassiker',
    pages: 648 + 567,
    plot:
      'När den rebelliska Anna Karenina öppet vänder sitt kärlekslösa äktenskap ryggen, för den äkta passionen med greve Vronskij, utsätter hon sig för samhällets hårda dom och hyckleri.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'To the Lighthouse',
    sweTitle: 'Mot fyren', 
    author: 'Virginia Woolf',
    female: true,
    translatedBy: 'IngaLisa Munck & Sonja Bergvall',
    year: 1927,
    genre: 'Skönlitteratur',
    pages: 206,
    plot:
      'Mrs Ramsay är värdinnan i familjens sommarvilla på ön Skye. Deras lille son James, vars högsta önskan är att åka på utflykt till fyren, slängs mellan hopp och besvikelse när än den ena, än den andra ger sin väderleksrapport för morgondagen. Mr Ramsay, en analytisk professor, är skeptisk. Runt värdparet kretsar bekanta på besök i sommarparadiset, däribland Lily Briscoe, en ung konstnärinna som förevigar människorna runt omkring henne genom sin pensel.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: false
  },
  {
    title: 'Fear of Flying',
    sweTitle: 'Rädd att flyga', 
    author: 'Erica Jong',
    female: true,
    translatedBy: 'Annika Preis',
    year: 1973,
    genre: 'Feministisk',
    pages: 404,
    plot:
      'Isadora Wing är rädd för att flyga. Den där känslan av att tappa fotfästet, att lämna den invanda tryggheten och ge sig hän åt ett nyckfullt öde. Så känner hon det också när hon sätter sig på planet till New York för att åka till en psykoanalytikerkongress i Wien. Och så börjar en svindlande erotisk luftcirkus över Europa, som långt senare slutar på ett äventyrligt hotell i Paris. Då har hennes demoniska älskare Adrian Goodlove lämnat henne och återvänt till det stilla livet i sin familj. Men Isadora har gjort en betydelsefull vinst. Flygskräcken är borta ...', 
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: false
  },
  {
    title: 'On the road',
    sweTitle: 'På väg', 
    author: 'Jack Kerouac',
    female: false,
    translatedBy: 'Andreas Vesterlund',
    year: 1957,
    genre: 'Generationsroman',
    pages: 334,
    plot:
      'En resa från kust till kust med bebop och marijuana, lika cool som den är intensiv - den första beat-romanen. ',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: 'Pride and prejudice',
    sweTitle: 'Stolthet & fördom', 
    author: 'Jane Austen',
    female: true,
    translatedBy: 'Gösta Olzon',
    year: 1813,
    genre: 'Klassiker',
    pages: 345,
    plot:
      ' Kärleken mellan Elisabeth Bennet och Fitzwilliam Darcy är en kamp. Han har sin stolthet, hon har sin krassa blick på världen. Lika tydlig som Jane Austens borgerliga roman är i skildringen av kärleksrelationer som maktmedel, lika mångbottnade och föränderliga är karaktärerna; lika levande är miljöerna och landskapet. ',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: true
  },
  {
    title: 'Madame Bovary',
    sweTitle: 'Madame Bovary', 
    author: 'Gustave Flaubert',
    female: false,
    translatedBy: 'Anders Bondegård',
    year: 1856,
    genre: 'Klassiker',
    pages: 458,
    plot:
      'I berättelsen om Emma Bovarys äktenskap, upprepade otrohet, romanläsning, romantiska drömmar och slutliga tragedi ryms både läsningens himmel och helvete. Läsningen som flykt, som dröm, som bättre version av verkligheten.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: true,
    screened: true
  },
  {
    title: 'Sult',
    sweTitle: 'Svält', 
    author: 'Knut Hamsun',
    female: false,
    translatedBy: 'Harry Blomberg',
    year: 1920,
    genre: 'Roman',
    pages: 184,
    plot:
      'Boken skildrar en namnlös ung mans alltmer desperata ansträngningar med att försöka försörja sig som författare i staden Kristiania. Han är fast i en värld som både är ovetande om och struntar i hans existens. Genom Hamsuns febriga och modernistiska prosa kastas läsaren rakt in i den namnlösa unge mannens inre liv. Utan filter skildras hans febriga vandringar och tilltagande kaos i en oförlåtande stad. Hans jakt efter husrum, växelpengar, mat och kärlek blir steg in i själens mörker; ett gradvis nedstigande i armod, svält och galenskap.',
    image: './books-images/the-great-gatsby.png', 
    haveRead: false,
    screened: false
  },
  {
    title: 'Buddenbrooks : Verfall einer Familie ',
    sweTitle: 'Buddenbrooks', 
    author: 'Thomas Mann',
    female: false,
    translatedBy: 'Ulrika Wallenström',
    year: 1901,
    genre: 'Generationsroman',
    pages: 849,
    plot:
      'Den skildrar en familjs utveckling under fyra generationer, från köpmän till konstnärer. Thomas Mann härstammade själv från en gammal köpmanssläkt i Lübeck och hans roman bygger i stor utsträckning på hans egna upplevelser. Den smärtsamma slitning som han hade känt inom sig mellan faderns trygga borgerlighet och moderns konstnärstemperament speglas i bokens konflikt mellan livskraftiga vardagsmänniskor och ömtåliga konstnärsnaturer.',
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
const searchBar = document.getElementById("search-bar")


let currentSort = null 

const cardColors = [
  "101, 0, 2",   // bordeaux
  "34, 65, 7",   // forrest green
  "3, 71, 50",   // moss green
  "51, 31, 10",   // dark brown
  "102, 61, 20",  // light brown
  "69, 40, 13"    // brown
]

//helper function
const getLastWord = str => str.trim().split(" ").pop()

// Function to show books with filters and sorting
const displayBooks = () => {
  const selectedGenre = genreFilter.value
  const selectedBoolean = booleanFilter.value
  const searchTerm = searchBar.value.toLowerCase()

  const english = englishCheckbox.checked

  bookContainer.innerHTML = ""

  let filteredBooks = books.filter(book => {
  const genreMatch = selectedGenre === "all" || book.genre === selectedGenre
  const booleanMatch = selectedBoolean === "all" || book[selectedBoolean]

  const searchMatch =
    book.title.toLowerCase().includes(searchTerm) ||
    book.sweTitle.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.plot.toLowerCase().includes(searchTerm)

  return genreMatch && booleanMatch && searchMatch
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

    // 🎨 Slumpa en färg
    const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)]

    // 🎨 Gradient från samma färg (mer opak → mindre opak)
    bookCard.style.background = `linear-gradient(
      135deg, 
      rgba(${randomColor}, 0.25), 
      rgba(${randomColor}, 0.45)
    )`

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
searchBar.addEventListener("input", displayBooks)

randomBtn.addEventListener("click", () => {
  const randomBook = books[Math.floor(Math.random() * books.length)]

  bookContainer.innerHTML = ""

  const bookCard = document.createElement("div")
  bookCard.classList.add("book-card", "random-card")                  //style random card!!!!

  // 🎨 Slumpa en färg för random-kortet
  const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)]
  bookCard.style.background = `linear-gradient(
    135deg, 
    rgba(${randomColor}, 0.7), 
    rgba(${randomColor}, 0.4)
  )`

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

