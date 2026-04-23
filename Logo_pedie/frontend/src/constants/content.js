import { TEAL, TEAL_LIGHT, AMBER, AMBER_LIGHT, CORAL, CORAL_LIGHT } from "./colors";

export const NAV_LINKS = ["Fonctionnalités", "Comment ça marche", "Editeur"];

export const FEATURES = [
  {
    icon: "🔊",
    color: TEAL_LIGHT,
    accent: TEAL,
    title: "Lecture Audio",
    desc: "Le texte est lu à voix haute avec une voix naturelle. Suivez visuellement chaque mot mis en surbrillance.",
  },
  {
    icon: "✏️",
    color: AMBER_LIGHT,
    accent: AMBER,
    title: "Aide à l'écriture",
    desc: "Corrections intelligentes et suggestions adaptées aux erreurs fréquentes liées à la dyslexie.",
  },
  {
    icon: "🔤",
    color: CORAL_LIGHT,
    accent: CORAL,
    title: "Police Accessible",
    desc: "L'éditeur utilise la police Atkinson Hyperlegible, spécialement conçue pour offrir une lisibilité optimale et réduire la fatigue visuelle.",
  },
  {
    icon: "🎙️",
    color: "#EAF3DE",
    accent: "#639922",
    title: "Dictée Vocale",
    desc: "Parlez au lieu d'écrire. La dictée vocale transforme instantanément votre voix en texte avec précision.",
  },
  {
    icon: "🔮",
    color: "#E6F1FB",
    accent: "#185FA5",
    title: "Prédiction de Mots",
    desc: "Des suggestions intelligentes apparaissent en temps réel au fil de votre frappe pour faciliter la rédaction.",
  },
  {
    icon: "🎛️",
    color: "#EEEDFE",
    accent: "#534AB7",
    title: "Paramètres Vocaux",
    desc: "Ajustez la vitesse, la tonalité et le volume de la lecture audio pour l'adapter parfaitement à vos besoins.",
  },
];

export const STEPS = [
  {
    n: "1",
    title: "Collez ou écrivez votre texte",
    desc: "Importez un document, collez du texte ou commencez à écrire directement dans l'éditeur.",
    color: TEAL,
    bg: TEAL_LIGHT,
  },
  {
    n: "2",
    title: "Choisissez vos outils",
    desc: "Activez la lecture audio, ajustez la police ou les couleurs selon votre confort personnel.",
    color: AMBER,
    bg: AMBER_LIGHT,
  },
  {
    n: "3",
    title: "Lisez et écrivez mieux",
    desc: "Profitez d'une expérience adaptée à votre rythme, accessible partout et à tout moment.",
    color: CORAL,
    bg: CORAL_LIGHT,
  },
];

export const AUDIENCES = [
  {
    emoji: "🧒",
    label: "Enfants",
    age: "6 - 16 ans",
    color: AMBER,
    bg: AMBER_LIGHT,
    points: [
      "Lecture audio pour un suivi facilité",
      "Police adaptée pour réduire l'effort visuel",
      "Prédiction de mots pour éviter les blocages",
      "Ajustement vocal (vitesse et tonalité sur-mesure)",
    ],
  },
  {
    emoji: "🧑‍💼",
    label: "Adultes",
    age: "17 ans et plus",
    color: TEAL,
    bg: TEAL_LIGHT,
    points: [
      "Dictée vocale pour une rédaction rapide",
      "Correction intelligente et en temps réel",
      "Assistance à la frappe pour des textes professionnels",
      "Interface discrète et paramètres hautement personnalisables",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Fatima B.",
    role: "Mère d'un enfant dyslexique",
    avatar: "FB",
    color: AMBER,
    bg: AMBER_LIGHT,
    text: "Mon fils de 9 ans a retrouvé le goût de lire grâce à la police dyslexique et à la lecture audio. En seulement 3 mois, ses notes ont progressé.",
  },
  {
    name: "Ahmed K.",
    role: "Ingénieur, diagnostiqué à 28 ans",
    avatar: "AK",
    color: TEAL,
    bg: TEAL_LIGHT,
    text: "Enfin un outil qui m'accompagne au travail sans attirer l'attention. Je rédige mes rapports bien plus sereinement.",
  },
  {
    name: "Sonia M.",
    role: "Enseignante CP",
    avatar: "SM",
    color: CORAL,
    bg: CORAL_LIGHT,
    text: "J'utilise l'application avec toute ma classe. L'overlay de couleur a transformé les séances de lecture pour mes élèves à besoins spécifiques.",
  },
];

export const STATS = [
  { val: 15, suffix: "%", label: "de la population est dyslexique", color: TEAL },
  { val: 94, suffix: "%", label: "des utilisateurs progressent en 1 mois", color: AMBER },
  { val: 50, suffix: "k+", label: "familles accompagnées", color: CORAL },
];
