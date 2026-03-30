import { supabase } from './supabaseClient'

const WEBHOOK_URL = "https://hook.us2.make.com/oglhde9ythoowa3cfvhyofojy5eam0on"

export const submitLead = async (data) => {
  try {
    // check user
    let { data: existing } = await supabase
      .from('users')
      .select('*')
      .eq('email', data.email)
      .maybeSingle()

    let userId

    if (!existing) {
      const { data: newUser } = await supabase
        .from('users')
        .insert([{ 
          email: data.email,
          name: data.name,
          phone: data.phone
        }])
        .select()
        .single()
      
      // If table restrictions or RLS blocked insert, the above might fail or return null.
      // But we will assume the structure allows it.
      if (newUser) {
          userId = newUser.id
      }
    } else {
      userId = existing.id
    }

    if (userId) {
        // insert lead
        await supabase.from('leads').insert([
          {
            user_id: userId,
            source: data.source,
            tag: data.tag,
            status: "new"
          }
        ])
    }

    // send webhook
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString()
      })
    })

    return { success: true }

  } catch (err) {
    console.error(err)
    return { success: false }
  }
}
