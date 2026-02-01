import { ServiceContent } from './types'

export const content: ServiceContent = {
  it: {
    slug: "endodonzia",
    title: "Endodonzia",
    description: "Terapie canalari specialistiche con tecnologie digitali avanzate.",
    features: ["Devitalizzazioni", "Ritrattamenti", "Microscopia operatoria"],
    category: "dental",

    whatIs: "L'endodonzia è la branca dell'odontoiatria che si occupa della diagnosi e del trattamento delle patologie della polpa dentale e dei tessuti periradicolari. Attraverso terapie canalari specialistiche, salviamo denti gravemente compromessi da carie profonde, traumi o infezioni, evitando l'estrazione. Utilizziamo tecnologie digitali avanzate, microscopia operatoria e strumenti di ultima generazione per garantire precisione millimetrica e massimi tassi di successo. L'obiettivo è preservare il dente naturale, mantenendo funzionalità ed estetica.",

    benefits: [
      "Salvataggio di denti altrimenti destinati all'estrazione",
      "Eliminazione completa del dolore e dell'infezione",
      "Preservazione del dente naturale",
      "Massima precisione grazie alla microscopia operatoria",
      "Riduzione significativa del rischio di complicanze",
      "Mantenimento della funzione masticatoria naturale",
      "Evita la necessità di impianti o protesi"
    ],

    process: [
      {
        title: "Diagnosi accurata",
        description: "Esame clinico completo e radiografie digitali per valutare l'estensione del danno e pianificare il trattamento ottimale"
      },
      {
        title: "Anestesia e isolamento",
        description: "Anestesia locale per comfort totale e applicazione della diga di gomma per un campo operatorio sterile e asciutto"
      },
      {
        title: "Terapia canalare",
        description: "Rimozione della polpa infetta, disinfezione completa dei canali radicolari con microscopia operatoria per massima precisione"
      },
      {
        title: "Otturazione canalare",
        description: "Sigillatura tridimensionale dei canali con materiali biocompatibili e ricostruzione finale del dente"
      }
    ],

    aftercare: [
      "Evitare masticazione sul dente trattato per 24-48 ore",
      "Assumere antidolorifici se necessario secondo prescrizione",
      "Mantenere un'igiene orale accurata",
      "Evitare cibi duri fino alla ricostruzione definitiva",
      "Segnalare immediatamente dolore intenso o gonfiore",
      "Programmare il completamento con corona protesica se consigliato",
      "Controlli periodici per verificare la guarigione"
    ],

    duration: {
      session: "60-90 minuti",
      results: "Permanenti",
      recovery: "2-7 giorni"
    },

    suitableFor: [
      "Pazienti con carie profonde che hanno raggiunto la polpa",
      "Denti con infezioni o ascessi",
      "Traumi dentali con esposizione pulpare",
      "Dolore dentale intenso e persistente",
      "Chi desidera salvare il dente naturale",
      "Necessità di ritrattamento di precedenti devitalizzazioni"
    ],

    notSuitableFor: [
      "Denti con fratture verticali irrecuperabili",
      "Perdita ossea molto severa",
      "Denti con canali radicolari non trattabili",
      "Condizioni mediche che controindicano la procedura"
    ],

    faqs: [
      {
        question: "La devitalizzazione è dolorosa?",
        answer: "No, il trattamento viene eseguito in anestesia locale, quindi è completamente indolore. Alcuni pazienti possono avvertire sensibilità nei giorni successivi, gestibile con comuni antidolorifici."
      },
      {
        question: "Quanto dura un dente devitalizzato?",
        answer: "Con la corretta ricostruzione protesica (corona) e una buona igiene orale, un dente devitalizzato può durare tutta la vita. È fondamentale proteggere il dente con una corona per evitare fratture."
      },
      {
        question: "Quante sedute sono necessarie?",
        answer: "Nella maggior parte dei casi, il trattamento può essere completato in 1-2 sedute. Casi complessi o ritrattamenti possono richiedere sedute aggiuntive."
      },
      {
        question: "Il dente devitalizzato si scurisce?",
        answer: "Con le moderne tecniche e materiali, questo rischio è minimizzato. In caso di scurimento, esistono tecniche di sbiancamento interno per ripristinare il colore."
      },
      {
        question: "È meglio della estrazione?",
        answer: "Assolutamente sì. Preservare il dente naturale è sempre preferibile, mantenendo la funzione masticatoria naturale ed evitando la necessità di impianti o ponti."
      }
    ],

    images: {
      main: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
        "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80",
        "https://images.unsplash.com/photo-1606811956291-c6a86d6d2ee0?w=1200&q=80"
      ]
    }
  },
  en: {
    slug: "endodonzia",
    title: "Endodontics",
    description: "Specialized canal therapies with advanced digital technologies.",
    features: ["Root canals", "Retreatments", "Operative microscopy"],
    category: "dental",

    whatIs: "Endodontics is the branch of dentistry that deals with the diagnosis and treatment of dental pulp and periradicular tissue pathologies. Through specialized root canal therapies, we save teeth severely compromised by deep cavities, trauma, or infections, avoiding extraction. We use advanced digital technologies, operative microscopy, and state-of-the-art instruments to ensure millimetric precision and maximum success rates. The goal is to preserve the natural tooth, maintaining functionality and aesthetics.",

    benefits: [
      "Saving teeth otherwise destined for extraction",
      "Complete elimination of pain and infection",
      "Preservation of natural tooth",
      "Maximum precision thanks to operative microscopy",
      "Significant reduction of complication risk",
      "Maintenance of natural chewing function",
      "Avoids need for implants or prosthetics"
    ],

    process: [
      {
        title: "Accurate diagnosis",
        description: "Complete clinical examination and digital radiographs to assess damage extent and plan optimal treatment"
      },
      {
        title: "Anesthesia and isolation",
        description: "Local anesthesia for total comfort and rubber dam application for a sterile and dry operating field"
      },
      {
        title: "Root canal therapy",
        description: "Removal of infected pulp, complete disinfection of root canals with operative microscopy for maximum precision"
      },
      {
        title: "Canal filling",
        description: "Three-dimensional sealing of canals with biocompatible materials and final tooth reconstruction"
      }
    ],

    aftercare: [
      "Avoid chewing on treated tooth for 24-48 hours",
      "Take painkillers if necessary as prescribed",
      "Maintain careful oral hygiene",
      "Avoid hard foods until definitive reconstruction",
      "Report intense pain or swelling immediately",
      "Schedule completion with prosthetic crown if recommended",
      "Periodic checks to verify healing"
    ],

    duration: {
      session: "60-90 minutes",
      results: "Permanent",
      recovery: "2-7 days"
    },

    suitableFor: [
      "Patients with deep cavities that have reached the pulp",
      "Teeth with infections or abscesses",
      "Dental trauma with pulp exposure",
      "Intense and persistent tooth pain",
      "Those wishing to save the natural tooth",
      "Need for retreatment of previous root canals"
    ],

    notSuitableFor: [
      "Teeth with irreparable vertical fractures",
      "Very severe bone loss",
      "Teeth with untreatable root canals",
      "Medical conditions that contraindicate the procedure"
    ],

    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer: "No, the treatment is performed under local anesthesia, so it is completely painless. Some patients may experience sensitivity in the following days, manageable with common painkillers."
      },
      {
        question: "How long does a root canal treated tooth last?",
        answer: "With proper prosthetic reconstruction (crown) and good oral hygiene, a root canal treated tooth can last a lifetime. It is essential to protect the tooth with a crown to prevent fractures."
      },
      {
        question: "How many sessions are necessary?",
        answer: "In most cases, treatment can be completed in 1-2 sessions. Complex cases or retreatments may require additional sessions."
      },
      {
        question: "Does the root canal treated tooth darken?",
        answer: "With modern techniques and materials, this risk is minimized. In case of darkening, internal whitening techniques exist to restore color."
      },
      {
        question: "Is it better than extraction?",
        answer: "Absolutely yes. Preserving the natural tooth is always preferable, maintaining natural chewing function and avoiding the need for implants or bridges."
      }
    ],

    images: {
      main: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
        "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=1200&q=80",
        "https://images.unsplash.com/photo-1606811956291-c6a86d6d2ee0?w=1200&q=80"
      ]
    }
  }
}
