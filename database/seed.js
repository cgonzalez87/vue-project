/* eslint-env node */

import 'dotenv/config'
import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.VITE_SUPABASE_URL
const serviceRoleKey = process.env.SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Missing environment variables for Supabase')
}

const supabase = createClient(supabaseUrl, serviceRoleKey)

const seedProject = async (numEntries) => {
  const projects = []

  for (let i = 0; i < numEntries; i++) {
    const name = faker.lorem.words(3)

    projects.push({
      name: name,
      slug: name.toLowerCase().replace(/ /g, '_'),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }
  await supabase.from('projects').insert(projects)
}

await seedProject(10)
