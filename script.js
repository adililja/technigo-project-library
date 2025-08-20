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
