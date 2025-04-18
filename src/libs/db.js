// lib/db.js
import { Sequelize } from 'sequelize'
import pg from 'pg'

export const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: 'postgres',
  dialectModule: pg,
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  logging: false,
})
