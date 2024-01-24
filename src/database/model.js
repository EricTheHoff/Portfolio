import { DataTypes, Model } from 'sequelize'
import connectToDB from './db.js'
import util from 'util'

const db = await connectToDB('postgresql:///ericthehoff')

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
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    }
  },
  {
    modelName: 'project',
    sequelize: db
  }
)

export { db, Project }