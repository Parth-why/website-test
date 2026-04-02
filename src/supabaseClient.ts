import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rhnbqshejwkoglxuswil.supabase.co'
const supabaseAnonKey = 'sb_publishable_HJHeM10DmDm0Sdwp3Vy-Qw_OmvojhDh'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)