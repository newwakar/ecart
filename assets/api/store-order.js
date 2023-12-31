import { supabase } from './lib/initSupabase';

const webhook = async (req, res) => {
 if (req.method === 'POST') {
    const orderData = req.body;

    const { data, error } = await supabase
      .from('orders')
      .insert([orderData]);

    if (error) {
      res.status(500).json({ error: 'Error inserting order' });
    } else {
      res.status(200).json({ success: 'Order inserted successfully' });
    }
 } else {
    res.status(405).json({ error: 'Method not allowed' });
 }
};

export default webhook;


