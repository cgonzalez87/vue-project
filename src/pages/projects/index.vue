<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient';


(async () => {
  const { data, error } = await supabase.from('projects').select();
  if (error) console.log(error);

  console.log('Projects', data);
})();
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go to home</RouterLink>
  </div>
</template>
