import { ServiceContent } from './types'

export const content: ServiceContent = {
  it: {
    title: "Chirurgia Orale",
    description: "Interventi chirurgici eseguiti con precisione e sicurezza.",
    features: ["Estrazioni dentali", "Implantologia", "Rigenerazione ossea"],

    whatIs: "La chirurgia orale comprende tutti gli interventi chirurgici eseguiti nel cavo orale, dalle semplici estrazioni dentali agli interventi più complessi come l'implantologia e la rigenerazione ossea. Utilizziamo protocolli chirurgici minimamente invasivi, tecnologie digitali per la pianificazione 3D e tecniche avanzate per garantire risultati ottimali, rapida guarigione e massimo comfort per il paziente. Ogni intervento è personalizzato e pianificato con precisione millimetrica.",

    benefits: [
      "Interventi minimamente invasivi con recupero rapido",
      "Pianificazione digitale 3D per massima precisione",
      "Tecniche avanzate di rigenerazione ossea",
      "Controllo ottimale del dolore e del gonfiore post-operatorio",
      "Protocolli di sterilità rigorosi",
      "Possibilità di sedazione cosciente per interventi complessi",
      "Follow-up dedicato per ottimizzare la guarigione"
    ],

    process: [
      {
        title: "Pianificazione pre-chirurgica",
        description: "Esami radiografici 3D (CBCT), valutazione clinica completa e pianificazione digitale dell'intervento con simulazione dei risultati"
      },
      {
        title: "Preparazione",
        description: "Anestesia locale o sedazione cosciente se necessario, preparazione del campo operatorio con massimi standard di sterilità"
      },
      {
        title: "Intervento chirurgico",
        description: "Esecuzione dell'intervento con tecniche minimamente invasive, strumenti di precisione e massima attenzione ai tessuti"
      },
      {
        title: "Post-operatorio",
        description: "Suture riassorbibili, istruzioni dettagliate, prescrizione farmacologica e programazione controlli per ottimizzare la guarigione"
      }
    ],

    aftercare: [
      "Applicare ghiaccio nelle prime 24 ore per ridurre gonfiore",
      "Assumere farmaci prescritti secondo indicazioni",
      "Dieta morbida e fredda per i primi giorni",
      "Evitare risciacqui vigorosi per 24 ore",
      "Non fumare per almeno 2 settimane",
      "Igiene orale delicata evitando la zona operata",
      "Riposo e riduzione dell'attività fisica per 48-72 ore",
      "Dormire con la testa sollevata"
    ],

    duration: {
      session: "30-120 minuti",
      results: "Permanenti",
      recovery: "7-14 giorni"
    },

    suitableFor: [
      "Pazienti che necessitano di estrazioni dentali semplici o complesse",
      "Chi desidera implanti dentali per sostituire denti mancanti",
      "Necessità di rigenerazione ossea pre-implantare",
      "Estrazioni di denti del giudizio inclusi o parzialmente erotti",
      "Chirurgia pre-protesica per ottimizzare i risultati",
      "Pazienti in buone condizioni di salute generale"
    ],

    notSuitableFor: [
      "Pazienti con patologie sistemiche non controllate",
      "Terapie anticoagulanti non gestibili",
      "Scarsa igiene orale non migliorabile pre-chirurgia",
      "Fumatori che non possono astenersi nel post-operatorio",
      "Condizioni mediche che controindicano la chirurgia"
    ],

    faqs: [
      {
        question: "L'estrazione del dente del giudizio è dolorosa?",
        answer: "L'intervento viene eseguito in anestesia locale quindi è indolore. Nel post-operatorio, il dolore è ben controllato con farmaci antidolorifici. Gonfiore e disagio sono normali e si risolvono in pochi giorni."
      },
      {
        question: "Quanto dura un impianto dentale?",
        answer: "Con corretta igiene orale e controlli periodici, gli impianti dentali possono durare decenni, spesso tutta la vita. Il tasso di successo a lungo termine supera il 95%."
      },
      {
        question: "Posso fare l'impianto subito dopo l'estrazione?",
        answer: "In molti casi sì, con la tecnica dell'impianto post-estrattivo immediato. La fattibilità dipende dalle condizioni dell'osso e dei tessuti, valutabile con esami specifici."
      },
      {
        question: "La rigenerazione ossea è necessaria?",
        answer: "Dipende dalla quantità e qualità dell'osso residuo. Quando l'osso non è sufficiente per stabilizzare l'impianto, la rigenerazione ossea permette di ricreare il volume necessario."
      },
      {
        question: "Quanto tempo devo aspettare dopo l'estrazione?",
        answer: "Dipende dal tipo di intervento successivo. Per le protesi rimovibili, alcune settimane. Per gli impianti, può variare da immediato a 3-4 mesi, in base al caso specifico."
      }
    ]
  },
  en: {
    title: "Oral Surgery",
    description: "Surgical procedures performed with precision and safety.",
    features: ["Dental extractions", "Implantology", "Bone regeneration"],

    whatIs: "Oral surgery includes all surgical procedures performed in the oral cavity, from simple dental extractions to more complex interventions such as implantology and bone regeneration. We use minimally invasive surgical protocols, digital technologies for 3D planning, and advanced techniques to ensure optimal results, rapid healing, and maximum patient comfort. Each intervention is personalized and planned with millimetric precision.",

    benefits: [
      "Minimally invasive interventions with rapid recovery",
      "3D digital planning for maximum precision",
      "Advanced bone regeneration techniques",
      "Optimal control of post-operative pain and swelling",
      "Rigorous sterility protocols",
      "Possibility of conscious sedation for complex interventions",
      "Dedicated follow-up to optimize healing"
    ],

    process: [
      {
        title: "Pre-surgical planning",
        description: "3D radiographic examinations (CBCT), complete clinical assessment, and digital intervention planning with results simulation"
      },
      {
        title: "Preparation",
        description: "Local anesthesia or conscious sedation if necessary, operating field preparation with maximum sterility standards"
      },
      {
        title: "Surgical intervention",
        description: "Execution of intervention with minimally invasive techniques, precision instruments, and maximum attention to tissues"
      },
      {
        title: "Post-operative",
        description: "Absorbable sutures, detailed instructions, pharmacological prescription, and scheduled controls to optimize healing"
      }
    ],

    aftercare: [
      "Apply ice in the first 24 hours to reduce swelling",
      "Take prescribed medications as directed",
      "Soft and cold diet for the first days",
      "Avoid vigorous rinsing for 24 hours",
      "Do not smoke for at least 2 weeks",
      "Gentle oral hygiene avoiding operated area",
      "Rest and reduced physical activity for 48-72 hours",
      "Sleep with head elevated"
    ],

    duration: {
      session: "30-120 minutes",
      results: "Permanent",
      recovery: "7-14 days"
    },

    suitableFor: [
      "Patients needing simple or complex dental extractions",
      "Those desiring dental implants to replace missing teeth",
      "Need for pre-implant bone regeneration",
      "Extractions of impacted or partially erupted wisdom teeth",
      "Pre-prosthetic surgery to optimize results",
      "Patients in good general health"
    ],

    notSuitableFor: [
      "Patients with uncontrolled systemic pathologies",
      "Unmanageable anticoagulant therapies",
      "Poor oral hygiene not improvable pre-surgery",
      "Smokers who cannot abstain post-operatively",
      "Medical conditions that contraindicate surgery"
    ],

    faqs: [
      {
        question: "Is wisdom tooth extraction painful?",
        answer: "The intervention is performed under local anesthesia so it is painless. Post-operatively, pain is well controlled with painkillers. Swelling and discomfort are normal and resolve in a few days."
      },
      {
        question: "How long does a dental implant last?",
        answer: "With proper oral hygiene and periodic checks, dental implants can last decades, often a lifetime. The long-term success rate exceeds 95%."
      },
      {
        question: "Can I get the implant immediately after extraction?",
        answer: "In many cases yes, with the immediate post-extractive implant technique. Feasibility depends on bone and tissue conditions, assessable with specific examinations."
      },
      {
        question: "Is bone regeneration necessary?",
        answer: "It depends on the quantity and quality of residual bone. When bone is insufficient to stabilize the implant, bone regeneration allows recreating the necessary volume."
      },
      {
        question: "How long must I wait after extraction?",
        answer: "It depends on the type of subsequent intervention. For removable prosthetics, a few weeks. For implants, it can vary from immediate to 3-4 months, based on the specific case."
      }
    ]
  }
}
