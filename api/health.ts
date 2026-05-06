export default function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  res.status(200).json({
    status: 'ok',
    name: 'Strata DS',
    version: '1.0.0',
    tools: 11,
    components: 126,
    foundations: 8,
    rules: 5,
    antiPatterns: 17,
  });
}
