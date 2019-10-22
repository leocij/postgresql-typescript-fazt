import { Request, Response } from 'express'
import { pool } from '../database'
import { QueryResult } from 'pg'

export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('select * from users')
    return res.status(200).json(response.rows)
  } catch (error) {
    console.trace(error)
    return res.status(500).json('Internal Server Error')
  }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id)
  const response: QueryResult = await pool.query('select * from users where id = $1', [id])
  return res.json(response.rows[0])
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const {name, email} = req.body
  const response: QueryResult = await pool.query('insert into users (name, email) values ($1, $2) returning *', [name, email])
  return res.status(201).json(response.rows[0])
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id)
  const {name, email} = req.body
  const response: QueryResult = await pool.query('update users set name = $1, email = $2 where id = $3 returning *', [name, email, id])
  return res.status(200).json(response.rows[0])
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id)
  await pool.query('delete from users where id = $1', [id])
  return res.send()
}