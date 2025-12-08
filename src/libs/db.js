// lib/db.js
import { Sequelize } from 'sequelize'
import mysql2 from 'mysql2'

export const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: 'mysql',
  dialectModule: mysql2,
  dialectOptions: {
    charset: 'utf8mb4',
    timezone: '+00:00',
  },
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  logging: false,
})
