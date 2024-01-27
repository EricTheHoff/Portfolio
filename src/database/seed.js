import { db, Project } from './model.js'

console.log(`Syncing DB...`)

await db.sync({ force: true })

console.log(`Seeding DB...`)

let seedProjects = []
const remindMe = Project.create({
  title: 'Remind Me',
  description: "An automated reminder application which allows users to create and save customized reminders to an account. Each reminder allows a user to set a title, description, delivery date/time, delivery email, and a reminder category. Users can filter their reminders by category if they wish. Emails are sent out for their reminders at their specified time, after which the reminder is deleted automatically. This project was built using PERN (PostgreSQL, Express, React, Node).",
  githubLink: 'https://github.com/EricTheHoff/RemindMe',
  demoLink: 'https://drive.google.com/file/d/1ysH7ITBsRKaS51nMaaLVTWE1nc-lvwCI/view?usp=sharing'
})
const babelBuddy = Project.create({
  title: 'BabelBuddy',
  description: "An application for English-speakers who are interested in learning a new language. This app utilizes DeepL's translation API to translate English strings into over 25 global languages. Users can save their translations to an account and study from them in a flashcard-format. The app also allows users to upload text or PDF documents, highlight strings within the document, and have the highlighted text translated. Finally, the app includes a map feature that connects to Google Maps API and enables users to find language schools in their area. This project was built using PERN (PostgreSQL, Express, React, Node).",
  githubLink: 'https://github.com/EricTheHoff/translationApp',
  demoLink: 'https://drive.google.com/file/d/1MqG0yS7KdfOCtsa3ldsDsYMsRSuqlICV/view?usp=sharing'
})
const project03 = Project.create({
  title: 'Another One',
  description: "An application for English-speakers who are interested in learning a new language. This app utilizes DeepL's translation API to translate English strings into over 25 global languages. Users can save their translations to an account and study from them in a flashcard-format. The app also allows users to upload text or PDF documents, highlight strings within the document, and have the highlighted text translated. Finally, the app includes a map feature that connects to Google Maps API and enables users to find language schools in their area. This project was built using PERN (PostgreSQL, Express, React, Node).",
  githubLink: 'https://github.com/EricTheHoff/translationApp',
  demoLink: 'https://drive.google.com/file/d/1MqG0yS7KdfOCtsa3ldsDsYMsRSuqlICV/view?usp=sharing'
})
const project04 = Project.create({
  title: 'Keeps Going',
  description: "An application for English-speakers who are interested in learning a new language. This app utilizes DeepL's translation API to translate English strings into over 25 global languages. Users can save their translations to an account and study from them in a flashcard-format. The app also allows users to upload text or PDF documents, highlight strings within the document, and have the highlighted text translated. Finally, the app includes a map feature that connects to Google Maps API and enables users to find language schools in their area. This project was built using PERN (PostgreSQL, Express, React, Node).",
  githubLink: 'https://github.com/EricTheHoff/translationApp',
  demoLink: 'https://drive.google.com/file/d/1MqG0yS7KdfOCtsa3ldsDsYMsRSuqlICV/view?usp=sharing'
})
const project05 = Project.create({
  title: 'Ah Yisss',
  description: "An application for English-speakers who are interested in learning a new language. This app utilizes DeepL's translation API to translate English strings into over 25 global languages. Users can save their translations to an account and study from them in a flashcard-format. The app also allows users to upload text or PDF documents, highlight strings within the document, and have the highlighted text translated. Finally, the app includes a map feature that connects to Google Maps API and enables users to find language schools in their area. This project was built using PERN (PostgreSQL, Express, React, Node).",
  githubLink: 'https://github.com/EricTheHoff/translationApp',
  demoLink: 'https://drive.google.com/file/d/1MqG0yS7KdfOCtsa3ldsDsYMsRSuqlICV/view?usp=sharing'
})
seedProjects.push(remindMe, babelBuddy, project03, project04, project05)

const projectsSeeded = await Promise.all(seedProjects)

console.log(projectsSeeded)

await db.close()

console.log(`Finished seeding the DB.`)