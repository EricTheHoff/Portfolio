import { db, Project } from './model.js'

console.log(`Syncing DB...`)

await db.sync({ force: true })

console.log(`Seeding DB...`)

let seedProjects = []
const project1 = Project.create({
  image: 'placeholder text for now',
  title: 'Test Project 01',
  description: 'Testing this to make sure that its information is seeded correctly into the database.',
  link: 'https://github.com/EricTheHoff/translationApp/tree/main'
})
const project2 = Project.create({
  image: 'placeholder text for now',
  title: 'Test Project 02',
  description: 'This information should also be seeded into the database.',
  link: 'https://github.com/EricTheHoff/translationApp/tree/main'
})
seedProjects.push(project1, project2)

const projectsSeeded = await Promise.all(seedProjects)

console.log(projectsSeeded)

await db.close()

console.log(`Finished seeding the DB.`)