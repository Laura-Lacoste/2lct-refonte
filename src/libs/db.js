// lib/db.js
import { Sequelize } from 'sequelize'
import pg from 'pg'

export const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: 'mysql',
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  logging: false,
})
