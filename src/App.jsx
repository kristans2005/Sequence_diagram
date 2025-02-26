import Slide from './components/Slide'

function App() {
const slides = [
  {
    question: 'Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?',
    content: 'Sequence diagramma ir UML uzvedības modeļa daļa. Tā parāda, kā objekti mijiedarbojas noteiktā scenārijā, attēlojot ziņojumu plūsmu starp tiem.',
    image: ''
  },
  {
    question: 'Kad to izmanto?',
    content: 'Sequence diagrammu izmanto, lai modelētu sistēmas darbību, vizualizējot ziņojumu apmaiņu starp objektiem noteiktā secībā. Tā palīdz saprast un plānot lietotāju un sistēmas komponentu mijiedarbību.',
    image: ''
  },
  {
    question: 'Kādi UML elementi ir šajā diagrammā?',
    content: 'Sequence diagrammā ir aktori, objekti, dzīves līnijas, ziņojumi un aktivitāšu bāri. Ziņojumi tiek attēloti kā bultiņas, kas parāda darbību secību starp objektiem.',
    image: ''
  },
  {
    question: 'Kāds ir piemērs ar skaidrojumu?',
    content: 'Piemēram, scenārijs "Lasītājs apskata bloga ierakstu": Lasītājs pieprasa ierakstu, Blogs nosūta pieprasījumu uz BlogPost, BlogPost atgriež datus Blogam, un Blogs tos parāda lasītājam.',
    image: ''
  },
  {
    question: 'Kā šī diagramma izskatītos projektā Blogs?',
    content: 'Projektā Blogs Sequence diagramma varētu attēlot scenāriju "Autors rediģē bloga ierakstu", kur autors pieprasa rediģēšanu, Blogs nosūta pieprasījumu BlogPost, BlogPost saglabā izmaiņas un atgriež apstiprinājumu.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20231228132950/Synchronus-Message-22.jpg'
  }
];


  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {slides.map((slide, index) => (
        <Slide key={index} image={slide.image} question={slide.question} content={slide.content} slideNumber={index + 1} total={slides.length} />
      ))}
    </main>
  )
}

export default App
