import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

const ADMIN_EMAIL = "parthdandekar07@gmail.com" // 👈 CHANGE THIS

const Admin = () => {
  const [contacts, setContacts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    checkAccess()
  }, [])

  const checkAccess = async () => {
    const { data } = await supabase.auth.getUser()
    const user = data.user

    if (!user || user.email !== ADMIN_EMAIL) {
      setAuthorized(false)
      setLoading(false)
      return
    }

    setAuthorized(true)
    fetchContacts()
  }

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('id', { ascending: false })

    if (!error) {
      setContacts(data || [])
    }

    setLoading(false)
  }

  // 🚫 NOT AUTHORIZED
  if (!loading && !authorized) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-red-600">Access Denied ❌</h1>
        <p className="mt-4">You are not authorized to view this page.</p>
      </div>
    )
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {loading ? (
        <p>Loading...</p>
      ) : contacts.length === 0 ? (
        <p>No submissions yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Service</th>
                <th className="p-3 border">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item) => (
                <tr key={item.id}>
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.email}</td>
                  <td className="p-3 border">{item.phone}</td>
                  <td className="p-3 border">{item.service}</td>
                  <td className="p-3 border">{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Admin

