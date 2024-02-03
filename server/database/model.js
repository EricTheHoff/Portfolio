import { DataTypes, Model } from 'sequelize'
import connectToDB from './db.js'
import util from 'util'

const db = await connectToDB()

class Project extends Model {
  [util.inspect.custom]() {
    return this.toJSON()
  }
}

Project.init (
  {
    projectId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    githubLink: {
      type: DataTypes.STRING,
    },
    demoLink: {
      type: DataTypes.STRING,
    }
  },
  {
    modelName: 'project',
    sequelize: db
  }
)

export { db, Project }