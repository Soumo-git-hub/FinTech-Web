import personasData from '../../data/personas.json';

export default function handler(req, res) {
  // Check if we're using mock database
  const useMockDB = process.env.NEXT_PUBLIC_MOCK_DB === 'true';

  if (req.method === 'POST') {
    const { userId, personaId } = req.body;
    
    if (useMockDB) {
      // Mock database operation
      const selection = {
        userId,
        personaId,
        timestamp: new Date().toISOString()
      };
      
      // Log the selection (in a real app, this would be saved to a database)
      console.log('Persona selection (mock DB):', selection);
      
      res.status(200).json({ 
        success: true, 
        message: 'Persona selection recorded in mock database',
        selection,
        usingMockDB: true
      });
    } else {
      // This would be where real database operations would happen
      res.status(501).json({ 
        success: false, 
        message: 'Real database not implemented yet',
        usingMockDB: false
      });
    }
  } else if (req.method === 'GET') {
    // Return the list of personas
    res.status(200).json({
      personas: personasData.personas,
      usingMockDB: useMockDB
    });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 