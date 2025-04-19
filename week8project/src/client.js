import {createClient} from '@supabase/supabase-js'

const URL = 'https://dhevnihpyezpojhhoshg.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRoZXZuaWhweWV6cG9qaGhvc2hnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MjY1ODksImV4cCI6MjA2MDUwMjU4OX0.-rN9vC4DC64oudoNyV6lxgrIV6WBL1wj-qqjMSLISJI'

export const supabase = createClient(URL,API_KEY);