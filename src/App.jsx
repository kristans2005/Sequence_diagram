import Slide from './components/Slide'

function App() {
const slides = [
  {
    question: 'Kas tā ir un vai tā ir struktūras vai uzvedības modeļa daļa?',
    content: 'Tā ir UML diagramma, kas var būt vai nu struktūras (piemēram, klases diagramma), vai uzvedības modeļa daļa (piemēram, aktivitāšu diagramma).',
  },
  {
    question: 'Kad to izmanto?',
    content: 'To izmanto, lai vizualizētu programmatūras sistēmu struktūru vai uzvedību, palīdzot izstrādātājiem un analītiķiem saprast un plānot sistēmas darbību.',
  },
  {
    question: 'Kādi UML elementi ir šajā diagrammā?',
    content: 'UML diagramma var saturēt elementus, piemēram, klases, objektus, attiecības, darbības, aktorus, ziņojumus un notikumus, atkarībā no diagrammas veida.',
  },
  {
    question: 'Kāds ir piemērs ar skaidrojumu?',
    content: 'Piemēram, klases diagrammā Blog varētu būt klases: Blog, BlogPost, Author, Reader. BlogPost satur nosaukumu, pamattekstu un izveides datumu, savukārt Author var dzēst un rediģēt ierakstus.',
  },
  {
    question: 'Kā šī diagramma izskatītos projektā Blogs?',
    content: 'Projektā Blogs varētu būt klases diagramma ar klasēm Blog, BlogPost, Author un Reader. Attiecības starp tām: Blog satur vairākus BlogPost, Author rada un rediģē BlogPost, bet Reader var tikai skatīt.',
  }
];

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {slides.map((slide, index) => (
        <Slide key={index} question={slide.question} content={slide.content} slideNumber={index + 1} total={slides.length} />
      ))}
    </main>
  )
}

export default App
