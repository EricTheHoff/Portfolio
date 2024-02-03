import { db, Project } from './model.js'

console.log(`Syncing DB...`)

await db.sync({ force: true })

console.log(`Seeding DB...`)

let seedProjects = []
const remindMe = Project.create({
  title: 'Remind Me',
  description: "An application which allows users to create and save customized reminders to an account. Users can log into the application to view their reminders and filter them by category. Emails are sent out for each reminder at a time specified by the user, after which the reminder is deleted from the database automatically. This is a PERN stack project, built with PostgreSQL, Express, React, and Node.js.",
  githubLink: 'https://github.com/EricTheHoff/RemindMe',
  demoLink: 'https://drive.google.com/file/d/1ysH7ITBsRKaS51nMaaLVTWE1nc-lvwCI/view?usp=sharing'
})
const babelBuddy = Project.create({
  title: 'BabelBuddy',
  description: "An application for English-speakers who are interested in learning a new language. This app utilizes the DeepL API to allow users to translate words or phrases into over 25 global languages. Users can choose to translate any word or phrase, and can even upload text and PDF documents to have them translated. Users can save their translations to an account to study them later, and the app connects to Google Map's API to help users find language schools in their area. This is a PERN stack project, built with PostgreSQL, Express, React, and Node.js.",
  githubLink: 'https://github.com/EricTheHoff/translationApp',
  demoLink: 'https://drive.google.com/file/d/1MqG0yS7KdfOCtsa3ldsDsYMsRSuqlICV/view?usp=sharing'
})
seedProjects.push(remindMe, babelBuddy)

const projectsSeeded = await Promise.all(seedProjects)

console.log(projectsSeeded)

await db.close()

console.log(`Finished seeding the DB.`)