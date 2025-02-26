/* eslint-env node */

import 'dotenv/config'
import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Log environment variables to verify they are loaded correctly
console.log('VITE_SUPABASE_URL:', process.env.VITE_SUPABASE_URL)
console.log('SERVICE_ROLE_KEY:', process.env.SERVICE_ROLE_KEY)

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.VITE_SUPABASE_URL
const serviceRoleKey = process.env.SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Missing environment variables for Supabase')
}

const supabase = createClient(supabaseUrl, serviceRoleKey)
