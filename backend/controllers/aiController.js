export const summarizeNews = async (req, res) => {
  const { text } = req.body;

  // Mock AI response
  res.json({
    summary: `Summary: ${text.slice(0, 120)}... (AI summary will be added later)`
  });
};
