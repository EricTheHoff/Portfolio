import { Sequelize } from 'sequelize'
import 'dotenv/config.js'

// URI determined in model.js
const connectToDB = async () => {
  console.log(`Initializing Connection to DB...`)

  const sequelize = new Sequelize(
    process.env.REACT_APP_PSQL_DB,
    process.env.REACT_APP_PSQL_USER,
    process.env.REACT_APP_PSQL_PW,
    {
      host: process.env.REACT_APP_PSQL_HOST,
      logging: false,
      define: {
        underscored: true,
        timestamps: false,
      },
      dialect: 'postgres',
    }
  )

  try {
    await sequelize.authenticate()
    console.log(`Connected to DB Successfully`)
  } catch (error) {
    console.error(`Unable to connect to DB: ${error}`)
  }

  return sequelize
}

export default connectToDB